import fs from 'fs';
import { globSync } from 'glob';

// If glob isn't installed, fallback to manual list
const files = [
  'src/components/about/AboutHero.jsx',
  'src/components/academics/AcademicsHero.jsx',
  'src/components/cells/CellsHero.jsx',
  'src/components/contact/ContactHero.jsx',
  'src/components/examination/ExamHero.jsx',
  'src/components/journals/JournalsHero.jsx',
  'src/components/news/NewsHero.jsx',
  'src/components/recruitment/RecruitmentHero.jsx',
  'src/components/research/FundedProjectsHero.jsx',
  'src/components/research/ResearchHero.jsx',
  'src/components/research/ResearchProjectsHero.jsx',
  'src/components/sister-concerns/SisterConcernsHero.jsx',
  'src/components/sustainability/SdgHero.jsx'
];

let changed = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Look for className containing pt-24 or pt-32 and replace with pt-40 md:pt-48
    content = content.replace(/className=\"([^\"]*)pt-24([^\"]*)\"/g, 'className="$1pt-40 md:pt-48$2"');
    content = content.replace(/className=\"([^\"]*)pt-32([^\"]*)\"/g, 'className="$1pt-40 md:pt-48$2"');
    
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated: ' + file);
      changed++;
    }
  }
});

console.log('Total files updated: ' + changed);
