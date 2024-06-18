import{l as s,V as a,z as e,I as i,ab as t,k as l,v as p}from"./chunks/framework.CfvFI0z7.js";import{B as n}from"./chunks/theme.7J-Z3pYw.js";const o=t(`<h2 id="_1-拉取-mysql-镜像s" tabindex="-1">1. 拉取 MySQL 镜像s <a class="header-anchor" href="#_1-拉取-mysql-镜像s" aria-label="Permalink to &quot;1. 拉取 MySQL 镜像s&quot;">​</a></h2><p>首先，你需要从 Docker Hub 拉取最新的 MySQL 镜像。在终端中执行以下命令：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker pull mysql:latest</span></span></code></pre></div><h2 id="_2-创建数据卷" tabindex="-1">2. 创建数据卷 <a class="header-anchor" href="#_2-创建数据卷" aria-label="Permalink to &quot;2. 创建数据卷&quot;">​</a></h2><p>为了实现数据持久化，我们需要创建一个 Docker 数据卷来存储 MySQL 的数据库文件。这将在容器被删除后仍然保留数据。</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker volume create mysql_data</span></span></code></pre></div><h2 id="_3-启动-mysql-容器" tabindex="-1">3. 启动 MySQL 容器 <a class="header-anchor" href="#_3-启动-mysql-容器" aria-label="Permalink to &quot;3. 启动 MySQL 容器&quot;">​</a></h2><p>现在，我们使用 docker run 命令启动 MySQL 容器，并将数据卷挂载到容器内的 /var/lib/mysql 目录，同时设置环境变量以配置 MySQL（例如，设置 root 用户的密码）：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run --name=mysql-server -d \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -v mysql_data:/var/lib/mysql \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -e MYSQL_ROOT_PASSWORD=mysecretpassword \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  -p 3306:3306 \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mysql:latest</span></span></code></pre></div><p>这里 -v 参数挂载了数据卷，-e 设置了环境变量，-p 映射了端口。</p><h2 id="_4-验证-mysql-容器" tabindex="-1">4. 验证 MySQL 容器 <a class="header-anchor" href="#_4-验证-mysql-容器" aria-label="Permalink to &quot;4. 验证 MySQL 容器&quot;">​</a></h2><p>确认 MySQL 容器正在运行：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker ps</span></span></code></pre></div><blockquote><p>截止到这一步，已经可以使用了喔~</p></blockquote><h2 id="_5-配置远程访问" tabindex="-1">5. 配置远程访问 <a class="header-anchor" href="#_5-配置远程访问" aria-label="Permalink to &quot;5. 配置远程访问&quot;">​</a></h2><p>默认情况下，MySQL 只允许本地连接。要允许远程访问，你需要进入 MySQL 容器并修改用户权限：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker exec -it mysql-server bash</span></span></code></pre></div><p>然后在容器内部：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysql -u root -p</span></span></code></pre></div><p>输入密码 mysecretpassword。</p><p>在 MySQL 提示符下执行：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GRANT ALL PRIVILEGES ON *.* TO </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IDENTIFIED BY </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysecretpassword&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WITH GRANT OPTION;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXIT;</span></span></code></pre></div><p>这会赋予 root 用户从任何主机（%）连接的权限。</p><h2 id="_6-重启-mysql-容器" tabindex="-1">6. 重启 MySQL 容器 <a class="header-anchor" href="#_6-重启-mysql-容器" aria-label="Permalink to &quot;6. 重启 MySQL 容器&quot;">​</a></h2><p>由于权限更改，需要重启 MySQL 服务让更改生效：</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker restart mysql-server</span></span></code></pre></div><h2 id="_7-使用-navicat-连接" tabindex="-1">7. 使用 Navicat 连接 <a class="header-anchor" href="#_7-使用-navicat-连接" aria-label="Permalink to &quot;7. 使用 Navicat 连接&quot;">​</a></h2><p>在你的本地机器上，打开 Navicat 或其他数据库管理工具，新建一个连接，填写以下信息：</p><ul><li>主机：你的 Docker 主机 IP 或 localhost（如果你在本机运行 Docker）</li><li>端口：3306</li><li>用户名：root</li><li>密码：mysecretpassword</li><li>数据库：(可选，根据需要选择或创建新的数据库)</li></ul><p>连接后，你应该能够通过 Navicat 成功访问 MySQL 服务器。</p><h3 id="_8-安全注意事项" tabindex="-1">8. 安全注意事项 <a class="header-anchor" href="#_8-安全注意事项" aria-label="Permalink to &quot;8. 安全注意事项&quot;">​</a></h3><p>请记得在生产环境中替换示例密码为更安全的值，并考虑使用更复杂的权限策略。</p><p>这个教程涵盖了从创建 Docker 容器到配置远程访问和使用第三方工具连接 MySQL 的整个过程。确保在实际操作时根据自己的网络环境和安全需求调整配置。</p><p>欢迎关注我的公众号“<strong>摘星楼上</strong>”，原创技术文章第一时间推送。</p>`,34),E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/study/csharp/安装Mysql.md","filePath":"docs/study/csharp/安装Mysql.md"}'),h={name:"docs/study/csharp/安装Mysql.md"},u=Object.assign(h,{setup(r){return(c,d)=>(l(),s("div",null,[a(i(n),null,{default:e(()=>[p("Hello World")]),_:1}),o]))}});export{E as __pageData,u as default};
