# 姓名魔法盒
## name-magic-box 



### ui设计图
![avatar](./src/assets/image/buildAll.jpg)


> 接口数据：
>> http://140.143.140.160/api/ask_question/?sid=iysljdsfddd1234&sex=%E7%94%B7&first_name=%E6%9D%8E&is_new=1
更新到线上了，第一次起名（is_new=1)时，传sex(男 or 女）和first_name （张 or李or王），无需传question
>> http://140.143.140.160/api/ask_question/?token=5qNGNb5iW9MEZBZkJWzE&is_new=0
继续起名时（is_new=0),无需再传question


1. 安装包：npm install 或 cnpm install
2. 启动项目：npm run serve
3. 打包：npm run build
