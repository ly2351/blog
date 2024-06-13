---
hello: world
layout: page
pageClass: custom-navData-class
---

<script setup>
import { reactive, onMounted } from 'vue';

import navigationComponent from '/.vitepress/theme/components/navigation.vue'

const navData = reactive({
  hello: '',
  navItems: []
});

onMounted(async () => {
  const response = await fetch('data.json');
  const data = await response.json();
  navData.hello = data.hello;
  navData.navItems = data.navItems;
});
</script>

```js-vue
Hello {{ 1 + 1 }}
```
{{ navData.hello }}

<navigationComponent />


<div v-for="(item, index) in navData.navItems" class="navStyle">
  <h2  :id="item.title" :tabindex="-1">{{ item.title }}</h2>
<ul class="nav-list">
        <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="nav-item">
          <a :href="subItem.url" class="nav-link">
            <div class="nav-content">
              <strong>{{ subItem.name }}</strong>
              <span>{{ subItem.description }}</span>
            </div>
          </a>
        </li>
      </ul>
</div>

<style module>
/* 你的样式 */
/* 列表样式 */


</style>