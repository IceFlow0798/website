---
    title: 源码管理3-Code“假死”的解决方案
    date: 2023-12-22
    tags:
        - git
        - 源码管理
        - 假死
---

## 关闭源代码管理

因为下载的项目很多，导致源代码要管理数千个文件，一旦改动一个文件，就导致Code“假死”，卡住不动，这里介绍一个简单的方法。
打开使用了源代码管理的文件夹，删除.git文件，重启VSCode：
![1](../pictures/posts/CloseManagement/1.jpg)

此时源代码管理栏就会变成如下样式：
![2](../pictures/posts/CloseManagement/2.jpg)  
点击“初始化仓库”一般就解决啦！

另外，你可以在设置中关闭*自动搜索*。
![3](../pictures/posts/CloseManagement/3.jpg)