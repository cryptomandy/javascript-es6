npm install --registry=https://registry.npm.taobao.org

npm install -d == npm install --save-dev
npm insatll -s == npm install --save

使用 --save-dev 安装的 插件，被写入到 devDependencies 域里面去，而使用 --save 安装的插件，则是被写入到 dependencies 区块里面去。
devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。
比如我们写一个项目要依赖于 jQuery，没有这个包的依赖运行就会报错，这时候就把这个依赖写入 dependencies ；
而我们使用的一些构建工具比如 glup、webpack 这些只是在开发中使用的包，上线以
后就和他们没关系了，所以将它写入 devDependencies。
