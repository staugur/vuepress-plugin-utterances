# vuepress-plugin-utterances

A simple comments plugin for vuepress

> English | [中文](README-cn.md)

---

> Refer to [utterances](https://utteranc.es/) implemented by [@ido-design/vuepress-plugin-comments](https://github.com/Timi-design/vuepress-plugin-timi/tree/master/vuepress-plugin-comments)
>
> ps: The level is limited, there may be some bugs that cannot be solved, use it with caution~~

## Install

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

## Usage

### Name

- **As plugin**: `@saintic/vuepress-plugin-utterances`

- **As component**: `Comments` (theme development using <- I did not test)

### Options

> Please learn about [Utterances](https://utteranc.es), a GitHub issue based review system.

|  Option name | Required|  Utterances configuration|  Default value |
| ------------ | -------|---------------------------| ---------------|
|  repo        |   yes  |  GitHub Repository        | \            |
|  theme       |   no   |  Theme value              | github-light |
|  issueTerm   |   no   |  Blog Post ↔️ Issue Mapping| pathname     |
| defaultShowComment| no|  Show comments by default |              |

### Page `frontmatter`

> **showComment** {Boolean}: A single post page display comments

- If the `defaultShowComment` is true (i.e. the default),
  all article details pages will display comments by default.

  Set this `showComment` to false to turn off comments on an article.

- If the `defaultShowComment` is false, all article details pages will
  not be displayed by default.

  Set this `showComment` to true, you can open comments on an article separately.

PS: by the way, comments are not allowed on the index page(/).

### Examples

> Please refer to [how vuexpress uses plugins first](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

- Babel Style

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

- Object Style

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

## Demo site

- [My blog](https://tcw.im)
