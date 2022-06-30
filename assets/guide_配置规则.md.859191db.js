import{_ as n,c as s,o as a,a as t}from"./app.3b7bb939.js";const g='{"title":"\u89C4\u5219","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u89C4\u5219","slug":"\u914D\u7F6E\u89C4\u5219"},{"level":3,"title":"\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA","slug":"\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA"},{"level":3,"title":"\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6","slug":"\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u7981\u7528\u89C4\u5219","slug":"\u7981\u7528\u89C4\u5219"},{"level":3,"title":"\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA","slug":"\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA-1"},{"level":3,"title":"\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6","slug":"\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6-1"},{"level":3,"title":"\u7981\u7528\u5185\u8054\u6CE8\u91CA","slug":"\u7981\u7528\u5185\u8054\u6CE8\u91CA"},{"level":2,"title":"\u5B9E\u6218","slug":"\u5B9E\u6218"}],"relativePath":"guide/\u914D\u7F6E\u89C4\u5219.md","lastUpdated":1656569265000}',e={},o=t(`<h1 id="\u89C4\u5219" tabindex="-1">\u89C4\u5219 <a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u89C4\u5219" tabindex="-1">\u914D\u7F6E\u89C4\u5219 <a class="header-anchor" href="#\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a></h2><p>ESLint \u5185\u7F6E\u4E86\u5927\u91CF\u89C4\u5219\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u6DFB\u52A0\u66F4\u591A\u89C4\u5219\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA\u6216\u914D\u7F6E\u6587\u4EF6\u6765\u4FEE\u6539\u9879\u76EE\u4F7F\u7528\u7684\u89C4\u5219\u3002\u8981\u66F4\u6539\u89C4\u5219\u8BBE\u7F6E\uFF0C\u60A8\u5FC5\u987B\u5C06\u89C4\u5219 ID \u8BBE\u7F6E\u4E3A\u4EE5\u4E0B\u503C\u4E4B\u4E00\uFF1A</p><ul><li><code>&quot;off&quot;</code>\u6216<code>0</code>- \u5173\u95ED\u89C4\u5219</li><li><code>&quot;warn&quot;</code>\u6216<code>1</code>- \u6253\u5F00\u89C4\u5219\u4F5C\u4E3A\u8B66\u544A\uFF08\u4E0D\u5F71\u54CD\u9000\u51FA\u4EE3\u7801\uFF09</li><li><code>&quot;error&quot;</code>\u6216<code>2</code>- \u5C06\u89C4\u5219\u4F5C\u4E3A\u9519\u8BEF\u6253\u5F00\uFF08\u89E6\u53D1\u65F6\u9000\u51FA\u4EE3\u7801\u4E3A 1\uFF09</li></ul><h3 id="\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA" tabindex="-1">\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA <a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA" aria-hidden="true">#</a></h3><p>\u8981\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA\u5728\u6587\u4EF6\u5185\u914D\u7F6E\u89C4\u5219\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u7684\u6CE8\u91CA\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint eqeqeq: &quot;off&quot;, curly: &quot;error&quot; */</span>
</code></pre></div><p>\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C<a href="https://eslint.org/docs/latest/rules/eqeqeq" target="_blank" rel="noopener noreferrer"><code>eqeqeq</code></a>\u5173\u95ED\u5E76<a href="https://eslint.org/docs/latest/rules/curly" target="_blank" rel="noopener noreferrer"><code>curly</code></a>\u4F5C\u4E3A\u9519\u8BEF\u6253\u5F00\u3002\u60A8\u8FD8\u53EF\u4EE5\u5BF9\u89C4\u5219\u4E25\u91CD\u6027\u4F7F\u7528\u6570\u5B57\u7B49\u4EF7\u7269\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint eqeqeq: 0, curly: 2 */</span>
</code></pre></div><p>\u6B64\u793A\u4F8B\u4E0E\u4E0A\u4E00\u4E2A\u793A\u4F8B\u76F8\u540C\uFF0C\u53EA\u662F\u5B83\u4F7F\u7528\u6570\u5B57\u4EE3\u7801\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u503C\u3002\u89C4\u5219\u5DF2<code>eqeqeq</code>\u5173\u95ED\u4E14<code>curly</code>\u89C4\u5219\u8BBE\u7F6E\u4E3A\u9519\u8BEF\u3002</p><p>\u5982\u679C\u89C4\u5219\u6709\u5176\u4ED6\u9009\u9879\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6587\u5B57\u8BED\u6CD5\u6307\u5B9A\u5B83\u4EEC\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint quotes: [&quot;error&quot;, &quot;double&quot;], curly: 2 */</span>
</code></pre></div><p>\u6B64\u6CE8\u91CA\u6307\u5B9A<a href="https://eslint.org/docs/latest/rules/quotes" target="_blank" rel="noopener noreferrer"><code>quotes</code></a>\u89C4\u5219\u7684\u201C\u53CC\u91CD\u201D\u9009\u9879\u3002\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u9879\u59CB\u7EC8\u662F\u89C4\u5219\u4E25\u91CD\u6027\uFF08\u6570\u5B57\u6216\u5B57\u7B26\u4E32\uFF09\u3002</p><p>\u914D\u7F6E\u6CE8\u91CA\u53EF\u4EE5\u5305\u62EC\u8BF4\u660E\u4E3A\u4EC0\u4E48\u9700\u8981\u6CE8\u91CA\u3002<code>-</code>\u63CF\u8FF0\u5FC5\u987B\u51FA\u73B0\u5728\u914D\u7F6E\u4E4B\u540E\uFF0C\u5E76\u4E14\u7531\u4E24\u4E2A\u6216\u591A\u4E2A\u8FDE\u7EED\u5B57\u7B26\u4E0E\u914D\u7F6E\u5206\u5F00\u3002\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint eqeqeq: &quot;off&quot;, curly: &quot;error&quot; -- Here&#39;s a description about why this configuration is necessary. */</span>
<span class="token comment">/* eslint eqeqeq: &quot;off&quot;, curly: &quot;error&quot;
    --------
    Here&#39;s a description about why this configuration is necessary. */</span>
<span class="token comment">/* eslint eqeqeq: &quot;off&quot;, curly: &quot;error&quot;
 * --------
 * This will not work due to the line above starting with a &#39;*&#39; character.
 */</span>
</code></pre></div><h3 id="\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u89C4\u5219\uFF0C\u8BF7\u4F7F\u7528<code>rules</code>\u5BC6\u94A5\u4EE5\u53CA\u9519\u8BEF\u7EA7\u522B\u548C\u60A8\u8981\u4F7F\u7528\u7684\u4EFB\u4F55\u9009\u9879\u3002\u4F8B\u5982\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 YAML \u4E2D\uFF1A</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token key atrule">eqeqeq</span><span class="token punctuation">:</span> off
  <span class="token key atrule">curly</span><span class="token punctuation">:</span> error
  <span class="token key atrule">quotes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> error
    <span class="token punctuation">-</span> double
</code></pre></div><p>\u8981\u914D\u7F6E\u5728\u63D2\u4EF6\u4E2D\u5B9A\u4E49\u7684\u89C4\u5219\uFF0C\u60A8\u5FC5\u987B\u5728\u89C4\u5219 ID \u524D\u52A0\u4E0A\u63D2\u4EF6\u540D\u79F0\u548C<code>/</code>. \u4F8B\u5982\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;plugin1&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;plugin1/rule1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 YAML \u4E2D\uFF1A</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">plugins</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> plugin1
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token key atrule">eqeqeq</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">curly</span><span class="token punctuation">:</span> error
  <span class="token key atrule">quotes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> error
    <span class="token punctuation">-</span> <span class="token string">&quot;double&quot;</span>
  <span class="token key atrule">plugin1/rule1</span><span class="token punctuation">:</span> error
</code></pre></div><p>\u5728\u8FD9\u4E9B\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u89C4\u5219<code>plugin1/rule1</code>\u6765\u81EA\u540D\u4E3A<code>plugin1</code>. \u60A8\u8FD8\u53EF\u4EE5\u5C06\u6B64\u683C\u5F0F\u4E0E\u914D\u7F6E\u6CE8\u91CA\u4E00\u8D77\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint &quot;plugin1/rule1&quot;: &quot;error&quot; */</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong> \u4ECE\u63D2\u4EF6\u4E2D\u6307\u5B9A\u89C4\u5219\u65F6\uFF0C\u8BF7\u786E\u4FDD\u7701\u7565<code>eslint-plugin-</code>. ESLint \u5728\u5185\u90E8\u4EC5\u4F7F\u7528\u65E0\u524D\u7F00\u540D\u79F0\u6765\u5B9A\u4F4D\u89C4\u5219\u3002</p><h2 id="\u7981\u7528\u89C4\u5219" tabindex="-1">\u7981\u7528\u89C4\u5219 <a class="header-anchor" href="#\u7981\u7528\u89C4\u5219" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA-1" tabindex="-1">\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA <a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u6CE8\u91CA-1" aria-hidden="true">#</a></h3><p>\u8981\u6682\u65F6\u7981\u7528\u6587\u4EF6\u4E2D\u7684\u89C4\u5219\u8B66\u544A\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u7684\u5757\u6CE8\u91CA\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint-disable */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-enable */</span>
</code></pre></div><p>\u26A0\uFE0F\u6CE8\u610F\u8FD9\u91CC\u7981\u7528\u548C\u5F00\u542F\u5FC5\u987B\u662F\u5728rules\u91CC\u9762\u5F00\u542F\u8FC7\u540E\u624D\u80FD\u9009\u62E9\u5728\u6CE8\u91CA\u8FDB\u884C\u5F00\u542F\u6216\u8005\u5173\u95ED</p><p>\u60A8\u8FD8\u53EF\u4EE5\u7981\u7528\u6216\u542F\u7528\u7279\u5B9A\u89C4\u5219\u7684\u8B66\u544A\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint-disable no-alert, no-console */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-enable no-alert, no-console */</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong> <code>/* eslint-enable */</code>\u6CA1\u6709\u5217\u51FA\u4EFB\u4F55\u7279\u5B9A\u89C4\u5219\u5C06\u5BFC\u81F4\u6240\u6709\u7981\u7528\u7684\u89C4\u5219\u91CD\u65B0\u542F\u7528\u3002</p><p>\u8981\u5728\u6574\u4E2A\u6587\u4EF6\u4E2D\u7981\u7528\u89C4\u5219\u8B66\u544A\uFF0C\u8BF7\u5728\u6587\u4EF6<code>/* eslint-disable */</code>\u9876\u90E8\u6DFB\u52A0\u5757\u6CE8\u91CA\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint-disable */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u60A8\u8FD8\u53EF\u4EE5\u7981\u7528\u6216\u542F\u7528\u6574\u4E2A\u6587\u4EF6\u7684\u7279\u5B9A\u89C4\u5219\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint-disable no-alert */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u786E\u4FDD\u6C38\u8FDC\u4E0D\u4F1A\u5E94\u7528\u89C4\u5219\uFF08\u65E0\u8BBA\u5C06\u6765\u6709\u4EFB\u4F55\u542F\u7528/\u7981\u7528\u884C\uFF09\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* eslint no-alert: &quot;off&quot; */</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8981\u7981\u7528\u7279\u5B9A\u884C\u4E0A\u7684\u6240\u6709\u89C4\u5219\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u4E4B\u4E00\u7684\u884C\u6216\u5757\u6CE8\u91CA\uFF1A</p><div class="language-js"><pre><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line</span>

<span class="token comment">// eslint-disable-next-line</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-disable-next-line */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line */</span>
</code></pre></div><p>\u8981\u7981\u7528\u7279\u5B9A\u884C\u4E0A\u7684\u7279\u5B9A\u89C4\u5219\uFF1A</p><div class="language-js"><pre><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line no-alert</span>

<span class="token comment">// eslint-disable-next-line no-alert</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line no-alert */</span>

<span class="token comment">/* eslint-disable-next-line no-alert */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8981\u7981\u7528\u7279\u5B9A\u884C\u4E0A\u7684\u591A\u4E2A\u89C4\u5219\uFF1A</p><div class="language-js"><pre><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line no-alert, quotes, semi</span>

<span class="token comment">// eslint-disable-next-line no-alert, quotes, semi</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line no-alert, quotes, semi */</span>

<span class="token comment">/* eslint-disable-next-line no-alert, quotes, semi */</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-disable-next-line
  no-alert,
  quotes,
  semi
*/</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4EE5\u4E0A\u6240\u6709\u65B9\u6CD5\u4E5F\u9002\u7528\u4E8E\u63D2\u4EF6\u89C4\u5219\u3002\u4F8B\u5982\uFF0C\u8981\u7981\u7528<code>eslint-plugin-example</code>\u7684<code>rule-name</code>\u89C4\u5219\uFF0C\u8BF7\u5C06\u63D2\u4EF6\u7684\u540D\u79F0 ( <code>example</code>) \u548C\u89C4\u5219\u7684\u540D\u79F0 ( <code>rule-name</code>) \u7EC4\u5408\u6210<code>example/rule-name</code>\uFF1A</p><div class="language-js"><pre><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line example/rule-name</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* eslint-disable-line example/rule-name */</span>
</code></pre></div><p>\u914D\u7F6E\u6CE8\u91CA\u53EF\u4EE5\u5305\u62EC\u8BF4\u660E\u4E3A\u4EC0\u4E48\u9700\u8981\u6CE8\u91CA\u3002\u63CF\u8FF0\u5FC5\u987B\u5728\u914D\u7F6E\u4E4B\u540E\uFF0C\u5E76\u4E14\u9700\u8981\u4E0E\u914D\u7F6E\u76F8\u9694\u4E24\u4E2A\u6216\u591A\u4E2A\u8FDE\u7EED<code>-</code>\u5B57\u7B26\u3002\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// eslint-disable-next-line no-console -- Here&#39;s a description about why this configuration is necessary.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-disable-next-line no-console --
 * Here&#39;s a very long description about why this configuration is necessary
 * along with some additional information
**/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong> \u4E3A\u6587\u4EF6\u7684\u4E00\u90E8\u5206\u7981\u7528\u8B66\u544A\u7684\u6CE8\u91CA\u544A\u8BC9 ESLint \u4E0D\u8981\u62A5\u544A\u7981\u7528\u4EE3\u7801\u7684\u89C4\u5219\u8FDD\u89C4\u3002\u7136\u800C\uFF0CESLint \u4ECD\u7136\u89E3\u6790\u6574\u4E2A\u6587\u4EF6\uFF0C\u56E0\u6B64\u7981\u7528\u7684\u4EE3\u7801\u4ECD\u7136\u9700\u8981\u662F\u8BED\u6CD5\u4E0A\u6709\u6548\u7684 JavaScript\u3002</p><h3 id="\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6-1" tabindex="-1">\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6-1" aria-hidden="true">#</a></h3><p>\u8981\u5728\u4E00\u7EC4\u6587\u4EF6\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7981\u7528\u89C4\u5219\uFF0C\u8BF7\u4F7F\u7528<code>overrides</code>\u952E\u548C<code>files</code>\u952E\u3002\u4F8B\u5982\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*-test.js&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*.spec.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;no-unused-expressions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7981\u7528\u5185\u8054\u6CE8\u91CA" tabindex="-1">\u7981\u7528\u5185\u8054\u6CE8\u91CA <a class="header-anchor" href="#\u7981\u7528\u5185\u8054\u6CE8\u91CA" aria-hidden="true">#</a></h3><p>\u8981\u7981\u7528\u6240\u6709\u5185\u8054\u914D\u7F6E\u6CE8\u91CA\uFF0C\u8BF7\u4F7F\u7528\u8BE5<code>noInlineConfig</code>\u8BBE\u7F6E\u3002\u4F8B\u5982\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;noInlineConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u8BBE\u7F6E\u7C7B\u4F3C\u4E8E<a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--no-inline-config" target="_blank" rel="noopener noreferrer">\u2013no-inline-config</a> CLI \u9009\u9879\u3002</p><h4 id="\u62A5\u544A\u672A\u4F7F\u7528\u7684eslint-disable\u8BC4\u8BBA" tabindex="-1">\u62A5\u544A\u672A\u4F7F\u7528\u7684<code>eslint-disable</code>\u8BC4\u8BBA <a class="header-anchor" href="#\u62A5\u544A\u672A\u4F7F\u7528\u7684eslint-disable\u8BC4\u8BBA" aria-hidden="true">#</a></h4><p>\u8981\u62A5\u544A\u672A\u4F7F\u7528<code>eslint-disable</code>\u7684\u8BC4\u8BBA\uFF0C\u8BF7\u4F7F\u7528\u8BE5<code>reportUnusedDisableDirectives</code>\u8BBE\u7F6E\u3002\u4F8B\u5982\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;reportUnusedDisableDirectives&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u8BBE\u7F6E\u7C7B\u4F3C\u4E8E<a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--report-unused-disable-directives" target="_blank" rel="noopener noreferrer">\u2013report-unused-disable-directives</a> CLI \u9009\u9879\uFF0C\u4F46\u4E0D\u4F1A\u5BFC\u81F4 linting \u5931\u8D25\uFF08\u62A5\u544A\u4E3A<code>&quot;warn&quot;</code>\u4E25\u91CD\u6027\uFF09\u3002</p><h2 id="\u5B9E\u6218" tabindex="-1">\u5B9E\u6218 <a class="header-anchor" href="#\u5B9E\u6218" aria-hidden="true">#</a></h2><p>\u76EE\u6807 \uFF1A \u4E0D\u5141\u8BB8\u4F7F\u7528alert()</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
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
            <span class="token string">&quot;never&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;no-alert&quot;</span><span class="token operator">:</span><span class="token string">&quot;error&quot;</span> <span class="token comment">//\u{1F448}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3lsg5t0ksj20pg0a2wev.jpg" alt=""></p>`,67),p=[o];function c(l,u,r,i,k,d){return a(),s("div",null,p)}var f=n(e,[["render",c]]);export{g as __pageData,f as default};
