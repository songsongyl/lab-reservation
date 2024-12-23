# lab-reservation

## 实现功能

实现登录和首页两个页面，首页中包括课程管理，申请预约，查看当前预约，公告管理，统计等等，数据记录在数据库，实现前后端分离

------

## 项目部署

### 数据库
 user表结构如下：
~~~
 id char(26) primary key ,
    account char(10) not null unique ,
    password varchar(60) not null ,
    telephone char(11) not null ,
    name varchar(6) not null , /**字符 一个中文三个字节 一个字符*/
    role char(4) not null,/**乱码长度为四个 可以用$*/
    create_time datetime   default current_timestamp,
    update_time datetime  default current_timestamp on update current_timestamp
~~~

### 项目初始化
```
npm install
```



### 运行前端项目
```
npm run dev
```
-------

## 使用到的技术

### 前端：

- html
- css
- vue.js
- echarts
- vue-router
- axios
--------

### 后端：

- node.js
- springboot
- mysql
--------

