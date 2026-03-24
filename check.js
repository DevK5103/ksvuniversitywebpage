import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));

  console.log('Loading http://localhost:5173...');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
    console.log('Page loaded successfully.');
    // Check if body is empty or has error overlay
    const bodyContent = await page.evaluate(() => document.body.innerHTML);
    if (!bodyContent || bodyContent.includes('vite-error-overlay')) {
      console.log('Body might be empty or shows Vite error overlay.');
    } else {
      console.log('Page has content.');
    }
  } catch (err) {
    console.error('Failed to load page:', err);
  }

  await browser.close();
})();
