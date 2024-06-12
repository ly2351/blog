import fs from 'fs';
import path from 'path'

const sidebar: Record<string, any[]> = {}

const blacklistedFiles = ['.git', '.DS_Store'] // 黑名单，列出所有需要忽略的文件和目录名

// 增加一个参数来跟踪当前目录的深度
const addEntries = (dir: string, obj: any[], linkPrefix: string, depth: number) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (blacklistedFiles.includes(entry.name)) continue // 忽略黑名单中的目录
      const nestedObj: any = { text: entry.name, items: [] }
      // 如果目录深度大于或等于3，设置 collapsed 属性
      if (depth >= 4) nestedObj.collapsed = true
      addEntries(fullPath, nestedObj.items, linkPrefix + '/' + entry.name, depth + 1)
      if (nestedObj.items.length > 0) {
        obj.push(nestedObj)
      }
    } else if (entry.isFile()) {
      if (!blacklistedFiles.some(blacklisted => entry.name.includes(blacklisted))) {
        // 忽略黑名单中的文件
        obj.push({ text: path.basename(entry.name, '.md'), link: linkPrefix + '/' + entry.name })
      }
    }
  }
}

const exploreDirectories = (currentPath: string, level = 0, prefix = '') => {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true })
  const dirEntries = entries.filter(dirent => dirent.isDirectory() && !blacklistedFiles.includes(dirent.name)) // 过滤掉黑名单中的目录
  if (level === 2) {
    // Assuming we're now at the third level directory
    sidebar[prefix] = []
    addEntries(currentPath, sidebar[prefix], prefix, level + 1)
  } else {
    for (const entry of dirEntries) {
      exploreDirectories(path.join(currentPath, entry.name), level + 1, prefix + '/' + entry.name)
    }
  }
}

const baseDir = './docs'
exploreDirectories(baseDir, 0, '/docs')

console.log(JSON.stringify(sidebar, null, 2)) // 使用缩进级别为2来美化输出

export default sidebar