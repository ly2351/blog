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
      navItems:[
  {
    "title": "常用工具",
    "items": [
      {
        "name": "Can I use",
        "url": "https://caniuse.com/",
        "description": "前端 API 兼容性查询"
      },
      {
        "name": "TinyPNG",
        "url": "https://tinypng.com/",
        "description": "在线图片压缩工具"
      },{
        "name": "Can",
        "url": "https://caniuse.com/",
        "description": "前端 API 兼容性查询"
      },
      {
        "name": "TinyPNGaa",
        "url": "https://tinypng.com/",
        "description": "在线图片压缩工具"
      },
      {
        "name": "Notion AI",
        "url": "https://www.notion.so/",
        "description": "笔记 AI"
      },        {
        "name": "Can I use",
        "url": "https://caniuse.com/",
        "description": "前端 API 兼容性查询"
      },
      {
        "name": "TinyPNG",
        "url": "https://tinypng.com/",
        "description": "在线图片压缩工具"
      },{
        "name": "Can",
        "url": "https://caniuse.com/",
        "description": "前端 API 兼容性查询"
      },
      {
        "name": "TinyPNGaa",
        "url": "https://tinypng.com/",
        "description": "在线图片压缩工具"
      }
    ]
  },
  {
    "title": "AI 导航",
    "items": [
      {
        "name": "ChatGPT",
        "url": "https://openai.com/chatgpt",
        "description": "最强 AI 聊天机器人"
      },
      {
        "name": "Notion AI",
        "url": "https://www.notion.so/",
        "description": "笔记 AI"
      }
    ]
  },
  {
    "title": "茂茂的站点导航",
    "items": [
      {
        "name": "React",
        "url": "https://reactjs.org/",
        "description": "用于构建用户界面的 JavaScript 库"
      },
      {
        "name": "React Router",
        "url": "https://reactrouter.com/",
        "description": "React 的声明式路由"
      }
    ]
  }
]
    };
  }
};
</script>

<style>
.navigation {
  padding: 20px;
  width: 52%;
  margin: 0 auto;
}

.nav-section {
  margin-bottom: 20px;
}

.nav-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.nav-items-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start; /* 确保所有项目都靠左对齐 */
}

.nav-item {
  flex: 0 0 calc(20% - 20px); /* 每行显示三列，可根据需要调整 */
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin-right: 10px; /* 在每个项目之间添加间隔 */
  box-sizing: border-box;
  transition: transform 0.3s, box-shadow 0.3s;
}

.nav-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
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

  
