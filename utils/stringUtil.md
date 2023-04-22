https://www.lodashjs.com/docs/latest
https://github.com/lodash/lodash
http://lodash.think2011.net/

camelCase 转换字符串为 驼峰写法
capitalize 转换字符串首字母为大写，剩下为小写。
deburr 转换 latin-1 supplementary letters#Character_table) 为基本拉丁字母，并删除变音符。
endsWith 检查给定的字符是否是字符串的结尾
escape 转义字符 "&", "<", ">", '"', "'", 以及 "`" 为HTML实体字符。 注意: 不会转义其他字符，如果需要，可以使用第三方库，例如 he。 
escapeRegExp 转义RegExp 中特殊的字符 "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 以及 "|"。
kebabCase 转换字符串为 kebab case(短线连接)。
lowerCase 以空格分开单词并转换为小写。
lowerFirst 转换首字母为小写。
pad 如果字符串长度小于 length 则从左到右填充字符。 如果没法平均分配，则截断超出的长度。
padEnd 如果字符串长度小于 length 则在右侧填充字符。 如果超出长度则截断超出的部分。
padStart 如果字符串长度小于 length 则在左侧填充字符。 如果超出长度则截断超出的部分。
parseInt 以指定的基数转换字符串为整数。 如果基数是 undefined 或者 0，则基数默认是10，如果字符串是16进制，则基数为16。 
repeat 重复 N 次字符串
replace 替换字符串中匹配的内容为给定的内容   eg:replace("abcdefgaa",new RegExp('a', 'g'),'z')
snakeCase 转换字符串为 snake case（下划线连接）
split 以指定字符 拆分字符串 
startCase 转换字符串为 start case（首字母大写）
startsWith 检查字符串是否以 target 开头。
template 创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。 HTML会在 "escape" 分隔符中转换为相应实体。 在 "evaluate" 分隔符中允许执行JavaScript代码。 在模板中可以自由访问变量。 如果设置了选项对象，则会优先覆盖 _.templateSettings 的值。 
toLower 小写
toUpper 大写
trim 去空格
trimEnd  尾部去空格
trimStart 头部去空格
truncate 截断字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。
unescape 反向版 _.escape。 这个方法转换 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 以及 &#96; 为对应的字符。 
upperCase 转换字符串为空格分割的大写单词
upperFirst 转换首字母为大写。
words 拆分字符串中的词为数组