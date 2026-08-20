const fs = require('fs');
const path = require('path');

const docsBaseDir = path.join(__dirname, 'src', 'content', 'docs');
const imagesBaseDir = path.join(__dirname, 'public', 'images', 'hyperlis');

// Migrate license-management.mdx from extend-features to license if exists
const oldLicenseFile = path.join(docsBaseDir, 'extend-features', 'license-management.mdx');
const newLicenseDir = path.join(docsBaseDir, 'license');
const newLicenseFile = path.join(newLicenseDir, 'license-management.mdx');

if (fs.existsSync(oldLicenseFile)) {
  if (!fs.existsSync(newLicenseDir)) {
    fs.mkdirSync(newLicenseDir, { recursive: true });
  }
  fs.copyFileSync(oldLicenseFile, newLicenseFile);
  fs.rmSync(oldLicenseFile, { force: true });
  console.log('Migrated license-management.mdx from extend-features -> license');
}

// Migrate overview to dashboard if exists
const oldOverviewDocDir = path.join(docsBaseDir, 'overview');
const newDashboardDocDir = path.join(docsBaseDir, 'dashboard');
if (fs.existsSync(oldOverviewDocDir)) {
  if (!fs.existsSync(newDashboardDocDir)) {
    fs.mkdirSync(newDashboardDocDir, { recursive: true });
  }
  const oldFiles = fs.readdirSync(oldOverviewDocDir);
  oldFiles.forEach(file => {
    fs.copyFileSync(path.join(oldOverviewDocDir, file), path.join(newDashboardDocDir, file));
  });
  fs.rmSync(oldOverviewDocDir, { recursive: true, force: true });
  console.log('Migrated docs overview -> dashboard');
}

const oldOverviewImgDir = path.join(imagesBaseDir, 'overview');
const newDashboardImgDir = path.join(imagesBaseDir, 'dashboard');
if (fs.existsSync(oldOverviewImgDir)) {
  if (!fs.existsSync(newDashboardImgDir)) {
    fs.mkdirSync(newDashboardImgDir, { recursive: true });
  }
  const oldImgs = fs.readdirSync(oldOverviewImgDir);
  oldImgs.forEach(img => {
    let destName = img === 'overview-01.png' ? 'dashboard-01.png' : img;
    fs.copyFileSync(path.join(oldOverviewImgDir, img), path.join(newDashboardImgDir, destName));
  });
  fs.rmSync(oldOverviewImgDir, { recursive: true, force: true });
  console.log('Migrated images overview -> dashboard');
}

const tabConfigs = {
  'dashboard': { name: 'Dashboard', img: 'dashboard-01.png' },
  'general': { name: 'Chung (General)', img: 'general-01.png' },
  'windows': { name: 'Windows', img: 'windows-01.png' },
  'uwp-apps': { name: 'Ứng dụng UWP (UWP Apps)', img: 'uwp-apps-01.png' },
  'startup-apps': { name: 'Khởi chạy (Startup Apps)', img: 'startup-apps-01.png' },
  'downloads': { name: 'Tải xuống (Downloads)', img: 'downloads-01.png' },
  'cleanup': { name: 'Dọn dẹp (Cleanup)', img: 'cleanup-01.png' },
  'network': { name: 'Mạng (Network)', img: 'network-01.png' },
  'usb-boot': { name: 'USB Boot', img: 'usb-boot-01.png' },
  'hardware': { name: 'Phần cứng (Hardware)', img: 'hardware-01.png' },
  'license': { name: 'QL Bản quyền (Manage License)', img: 'license-01.png' },
  'convert-skus': { name: 'Đổi phiên bản (Convert SKUs)', img: 'convert-skus-01.png' },
  'office-setup': { name: 'Cài đặt Office (Office Setup)', img: 'office-setup-01.png' },
  'extend-features': { name: 'Tính năng khác (Extend Features)', img: 'extend-features-01.png' },
  'wsap': { name: 'WSAP', img: 'wsap-01.png' },
  'printer-repair': { name: 'Sửa lỗi máy in (Printer Errors)', img: 'printer-repair-01.png' },
  'windows-repair': { name: 'Sửa lỗi Windows (Fix Windows Error)', img: 'windows-repair-01.png' }
};

const validTabs = Object.keys(tabConfigs);

// 1. Ensure all valid image folders exist in public/images/hyperlis/
validTabs.forEach(folder => {
  const imgFolder = path.join(imagesBaseDir, folder);
  if (!fs.existsSync(imgFolder)) {
    fs.mkdirSync(imgFolder, { recursive: true });
  }
  const gitkeep = path.join(imgFolder, '.gitkeep');
  if (!fs.existsSync(gitkeep)) {
    fs.writeFileSync(gitkeep, '');
  }
});


// 2. Remove unused / obsolete folders in docsBaseDir
if (fs.existsSync(docsBaseDir)) {
  const existingDocsFolders = fs.readdirSync(docsBaseDir, { withFileTypes: true });
  existingDocsFolders.forEach(item => {
    if (item.isDirectory() && !validTabs.includes(item.name)) {
      const unusedFolder = path.join(docsBaseDir, item.name);
      fs.rmSync(unusedFolder, { recursive: true, force: true });
      console.log(`Cleaned unused docs folder: ${item.name}`);
    }
  });
}

// 3. Remove unused / obsolete folders in imagesBaseDir
if (fs.existsSync(imagesBaseDir)) {
  const existingImgFolders = fs.readdirSync(imagesBaseDir, { withFileTypes: true });
  existingImgFolders.forEach(item => {
    if (item.isDirectory() && !validTabs.includes(item.name)) {
      const unusedFolder = path.join(imagesBaseDir, item.name);
      fs.rmSync(unusedFolder, { recursive: true, force: true });
      console.log(`Cleaned unused image folder: ${item.name}`);
    }
  });
}

// Emoji cleaning regex
const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F900}-\u{1F9FF}\u{FE0F}]/gu;

function stripEmojisAndNumbers(text) {
  return text
    .replace(emojiRegex, '')
    .replace(/^[0-9]+[️⃣\.\)\-]?\s*/u, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 4. Process each doc file
validTabs.forEach(folder => {
  const tabInfo = tabConfigs[folder];
  const folderPath = path.join(docsBaseDir, folder);
  if (!fs.existsSync(folderPath)) return;

  // Check what images exist in the folder
  const imgFolder = path.join(imagesBaseDir, folder);
  let availableImages = [];
  if (fs.existsSync(imgFolder)) {
    availableImages = fs.readdirSync(imgFolder)
      .filter(f => /\.(png|webp|jpg|jpeg|svg)$/i.test(f) && f !== '.gitkeep')
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  }

  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    if (!file.endsWith('.mdx')) return;
    const filePath = path.join(folderPath, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip changelog.mdx feed
    if (file === 'changelog.mdx') return;

    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!frontmatterMatch) return;

    const frontmatter = frontmatterMatch[0].trim();
    let body = content.substring(frontmatterMatch[0].length);

    // Extract imports
    const importLines = [];
    const nonImportLines = [];
    const lines = body.split(/\r?\n/);
    let insideImportBlock = true;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('import ')) {
        let normalizedLine = line
          .replace(/from '\.\.\/\.\.\/components\//g, "from '../../../components/")
          .replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/components\//g, "from '../../../components/");
        importLines.push(normalizedLine);
      } else if (line.trim() === '' && insideImportBlock && importLines.length > 0) {
        // skip empty lines in import block
      } else {
        insideImportBlock = false;
        nonImportLines.push(line);
      }
    }

    // Ensure Screenshot is imported
    const hasScreenshotImport = importLines.some(l => l.includes('Screenshot'));
    if (!hasScreenshotImport) {
      importLines.push("import Screenshot from '../../../components/Screenshot.astro';");
    }

    let restOfDoc = nonImportLines.join('\n');

    // Remove any existing Screenshot blocks
    restOfDoc = restOfDoc.replace(/<Screenshot[\s\S]*?\/>\r?\n?/g, '');

    // Clean emojis from all subheadings (###, ####) and list items
    restOfDoc = restOfDoc.replace(/^(###+\s+)(.*)$/gm, (match, prefix, title) => {
      return prefix + stripEmojisAndNumbers(title);
    });

    // Re-split into sections by ##
    const rawSections = restOfDoc.split(/(?=^##\s+)/m);
    const cleanedSections = [];

    for (let s of rawSections) {
      s = s.trim();
      if (!s) continue;
      if (s.startsWith('##')) {
        const firstLineBreak = s.indexOf('\n');
        let headingText = s;
        let secBody = '';
        if (firstLineBreak !== -1) {
          headingText = s.substring(0, firstLineBreak);
          secBody = s.substring(firstLineBreak + 1).trim();
        }
        
        let cleanHeading = headingText.replace(/^##\s*\d*\.?\s*/, '').trim();
        cleanHeading = stripEmojisAndNumbers(cleanHeading);
        
        // Skip illustration headings
        if (cleanHeading === 'Hình ảnh minh họa' || cleanHeading === 'Minh họa giao diện' || cleanHeading === 'Hình ảnh giao diện') {
          if (secBody) {
            cleanedSections.push({ isHeading: false, content: secBody });
          }
          continue;
        }

        cleanedSections.push({ isHeading: true, heading: cleanHeading, body: secBody });
      } else {
        cleanedSections.push({ isHeading: false, content: s });
      }
    }

    // Build new body
    let newBody = '';
    newBody += importLines.join('\n') + '\n\n';

    // Section 1: 1. Hình ảnh giao diện
    newBody += `## 1. Hình ảnh giao diện\n\n`;

    if (availableImages.length > 0) {
      availableImages.forEach((imgName, idx) => {
        const imagePath = `/images/hyperlis/${folder}/${imgName}`;
        const altSuffix = availableImages.length > 1 ? ` - Ảnh ${idx + 1}` : '';
        newBody += `<Screenshot \n  src="${imagePath}" \n  alt="Giao diện tab ${tabInfo.name}${altSuffix}"\n/>\n\n`;
      });
    } else {
      const imagePath = `/images/hyperlis/${folder}/${tabInfo.img}`;
      newBody += `<Screenshot \n  src="${imagePath}" \n  alt="Giao diện tab ${tabInfo.name}"\n/>\n\n`;
    }

    // Renumber remaining sections starting from 2
    let sectionIndex = 2;
    for (let item of cleanedSections) {
      if (item.isHeading) {
        newBody += `## ${sectionIndex}. ${item.heading}\n\n`;
        if (item.body) {
          newBody += `${item.body}\n\n`;
        }
        sectionIndex++;
      } else if (item.content) {
        newBody += `${item.content}\n\n`;
      }
    }

    // Clean duplicate newlines
    newBody = newBody.replace(/\n{3,}/g, '\n\n').trim() + '\n';

    const finalContent = frontmatter + '\n\n' + newBody;
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Updated images and headings in ${folder}/${file}`);
  });
});

console.log('All documentation pages and image folders successfully synchronized!');
