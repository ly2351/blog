import fs from 'fs';
import path from 'path';

const blacklistedFiles = ['.git', '.svn'];

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const addEntries = (dir: string, obj: any[], linkPrefix: string) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !blacklistedFiles.includes(entry.name)) {
      const nestedObj: any = { text: capitalize(entry.name), items: [] };
      addEntries(fullPath, nestedObj.items, `${linkPrefix}/${entry.name}`);

      if (nestedObj.items.length > 0) {
        obj.push(nestedObj);
      }
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      const link = `${linkPrefix}/${path.basename(entry.name, '.md')}`;
      obj.push({ text: capitalize(path.basename(entry.name, '.md')), link });
    }
  }
};

const generateSidebar = (baseDir: string) => {
  const sidebar: Record<string, any[]> = {};
  
  const exploreDirectories = (currentPath: string, prefix = '') => {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    const dirEntries = entries.filter(dirent => dirent.isDirectory() && !blacklistedFiles.includes(dirent.name));

    for (const entry of dirEntries) {
      const dirPath = path.join(currentPath, entry.name);
      const key = `${prefix}/${entry.name}/`;
      sidebar[key] = [];
      
      const indexMdPath = path.join(dirPath, 'index.md');
      if (fs.existsSync(indexMdPath)) {
        sidebar[key].push({ text: 'Index', link: `${key}index` });
      }

      addEntries(dirPath, sidebar[key], key);
    }
  };

  exploreDirectories(baseDir, '/docs');

  return sidebar;
};

// 导出生成侧边栏的函数
export { generateSidebar };
