import { GitContributors } from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/liujingpang/code/other/kingdee-cosmic-cli-doc/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
