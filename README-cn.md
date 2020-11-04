# vuepress-plugin-utterances

A simple comments plugin for vuepress

> [English](README.md) | 中文

---

> 参考 [@Timi-design/vuepress-plugin-comments](https://github.com/Timi-design/vuepress-plugin-timi/tree/master/vuepress-plugin-comments)实现的[utterances](https://utteranc.es/)评论框，同时支持 [Beaudar - 表达](https://beaudar.lipk.org/)
>
> ps：水平有限，可能有一些解决不了的bug，慎用~~
>
> ps: Beaudar可以视作Utterances中文版

## 安装

With `npm`:

```bash
npm install --save @saintic/vuepress-plugin-utterances
```

With `yarn`:

```bash
yarn add @saintic/vuepress-plugin-utterances -D
```

With `cnpm`:

```bash
cnpm i --save @saintic/vuepress-plugin-utterances
```

## 使用

### 名称

- **As plugin**: `@saintic/vuepress-plugin-utterances`

- **As component**: `Comments` （主题开发时使用 <- 本人未测试）

### 选项

> 请先了解 [Utterances](https://utteranc.es) 这款基于GitHub Issue的评论系统。

|  选项名 | 必填 |  含义              |  默认值       |  对应Utterances配置项目 |
| ------ | ----|--------------------| ------------ | ----------------------|
|  repo  |  是  |  GitHub仓库地址     | \            | Repository |
|  theme |  否  |  主题               | github-light | Theme|
|  issueTerm |否|  文章与Issue的映射条件 | pathname   | Blog Post ↔️ Issue Mapping |
| defaultShowComment|否|默认显示评论     | true       |    \       |
| service | 否  | 服务提供方 utterances/[beaudar](https://beaudar.lipk.org)|utterances|\|

### Page `frontmatter`

> **showComment** {Boolean}: 单个文章页面是否显示评论

- 如果选项中 `defaultShowComment` 是true(即默认)，则全部文章详情页默认显示评论，
  此 `showComment` 设为false，可关闭某个文章的评论。

- 如果选项中 `defaultShowComment` 是false，则全部文章详情页默认不显示，
  此 `showComment` 设为true，可单独开启某个文章的评论。

PS: 顺道一提，首页限定不显示评论。

### 示例

> 请先参考 [Vuepress如何使用插件](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

- Babel 式

  ```javascript
  module.exports = {
    plugins: [
      [
       '@saintic/utterances',
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
      '@saintic/utterances': {
        repo: 'staugur/staugur.github.io',
        defaultShowComment: false
      }
    }
  }
  ```

## 演示站

- [My blog](https://blog.saintic.com)
