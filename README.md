# AdonisJs TaggingSystem
本项目基于AdonisJS@3进行构建。实现了前后端分离架构，前端工程为`TaggingSystem-front`，项目具体特点及运行方法如下。

## 一、特点：
1.本系统做了前后分离，符合MVC开发模式。
2.前端使用了Vue.js实现了MVVM数据双向绑定，即视图层view。
3.后端使用了Adonis.js实现了与数据库的交互和与前台数据的传输，即数据模型层Model和控制层Controller。
4.使用Ajax对JSON数据进行跨域传输。

## 二、部署运行
### （一）mysql部署与运行
1.安装mysql并创建`tables`数据库
2.添加远程用户并赋予访问权限
3.运行mysql
### （二）后端部署与运行
1.引入node_modules：`npm install`
2.对`database/migrations`下的两个js文件，即对contents表和entity_relation表进行数据迁移：`./ace migration:run`
3.注意修改`.env`文件的配置信息
4.启动服务：`npm run serve:dev`
### （三）前端部署与运行
1.安装nginx并配置80端口允许指定跨域
2.将`TaggingSystem-front`文件夹放到nginx的`html`文件夹下
3.启动nginx
## 三、访问项目
在浏览器中输入:`http://localhost/TaggingSystem-front`
