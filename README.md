# wxapp-h-template
## 注意
本项目master webpack版本`webpack4`版本


## 项目介绍
是一个基于webpack架构的**微信小程序**模板，后续会添加脚手架。其特点如下：
- 更适合多页应用
- 前后端分离
- 友好component组件抽取
- 静态资源cdn引入（待）
- 样式使用scss替代wxss
- 完全微信小程序原生开发
## 技术栈
使用技术栈：webpack(版本4.40.2) + scss(版本8.0.0) + 微信小程序

## 使用说明
- 使用包管理工具NPM 执行命令：
```
$ npm install
```

- 生成dist文件
```
$ npm run build
```

- 动态监测变化（热部署效果）
```
$ npm run start
```

- 使用微信开发者工具打开项目dist文件夹，即可实时查看当前项目进展。

## CLI命令(npm scripts)
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.config.js`，build出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.config.js`，build出一份开发环境的代码 |
| npm run start   | 开启webpack-dev-server并自动打开浏览器，自动监测源码变动并实现LiveReload，**推荐实际开发时使用此项** |
| npm run profile | 显示编译过程中每一项资源的耗时，用来调优的 |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |
| npm run analyse  | 生成打包文件结构的可视化分析报告；注意请在`npm run build`或`npm run dev`后再执行 |
| npm run analyze | 作用同上 |

## 目录结构说明
```
├─dist                 构建后生成的dist文件夹
├─plugin 简单修改后的自定义插件
├─.babelrc  babel的配置文件
├─index.html # 仅作为重定向使用
├─package.json # npm包文件
├─webpack.config.js  webpack配置文件
├─src # 当前项目的源码
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─alert # 业务模块
    │  │  └─index # 具体页面
    │  ├─index # 业务模块
    │  │  ├─index # 具体页面
    │  │  └─login # 具体页面
    │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起
    │  └─user # 业务模块
    │      ├─edit-password # 具体页面
    │      └─modify-info # 具体页面
    └─components # 各个页面使用到的公共资源
        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─config # 各种配置文件
        ├─iconfont # iconfont的字体文件
        ├─imgs # 公用的图片资源
        ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
        │  ├─layout # 具体的布局套路
        │  └─layout-without-nav # 具体的布局套路
        ├─less # less文件，用sass的也可以，又或者是纯css
        │  ├─base-dir
        │  ├─components-dir # 如果组件本身不需要js的，那么要加载组件的css比较困难，我建议可以直接用less来加载
        │  └─base.less # 组织所有的less文件
        ├─libs # 与业务逻辑无关的库都可以放到这里
        └─logic # 业务逻辑
```
## 更新日志
### 1.0.0
第一份模板，当前模板具备投入生产环境的能力，故直接定义版本号为1.0.0