# vuepress-plugin-utterances

A simple comments plugin for vuepress

> 参考 [@ido-design/vuepress-plugin-comments](https://github.com/Timi-design/vuepress-plugin-timi/tree/master/vuepress-plugin-comments)实现的[utterances](https://utteranc.es/)评论框。
>
> ps：水平有限，可能有一些解决不了的bug，慎用~~

## 安装

With `npm`:

```bash
npm install --save @staugur/vuepress-plugin-utterances
```

With `yarn`:

```bash
yarn add @staugur/vuepress-plugin-utterances -D
```

With `cnpm`:

```bash
cnpm i --save @staugur/vuepress-plugin-utterances
```

## 使用

### 名称

- **As plugin**: `@staugur/vuepress-plugin-utterances`

- **As component**: `Comments (评论)` （主题开发时使用 <- 本人未测试）

### 选项

> 请先了解 [Utterances](https://utteranc.es) 这款基于GitHub Issue的评论系统。

|  选项名 | 必填 |  含义              |  默认值       |  对应Utterances配置项目 |
| ------ | ----|--------------------| ------------ | ----------------------|
|  repo  |  是  |  GitHub仓库地址     | (无)         | Repository |
|  theme |  否  |  主题 | Theme       | github-light| Theme|
|  issueTerm |否|  文章与Issue的映射条件 | pathname   | Blog Post ↔️ Issue Mapping |

### 示例

> 请先参考 [Vuepress如何使用插件](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

- Babel 式

  ```javascript
  module.exports = {
    plugins: [
      [
       '@staugur/utterances',
        {
          repo: 'staugur/staugur.github.io',
          theme: 'github-light',
          issueTerm: 'pathname'
        }
      ]
    ]
  }
  ```

- 对象式

  ```javascript
  module.exports = {
    plugins: {
      '@staugur/utterances': {
        repo: 'staugur/staugur.github.io',
      }
    }
  }
  ```

## 演示站

- [My blog](https://blog.saintic.com)
