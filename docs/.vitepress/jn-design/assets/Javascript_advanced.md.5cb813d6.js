import{o as a,c as e,a as t}from"./app.f7c89bc3.js";const r='{"title":"[\'1\', \'2\', \'3\'].map(parseInt) what & why ?","description":"","frontmatter":"title Javascript 进阶","headers":[{"level":2,"title":"[\'1\', \'2\', \'3\'].map(parseInt) what & why ?","slug":"_1-2-3-map-parseint-what-why"},{"level":2,"title":"","slug":""}],"relativePath":"Javascript/advanced.md","lastUpdated":1675849739767}',i={},d=t('<h2 id="_1-2-3-map-parseint-what-why"><a class="header-anchor" href="#_1-2-3-map-parseint-what-why" aria-hidden="true">#</a> [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) what &amp; why ?</h2><p>先说答案： <code>[1, NaN, NaN]</code></p><ol><li><p>首先， <code>map()</code> 的 <code>callback</code> 接受三个参数，<code>currentValue</code> 当前值， <code>index</code> 索引， 以及 <code>array</code> 数组本身。</p></li><li><p><code>parseInt(string, radix)</code> 接受两个参数，<code>radix</code> 表示为解析时的基数。</p></li><li><p>所以，三次调用分别为：</p></li></ol><ul><li>parseInt(&#39;1&#39;, 0) // radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1</li><li>parseInt(&#39;2&#39;, 1) // 基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN</li><li>parseInt(&#39;3&#39;, 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN</li></ul><ol start="4"><li>所以，最终返回 <code>[1, NaN, NaN]</code></li></ol><h2 id=""><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',6);i.render=function(t,r,i,l,p,c){return a(),e("div",null,[d])};export default i;export{r as __pageData};
