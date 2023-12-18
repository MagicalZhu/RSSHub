const dirname = __dirname + '/v2';

const requireAll = require('require-all');

// 遍历整个 routes 文件夹，收集模块路由 router.js
const RouterPath = requireAll({
    dirname,
    filter: /router\.js$/,
});

const routes = {};

// 将收集到的自定义模块路由进行合并
for (const dir in RouterPath) {
    const project = RouterPath[dir]['router.js'];
    routes[dir] = project;
}

// add custom router folder
const refineDirname = __dirname + '/refineRouter';
const RefineRouterPath = requireAll({
    dirname: refineDirname,
    filter: /router\.js$/,
});
for (const dir in RefineRouterPath) {
    const project = RefineRouterPath[dir]['router.js'];
    routes[dir] = project;
}

module.exports = routes;
