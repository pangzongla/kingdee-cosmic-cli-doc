# 说明
在开始介绍起步工程前，需要提前了解下全局配置信息。

每个起步工程的根目录有一个叫 `app.config.js` 的文件，这里面设置了整个工程的所有配置信息。

例如你看到的应该是：

```js
module.exports = {
  /* 苍穹相关 */
  APP_NAME: "demo", 
  ISV: "kingdee", 
  MODULE_ID: "gai", 
  COSMIC_SERVER_URL: "http://localhost:8080/", 
  /* 请求方案 */
  REQUEST_MODE: "single", // 请求模式 并发 concurrent 和单线 single ，选择了并发模式一定要填下面的UPDATE_METHODS_FIELD
  UPDATE_METHODS_FIELD: "type", // 这里是后端的update数据中，如果能返回请求的方法名称，它对应的字段
  /* ram开发模式下的配置 */
  DEV_RAM_REQUEST_TYPE: "axios", // dev:ram模式下用 socket 还是 axios 请求
  /* 服务端口 */
  MOCK_PORT: "3001", // mock服务端口
  DEV_RAM_PORT: "8081", // ram开发模式端口
  ANALYZER_PORT: "8889", // 分析模式端口
  SVG_PORT: "8888", // 所有SVG展示端口
};
```
- `APP_NAME` 这个是自定义控件的名称，苍穹平台会根据这个名称来注册你的控件。并且在RAM开发模式（后面章节提到）下会生产正确的文件名。
- `ISV` 开发商标识。
- `MODULE_ID` 领域id。以上三个配置都十分重要，决定了控件是否能被正确注册。
- `COSMIC_SERVER_URL` 这个就是你本地启动的苍穹服务页面访问地址。

> 改了 `APP_NAME` 记得把 `src/styles/variable.less` 的css变量名称也改了。

**其他配置现在看不懂没关系，后面章节会提到~**