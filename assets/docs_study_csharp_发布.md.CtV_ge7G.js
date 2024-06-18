import{_ as e,l as a,k as s,ab as t}from"./chunks/framework.CfvFI0z7.js";const m=JSON.parse('{"title":"发布","description":"","frontmatter":{},"headers":[],"relativePath":"docs/study/csharp/发布.md","filePath":"docs/study/csharp/发布.md"}'),i={name:"docs/study/csharp/发布.md"},n=t(`<h1 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>编译精简过程如下：</p></div><h2 id="_1、正常发布-大小为65mb" tabindex="-1">1、正常发布，大小为65MB <a class="header-anchor" href="#_1、正常发布-大小为65mb" aria-label="Permalink to &quot;1、正常发布，大小为65MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release</span></span></code></pre></div><h2 id="_2、添加参数-p-publishtrimmed-true-移除未使用的代码-大小为25mb" tabindex="-1">2、添加参数/p:PublishTrimmed=true，移除未使用的代码，大小为25MB <a class="header-anchor" href="#_2、添加参数-p-publishtrimmed-true-移除未使用的代码-大小为25mb" aria-label="Permalink to &quot;2、添加参数/p:PublishTrimmed=true，移除未使用的代码，大小为25MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:PublishTrimmed=true</span></span></code></pre></div><h2 id="_3、使用corert的编译模式-大小为4-7mb" tabindex="-1">3、使用CoreRT的编译模式，大小为4.7MB <a class="header-anchor" href="#_3、使用corert的编译模式-大小为4-7mb" aria-label="Permalink to &quot;3、使用CoreRT的编译模式，大小为4.7MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:Mode=CoreRT</span></span></code></pre></div><h2 id="_4、使用corert-moderate的编译模式-大小为4-3mb" tabindex="-1">4、使用CoreRT-Moderate的编译模式，大小为4.3MB <a class="header-anchor" href="#_4、使用corert-moderate的编译模式-大小为4-3mb" aria-label="Permalink to &quot;4、使用CoreRT-Moderate的编译模式，大小为4.3MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:Mode=CoreRT-Moderate</span></span></code></pre></div><h2 id="_5、使用corert-high的编译模式-大小为3-0mb" tabindex="-1">5、使用CoreRT-High的编译模式，大小为3.0MB <a class="header-anchor" href="#_5、使用corert-high的编译模式-大小为3-0mb" aria-label="Permalink to &quot;5、使用CoreRT-High的编译模式，大小为3.0MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:Mode=CoreRT-High</span></span></code></pre></div><h2 id="_6、使用corert-reflectionfree的编译模式-大小为1-2mb" tabindex="-1">6、使用CoreRT-ReflectionFree的编译模式，大小为1.2MB <a class="header-anchor" href="#_6、使用corert-reflectionfree的编译模式-大小为1-2mb" aria-label="Permalink to &quot;6、使用CoreRT-ReflectionFree的编译模式，大小为1.2MB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:Mode=CoreRT-ReflectionFree</span></span></code></pre></div><h2 id="_7、使用corert-noruntime的编译模式-大小为10kb" tabindex="-1">7、使用CoreRT-NoRuntime的编译模式，大小为10KB <a class="header-anchor" href="#_7、使用corert-noruntime的编译模式-大小为10kb" aria-label="Permalink to &quot;7、使用CoreRT-NoRuntime的编译模式，大小为10KB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet publish -r win-x64 -c Release /p:Mode=CoreRT-NoRuntime</span></span></code></pre></div><h2 id="_8、采用csc-exe编译-大小为8kb" tabindex="-1">8、采用csc.exe编译，大小为8KB <a class="header-anchor" href="#_8、采用csc-exe编译-大小为8kb" aria-label="Permalink to &quot;8、采用csc.exe编译，大小为8KB&quot;">​</a></h2><div class="language-charp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">charp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//编译C#代码</span></span>
<span class="line"><span>csc.exe /debug /O /noconfig /nostdlib /runtimemetadataversion:v4.0.30319 MiniRuntime.cs MiniBCL.cs Game\\FrameBuffer.cs Game\\Random.cs Game\\Game.cs Game\\Snake.cs Pal\\Thread.Windows.cs Pal\\Environment.Windows.cs Pal\\Console.Windows.cs Pal\\Console.cs /out:zerosnake.ilexe /langversion:latest /unsafe</span></span>
<span class="line"><span>//将库组合成一个可执行文件</span></span>
<span class="line"><span>link.exe /debug:full /subsystem:console zerosnake.obj /entry:__managed__Main kernel32.lib ucrt.lib /merge:.modules=.rdata /merge:.pdata=.rdata /incremental:no /DYNAMICBASE:NO /filealign:16 /align:16</span></span></code></pre></div><p>我们使用比较多是第2步，其他步骤可能会有兼容问题，实际项目要慎用。</p><p>但是.Net 7开始支持AOT，还能进一步优化！大家感兴趣的可以自行尝试下。</p>`,20),o=[n];function r(c,l,p,d,h,u){return s(),a("div",null,o)}const g=e(i,[["render",r]]);export{m as __pageData,g as default};
