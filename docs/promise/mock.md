# Mock服务

在ram模式下，可以启动mock服务：

```bash
npm run mock
```

启动的服务端口可在全局配置中修改 `MOCK_PORT`。

为了模拟苍穹平台主动推送信息的能力，ram模式默认采用 Axios 的方式收发数据，你也可以通过修改全局配置中的 `DEV_RAM_REQUEST_TYPE` 变量来决定请求使用的是 Axios 还是 Socket 方式。`axios` 为 Axios 模式，`socket` 为 Websocket 模式。

一般情况下后端会在控件初始化的时候推送 `init` 事件，所以第一次 `init` 生命周期数据的主动推送永远用的是 `Socket` 方式触发。

不过具体还是要看后端怎么写的，如果后端没推动 `init` 事件，那么可以修改这里的代码不主动触发 `init` 事件 `src/devSocket.ts`：

```ts
const InitComponent = InitComponentSingleton.getInstance();
if (this.isInitData) {
  InitComponent.init(msg);
} else {
  InitComponent.update(msg);
}
if (this.isInitData) this.isInitData = false;
```

换成

```ts
const InitComponent = InitComponentSingleton.getInstance();
InitComponent.update(msg);
```

在 `serverMock.js` 中注释 `socket.emit("message", initMock);` 。

这里演示项目是模拟后端在控件初始化的时候主动推动 `init` 和 `update` 事件，所以执行了两次 `socket.emit("message", initMock);` 。根据自己的实际情况来修改。

## 数据伪造

基本上伪造数据只需要在 `/mock` 文件夹中修改即可。