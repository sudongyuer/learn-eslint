import{_ as n,c as s,o as a,a as t}from"./app.04201429.js";const q='{"title":"Getting Started with ESlint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u53CA\u4F7F\u7528","slug":"\u5B89\u88C5\u53CA\u4F7F\u7528"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u5B9E\u6218\u5C0F\u7EC3\u4E60","slug":"\u5B9E\u6218\u5C0F\u7EC3\u4E60"}],"relativePath":"guide/\u521D\u59CB\u5316Eslint.md","lastUpdated":1656641918000}',o={},e=t(`<h1 id="getting-started-with-eslint" tabindex="-1">Getting Started with ESlint <a class="header-anchor" href="#getting-started-with-eslint" aria-hidden="true">#</a></h1><blockquote><p>ESLint\u662F\u4E00\u4E2A\u7528\u4E8E\u8BC6\u522B\u548C\u62A5\u544A\u5728ECMAScript/JavaScript\u4EE3\u7801\u4E2D\u53D1\u73B0\u7684\u6A21\u5F0F\u7684\u5DE5\u5177\uFF0C\u76EE\u7684\u662F\u4F7F\u4EE3\u7801\u66F4\u52A0\u4E00\u81F4\u548C\u907F\u514Dbug\u3002\u5728\u5F88\u591A\u65B9\u9762\uFF0C\u5B83\u7C7B\u4F3C\u4E8EJSLint\u548CJSHint\uFF0C\u53EA\u6709\u5C11\u6570\u4F8B\u5916</p></blockquote><ul><li>ESLint \u4F7F\u7528 Espree \u8FDB\u884C JavaScript \u89E3\u6790\u3002</li><li>ESLint \u4F7F\u7528 AST \u6765\u8BA1\u7B97\u4EE3\u7801\u4E2D\u7684\u6A21\u5F0F\u3002</li><li>ESLint \u662F\u5B8C\u5168\u53EF\u63D2\u7684\uFF0C\u6BCF\u4E2A\u89C4\u5219\u90FD\u662F\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u6DFB\u52A0\u66F4\u591A\u3002</li></ul><h2 id="\u5B89\u88C5\u53CA\u4F7F\u7528" tabindex="-1">\u5B89\u88C5\u53CA\u4F7F\u7528 <a class="header-anchor" href="#\u5B89\u88C5\u53CA\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u5148\u51B3\u6761\u4EF6: <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a> (<code>^12.22.0</code>, <code>^14.17.0</code>, or <code>&gt;=16.0.0</code>) \u4F7F\u7528SSL\u652F\u6301\u6784\u5EFA\u3002(\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u5B98\u65B9\u7684Node.js\u53D1\u884C\u7248\uFF0CSSL\u603B\u662F\u5185\u7F6E\u7684\u3002)</p></blockquote><ul><li><p>\u968F\u4FBF\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE</p></li><li><p>\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5ESlint</p></li></ul><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> <span class="token function">add</span> eslint --dev

<span class="token comment"># or</span>

<span class="token function">pnpm</span> <span class="token function">add</span> eslint --save-dev
</code></pre></div><ul><li>\u901A\u8FC7eslint\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316Eslint\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-shell"><pre><code><span class="token function">npm</span> init @eslint/config

<span class="token comment"># or</span>

<span class="token function">yarn</span> create @eslint/config

<span class="token comment"># or</span>

<span class="token function">pnpm</span> create @eslint/config

</code></pre></div><p>\u6CE8\u610F: <code>npm init @eslint/config</code> \u5047\u8BBE\u60A8\u5DF2\u7ECF\u6709\u4E00\u4E2A <code>package.json</code> \u6587\u4EF6\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u8BF7\u786E\u4FDD\u4E8B\u5148\u8FD0\u884C <code>npm init</code> \u6216<code>yarn init</code>\u3002</p><ul><li>\u7136\u540E\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u8FD0\u884CESlint\uFF0C\u5982\u4E0B\u6240\u793A</li></ul><div class="language-shell"><pre><code>npx eslint yourfile.js

<span class="token comment"># or</span>

<span class="token function">yarn</span> run eslint yourfile.js
</code></pre></div><p>\u8FD8\u53EF\u4EE5\u5728\u5168\u5C40\u800C\u4E0D\u662F\u672C\u5730\u5B89\u88C5 ESLint (\u4F7F\u7528 <code>npm install ESLint \u2014\u2014 global</code>)\u3002\u4F46\u662F\uFF0C\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\uFF0C\u800C\u4E14\u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u60A8\u4F7F\u7528\u7684\u4EFB\u4F55\u63D2\u4EF6\u6216\u53EF\u5171\u4EAB\u914D\u7F6E\u90FD\u5FC5\u987B\u5728\u672C\u5730\u5B89\u88C5\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728\u8FD0\u884C <code>npm init @eslint/config</code> \u4E4B\u540E\uFF0C\u60A8\u5C06\u6709\u4E00\u4E2A\uFF0C<code>.eslintrc.{ js\uFF0Cyml\uFF0Cjson }</code>\u6587\u4EF6\u3002\u5728\u5176\u4E2D\uFF0C\u60A8\u5C06\u770B\u5230\u4E00\u4E9B\u5982\u4E0B\u914D\u7F6E\u7684\u89C4\u5219:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 ESLint \u4E2D\uFF0C\u540D\u79F0\u201Csemi\u201D\u548C\u201Cquote\u201D\u662F\u89C4\u5219\u7684\u540D\u79F0\u3002\u7B2C\u4E00\u4E2A\u503C\u662F\u89C4\u5219\u7684\u9519\u8BEF\u7EA7\u522B\uFF0C\u53EF\u4EE5\u662F\u4E0B\u5217\u503C\u4E4B\u4E00:</p><ul><li><code>off</code> or <code>0</code> - \u5173\u95ED\u89C4\u5219</li><li><code>warn</code> or <code>1</code> - \u5C06\u89C4\u5219\u4F5C\u4E3A\u8B66\u544A(\u4E0D\u5F71\u54CD\u9000\u51FA\u4EE3\u7801)</li><li><code>error</code> or <code>2</code> - \u5C06\u89C4\u5219\u4F5C\u4E3A\u9519\u8BEF\u6253\u5F00(\u9000\u51FA\u4EE3\u7801\u4E3A1)</li></ul><p>\u8FD9\u4E09\u4E2A\u9519\u8BEF\u7EA7\u522B\u5141\u8BB8\u60A8\u5BF9 ESLint \u5982\u4F55\u5E94\u7528\u89C4\u5219\u8FDB\u884C\u7EC6\u7C92\u5EA6\u63A7\u5236(\u6709\u5173\u66F4\u591A\u914D\u7F6E\u9009\u9879\u548C\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605<a href="https://eslint.org/docs/latest/user-guide/configuring/" target="_blank" rel="noopener noreferrer">configuration docs</a>)\u3002</p><p>\u60A8\u7684<code>.eslintrc.{ js\uFF0Cyml\uFF0Cjson }</code>\u914D\u7F6E\u6587\u4EF6\u8FD8\u5C06\u5305\u542B\u4EE5\u4E0B\u884C:</p><div class="language-shell"><pre><code><span class="token punctuation">{</span>
    <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint:recommended&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u56E0\u4E3A\u6709\u4E86\u8FD9\u4E00\u884C\uFF0C\u89C4\u5219\u9875\u9762\u4E0A\u6807\u8BB0\u4E3A\u201C(\u63A8\u8350)\u201D\u7684\u6240\u6709\u89C4\u5219\u90FD\u5C06\u88AB\u6253\u5F00\u3002\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5728 npmjs. com \u4E0A\u641C\u7D22\u201Ceslint-config\u201D\u5F15\u7528\u5176\u4ED6\u4EBA\u521B\u5EFA\u7684\u914D\u7F6E\u3002\u9664\u975E\u4ECE\u5171\u4EAB\u914D\u7F6E\u8FDB\u884C\u6269\u5C55\uFF0C\u6216\u8005\u5728\u914D\u7F6E\u4E2D\u663E\u5F0F\u6253\u5F00\u89C4\u5219\uFF0C\u5426\u5219 ESLint \u5C06\u4E0D\u4F1A\u5BF9\u4EE3\u7801\u8FDB\u884C lint\u3002</p><h2 id="\u5B9E\u6218\u5C0F\u7EC3\u4E60" tabindex="-1">\u5B9E\u6218\u5C0F\u7EC3\u4E60 <a class="header-anchor" href="#\u5B9E\u6218\u5C0F\u7EC3\u4E60" aria-hidden="true">#</a></h2><ul><li>\u4FEE\u6539<code>.eslintrc</code>\u914D\u7F6E</li></ul><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;indent&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token number">2</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;linebreak-style&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;unix&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quotes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;single&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;always&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5199\u4E0B\u5982\u4E0B\u4EE3\u7801</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5smscgdj20yw0qwgo6.jpg" alt=""></p><ul><li>\u8FD0\u884C<code>eslint js</code>\u547D\u4EE4\u5C31\u4F1A\u770B\u89C1\u5982\u4E0B\u7684ESlint\u62A5\u9519\u4FE1\u606F</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5ub461aj20m405wq3m.jpg" alt=""></p><ul><li>\u8FD0\u884C<code>eslint js --fix</code>\u4FEE\u590D\u9519\u8BEF\u4FE1\u606F</li></ul><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3k5vamqsxj20o60yqwj4.jpg" alt=""></p>`,31),p=[e];function c(l,i,r,u,d,k){return a(),s("div",null,p)}var m=n(o,[["render",c]]);export{q as __pageData,m as default};
