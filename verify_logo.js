import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function checkLogo(url) {
    console.log(`\nChecking URL: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Wait for the dynamic background check to complete (it has a 100ms and 500ms timeout)
    await new Promise(r => setTimeout(r, 1000));

    const logoClass = await page.evaluate(() => {
      const img = document.querySelector('img[src="/logos/ksv-logo-horizontal.png"]');
      return img ? img.className : 'LOGO NOT FOUND';
    });
    
    const headerClass = await page.evaluate(() => {
      const header = document.querySelector('header');
      return header ? header.className : 'HEADER NOT FOUND';
    });

    console.log(`Header classes: ${headerClass}`);
    console.log(`Logo classes: ${logoClass}`);
    
    if (logoClass.includes('brightness-0 invert')) {
      console.log('=> Logo is WHITE (inverted for dark background)');
    } else if (logoClass !== 'LOGO NOT FOUND') {
      console.log('=> Logo is ORIGINAL COLOR (for light background or solid navbar)');
    }
  }

  try {
    // Check Home Page (has HeroSlider, should be dark)
    await checkLogo('http://localhost:5173/');
    
    // Check About Page 
    await checkLogo('http://localhost:5173/about');
    
    // Scroll down on Home Page to trigger solid navbar
    console.log(`\nScrolling down on Home Page...`);
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(r => setTimeout(r, 500)); // wait for scroll event state update
    
    const scrolledLogoClass = await page.evaluate(() => {
      const img = document.querySelector('img[src="/logos/ksv-logo-horizontal.png"]');
      return img ? img.className : 'LOGO NOT FOUND';
    });
    console.log(`Scrolled Logo classes: ${scrolledLogoClass}`);
    if (scrolledLogoClass.includes('brightness-0 invert')) {
      console.log('=> ERROR: Logo is STILL WHITE after scrolling (should be original color on solid navbar)');
    } else {
      console.log('=> SUCCESS: Logo is ORIGINAL COLOR after scrolling to solid navbar');
    }

  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await browser.close();
  }
})();
