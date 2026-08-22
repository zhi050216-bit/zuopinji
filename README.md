# 陈炙｜AI产品作品集

面向 AI 产品助理、初级 AI 产品经理和 AI 应用产品经理岗位的个人作品集。网站重点展示 KnowledgePilot 企业知识库 AI 助手与智维 AR Copilot 两个产品案例，围绕用户问题、产品判断、MVP、验证与迭代展开。

## 技术与项目结构

项目使用原生 HTML、CSS 和 JavaScript，无第三方依赖、无需构建。

- `index.html`：首页
- `projects.html`：项目总览
- `knowledgepilot.html`：KnowledgePilot Case Study
- `ar-copilot.html`：智维 AR Copilot Case Study
- `about.html`：关于我
- `resume.html`：在线简历
- `assets/`：公共样式、脚本与链接配置

## 本地运行

直接打开 `index.html` 即可预览。也可以在项目目录启动任意静态文件服务器，例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## GitHub Pages 部署

本仓库使用 GitHub Pages 从 `main` 分支根目录直接发布，无需 build 命令和输出目录。

1. 打开仓库 `Settings → Pages`。
2. 在 `Build and deployment` 中选择 `Deploy from a branch`。
3. Branch 选择 `main`，目录选择 `/ (root)`。
4. 保存后访问 `https://zhi050216-bit.github.io/`。

后续只需提交并推送到 `main`，GitHub Pages 会自动更新网站：

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 链接配置

GitHub 与可选 Demo 地址集中维护在 `assets/config.js`。未填写的可选链接会自动隐藏，不会生成虚假跳转。
