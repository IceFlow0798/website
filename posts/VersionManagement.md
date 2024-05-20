---
    title: 源码管理2-版本管理
    date: 2023-12-16
    tags:
        - git
        - 源码管理
        - 版本
        - 回滚
---

之前我们就有记录了版本信息，Git默认也会给我们添加一个版本号，那如何查找我们版本号呢？通过 Git 终端，输入指令查找提交记录  

```git
git reflog
```

黄色的字，就是当时提交的版本号  
![1](../pictures/posts/VersionManagement/1.jpg)  
然后我们在输入对应想恢复的版本号，代码就能够回去了。

```git
git reset --hard 版本号
```

![2](../pictures/posts/VersionManagement/2.png)

