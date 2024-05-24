# RAM模式

就是我们日常使用React/Vue开发的模式，通过`index.html`作为访问入口。我称为称为ram或者RAM模式。

启动指令：

```bash
npm run dev:ram
```

可在全局配置中修改启动的端口 `DEV_RAM_PORT`。

因为RAM模式下，工程会自动判断环境，从而开启Axios或者Socket方法，建议使用该模式后同时开启Mock服务（请阅读 [Mock服务](/promise/mock) 获取更多信息）。