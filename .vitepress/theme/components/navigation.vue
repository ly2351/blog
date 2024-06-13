<template>
    <div class="navigation">
      <div v-for="(navItem, index) in navItems" :key="index" class="nav-section">
        <h2>{{ navItem.title }}</h2>
        <div class="nav-items-container">
          <div v-for="(item, idx) in navItem.items" :key="idx" class="nav-item">
            <a :href="item.url" target="_blank">
              <div class="nav-item-text">
                <div class="nav-item-title">
                  <img :src="item.icon" class="nav-item-icon" alt="Icon" />
                  {{ item.name }}
                </div>
                <div class="nav-item-description">{{ item.description }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
    data() {
      return {
        navItems: [
          {
            "title": "常用工具",
            "items": [
              {
                "name": "Can I use",
                "url": "https://caniuse.com/",
                "description": "前端 API 兼容性查询",
                "icon": "https://avatars.githubusercontent.com/u/172500234?s=48&v=4"
              },
              {
                "name": "TinyPNG",
                "url": "https://tinypng.com/",
                "description": "在线图片压缩工具",
                "icon": "https://avatars.githubusercontent.com/u/172500234?s=48&v=4"
              },
              // 其他项的数据，包括图标链接
            ]
          },
          // 其他导航区域的数据
        ]
      };
    }
  };
  </script>
  
  <style>
  .navigation {
    padding: 20px;
  }
  
  .nav-section {
    margin-bottom: 20px;
  }
  
  .nav-section h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .nav-items-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .nav-item {
    flex: 0 0 calc(33.33% - 20px); /* 每行显示三列，可根据需要调整 */
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
  }
  
  .nav-item-text {
    display: flex;
    flex-direction: column;
  }
  
  .nav-item-title {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  
  .nav-item-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .nav-item-description {
    font-size: 14px;
    color: #666;
  }
  </style>
  