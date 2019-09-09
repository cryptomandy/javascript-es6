prettier配置文档，中文翻译

// 在箭头函数中，（）=> {} 参数部分始终加括号 还是 自动加---必要加的时候加，不必要加的时候不加
"prettier.arrowParens": "avoid" || "always",

// 对象里， {a: 1}为false  { a: 1 }为true
"prettier.bracketSpacing": true || false,

// 设置prettier单行输出（不折行）的（最大）长度。
"prettier.printWidth": 80,

// 设置工具每一个水平缩进的空格数
"prettier.tabWidth": 2,

// 使用tab（制表位）缩进而非空格；(区别暂时看不出来，待继续研究)
"prettier.useTabs": false

// 在语句末尾添加分号；true - 在每一条语句后面添加分号 false - 只在有可能导致ASI错误的行首添加分号
"prettier.semi": true,

// 使用单引号而非双引号；
"prettier.singleQuote": false,

// 在任何可能的多行中输入尾逗号。
有效参数：
 none  - 无尾逗号；
 es5  - 添加es5中被支持的尾逗号；
 all  - 所有可能的地方都被添加尾逗号；（包括函数参数），这个参数需要安装nodejs8或更高版本；
"prettier.trailingComma": "none",

// 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）
"prettier.jsxBracketSameLine": false,

// 指定使用哪一种解析器。babylon和flow都支持同一套JavaScript特性（包括Flow）.Prettier将自动根据文件的输入路径选择解析器，如非必要，不要修改该项设置。
内置的解析器包含：
babylon
flow
typescript v1.4.0+（是指Prettier的版本，并包含该版本，下同）
postcss v1.4.0+
json v1.5.0+
graphql v1.5.0+
markdown v1.8.0+
用户自定义解析器 v1.5.0+
"prettier.parser": "babylon",

// 默认情况下，Prettier会因为使用了一些折行敏感型的渲染器（如GitHub comment 和 BitBucket）而按照markdown文本样式进行折行，但在某些情况下，你可能只是希望这个文本在编译器或查看器中soft-wrapping（是当屏幕放不下时发生的软折行），所以这一参数允许设置为 " never "
"prettier.proseWrap": "preserve",