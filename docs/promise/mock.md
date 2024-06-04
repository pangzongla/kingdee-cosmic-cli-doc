# Mock 服务

在 ram 模式下，可以启动 Mock 服务：

```bash
npm run mock
```

启动的服务端口可在全局配置中修改 `MOCK_PORT`。

为了模拟苍穹平台主动推送信息的能力，ram 模式默认采用 Axios 的方式收发数据，你也可以通过修改全局配置中的 `DEV_RAM_REQUEST_TYPE` 变量来决定请求使用的是 Axios 还是 Socket 方式。`axios` 为 Axios 模式，`socket` 为 Websocket 模式。

一般情况下后端会在控件初始化的时候主动推送 `init` 与 `update` 事件，所以第一次 `init`与 `update` 生命周期数据的主动推送永远用的是 `Socket` 方式触发。

在 `serverMock.js` 中通过触发两次 `socket.emit("message", initMock);` 来模拟。

前端中为了分辨第一次主动推动 `init` 与 `update` 事件，在 `src/devSocket.ts` 中做了特殊处理：

```ts
const InitComponent = InitComponentSingleton.getInstance();
if (this.isInitData) {
  InitComponent.init(msg);
} else {
  InitComponent.update(msg);
}
if (this.isInitData) this.isInitData = false;
```

## 数据伪造

基本上伪造数据只需要在 `/mock` 文件夹中修改即可。
