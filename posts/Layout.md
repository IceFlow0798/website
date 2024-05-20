---
title: 初步了解Code长啥样，有什么
date: 2023-11-12
tags:
  - 界面布局
---

## VSCode的学习网址

Mac OS官方教程：https://code.visualstudio.com/docs/setup/mac

（个人向）推荐的使用教程：https://geek-docs.com/vscode/vscode-tutorials/what-is-vscode.html

如何简单的找到官方教程？
![1](../pictures/posts/Layout/1.jpg)

## 简单配置

**更改颜色主题**  
点击左下角管理，点击颜色主题
![2](../pictures/posts/Layout/2.jpg)

根据自己的需求进行修改
![1-3-3.jpg](../pictures/posts/Layout/3.jpg)

**更改字体设置**  
点击管理中的设置选项
![1-3-4.jpg](../pictures/posts/Layout/4.jpg)

“Font Size”控制字体大小，“Font Family”控制字体系列，这里根据个人喜好设置
![1-3-5.jpg](../pictures/posts/Layout/5.jpg)

**自动保存**  
点击管理中的设置
![1-3-6.jpg](../pictures/posts/Layout/6.jpg)

**搜索自动保存**  
将设置里的“Auto Save”配置修改为``afterDelay``，并设置时间，这里我设置的是1000毫秒
![1-3-7.jpg](.././pictures/posts/Layout/7.jpg)

## 工作台介绍

**面板栏**
命令面板是VSCode快捷键的主要交互界面，你可以通过``F1``或者``Ctrl+Shift+P``打开。你可以在命令面板中快速搜索命令并且执行。如果你的 VSCode 是简体中文版，那么你可以在命令面板里使用中文或者英文来搜索命令。VSCode 的绝大多数命令都可以在命令面板里搜到，所以熟练使用命令面板，你就可以摆脱鼠标，完全通过键盘操作来完成全部编码工作。
![1-3-8.jpg](../pictures/posts/Layout/8.jpg)

**活动栏**
最左侧的一列，包括资源管理器、查找、源代码管理、debug调式（一般用于后端的调理）、插件安装![1-3-9.jpg](../pictures/posts/Layout/9.jpg)

**状态栏**  
显示代码状态和调试状态；是否处于调试状态，代码是否在编辑状态等
![1-3-10.jpg](../pictures/posts/Layout/10.jpg)

**编辑栏**
编写代码的区域
![1-3-11.jpg](../pictures/posts/Layout/11.jpg)

**侧边栏**
新建项目文件和文件夹，一般用于整体浏览项目布局

![1-3-12.jpg](../pictures/posts/Layout/12.jpg)

## 打开项目文件
点击左上角文件，打开文件夹
![1-3-13.jpg](../pictures/posts/Layout/13.jpg)

选择你需要打开的项目目录即可
![1-3-14.jpg](../pictures/posts/Layout/14.jpg)

当然你也可以选择新建文件或者文件夹
![1-3-15.jpg](../pictures/posts/Layout/15.jpg)

之后你就可以对项目文件进行编辑了~

## 快速编写代码小技巧

以HTML为例：

1. ! ``Enter``，快速生成HTML基本骨架
2. ``div``*``2`` ``Enter`` 生成两个并列的div
3. ``div.c1`` ``Enter``
4. ``div#d1`` ``Enter``
5. ``div{$}``*``数字`` 多个平级标签的排序
6. ">"表示包含关系——ul >li*4 快速生成包含4个li的列表
