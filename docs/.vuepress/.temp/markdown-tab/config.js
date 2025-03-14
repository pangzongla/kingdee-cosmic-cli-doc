import { CodeTabs } from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
