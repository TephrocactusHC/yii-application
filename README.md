<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/993323" height="100px">
    </a>
    <h1 align="center">Yii 2 Advanced Project Template</h1>
    <br>
</p>

Yii 2 Advanced Project Template is a skeleton [Yii 2](http://www.yiiframework.com/) application best for
developing complex Web applications with multiple tiers.

The template includes three tiers: front end, back end, and console, each of which
is a separate Yii application.

The template is designed to work in a team development environment. It supports
deploying the application in different environments.

Documentation is at [docs/guide/README.md](docs/guide/README.md).

[![Latest Stable Version](https://img.shields.io/packagist/v/yiisoft/yii2-app-advanced.svg)](https://packagist.org/packages/yiisoft/yii2-app-advanced)
[![Total Downloads](https://img.shields.io/packagist/dt/yiisoft/yii2-app-advanced.svg)](https://packagist.org/packages/yiisoft/yii2-app-advanced)
[![build](https://github.com/yiisoft/yii2-app-advanced/workflows/build/badge.svg)](https://github.com/yiisoft/yii2-app-advanced/actions?query=workflow%3Abuild)

DIRECTORY STRUCTURE
-------------------

```
common
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backend and frontend
    tests/               contains tests for common classes    
console
    config/              contains console configurations
    controllers/         contains console controllers (commands)
    migrations/          contains database migrations
    models/              contains console-specific model classes
    runtime/             contains files generated during runtime
backend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains backend configurations
    controllers/         contains Web controller classes
    models/              contains backend-specific model classes
    runtime/             contains files generated during runtime
    tests/               contains tests for backend application    
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
frontend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains frontend configurations
    controllers/         contains Web controller classes
    models/              contains frontend-specific model classes
    runtime/             contains files generated during runtime
    tests/               contains tests for frontend application
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
    widgets/             contains frontend widgets
vendor/                  contains dependent 3rd-party packages
environments/            contains environment-based overrides
```

以下是真正的readme
============================
## 项目简介
在仓库的简介之中已有介绍。我们组没有采用absolute等yii2的模板，而是在advanced的基础上，直接使用php、js、css进行开发。本项目前端的展示主要依赖于`Echarts`，进行动态展示。**这是本项目好看的核心**。
## 特别鸣谢
`ephratica`和`alittle-f`两位女士为漂亮的前端付出了太多。另，`Roslin-v`女士在Controller层做出了大量决定性的工作，尤其是所实现的权限控制是本项目另一亮点。~~从Github的commit记录就可以看出，本人是整个项目里最水的。再次感谢三位巨神带我。~~ 
## 功能展示
### 前台
#### 主页
主页采取动态背景的方式，展示了一些高清精美的背景图。`成为会员`控件为注册功能入口
![yii-1](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-1.png)

在时间轴和背景图中间，提供了各个图表模块的入口控件
![yii-3](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-3.png)
在主页下方，采取`时间轴`的方式展示新闻。
![yii-4](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-4.png)
##### 新闻内部
在时间轴部分，仅仅展示新闻的摘要，进入文章界面，展示新闻的图片、标题、详细内容
![yii-5](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-5.png)
#### 地图模块
选取了Echarts进行动态地图展示，分别展示了难民、制裁、援助、花销的数量，可以动态展示各个国家的相关数据数量，并且支持地图的放大和国家高亮。
![yii-6](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-6.png)
#### 经济、军事、外交模块
**本部分主要采取以Echarts的条形图和折线图的方式，展示对应的数据变化和数据对比**

具体如下所示：
![yii-7](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-7.png)
同时支持鼠标停留显示具体数据，当然，这都是Echarts特性
![yii-8](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-8.png)
同时，也支持数据高亮
![yii-9](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-9.png)
甚至可以将折线图和条形图放在同一个图里
![yii-10](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-10.png)
#### 评论模块
评论模块第一个功能是展示网友评论，这里同样采取时间轴的方式进行展示。

这里我们会展示评论的用户名和留言的时间
![yii-11](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-11.png)
在提交留言的时候，同样可以自动获取留言的用户名
![yii-12](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-12.png)
### 后台
#### 对数据库的操作
可以直接对数据库的表进行增删改查的操作。
![yii-13](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-13.png)
#### 上传文件
上传文件界面。注意，这里需要管理员才能实现这一功能，如果是普通的用户，是不能上传文件的。
![yii-14](https://raw.githubusercontent.com/TephrocactusHC/mybolgimg/master/yii-14.png)
