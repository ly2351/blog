<template>
    <div class="table-of-contents">
      <h2>大纲</h2>
      <ul>
        <li v-for="heading in headings" :key="heading.id">
          <a :href="'#' + heading.id">{{ heading.text }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headings: []
      };
    },
    mounted() {
      this.headings = this.getHeadings();
    },
    methods: {
      getHeadings() {
        const headings = [];
        document.querySelectorAll('h2, h3').forEach((heading) => {
          headings.push({
            id: heading.id,
            text: heading.innerText
          });
        });
        return headings;
      }
    }
  };
  </script>
  
  <style>
  .table-of-contents h2{
    margin-left: 15px;
    line-height: 27px;
    font-size: 14px;
    font-weight: 600;
  }
  .table-of-contents {
    position: fixed;
    left: 75%;
    top: 100px;
    width: 200px;
    border-left: #e2e2e3 1px solid;
  }
  .table-of-contents ul {
    margin-left: 15px;
    list-style-type: none;
    padding: 0;
    line-height: 27px;
    font-size: 14px;
    font-weight: 400;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.5s;
  }
  .table-of-contents li {
    margin: 0.5em 0;
  }
  .table-of-contents a {
    text-decoration: none;
    color: rgb(60 60 67 / 78%);
  }
  .table-of-contents a:hover {
    text-decoration: none;
    color: rgba(60, 60, 67);
    transition: color 0.25s;
    transition-duration: 0.25s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: color;
  }
  </style>
  