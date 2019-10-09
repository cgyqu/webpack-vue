var fs = require('fs')

function ReadMe() {};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
ReadMe.prototype.apply = function (compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.plugin('emit', function (compilation /* 处理 webpack 内部实例的特定数据。*/ , callback) {
        console.log("This is an ReadMe plugin!!!");
        fs.open('README.md', 'a+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            console.log("文件打开成功！");
            fs.writeFile('README.md', 'from readme plugin', function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("数据写入成功！");
            });

            // 关闭文件
            fs.close(fd, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("文件关闭成功");
            });
        });
        // 功能完成后调用 webpack 提供的回调。
        callback();
    });
};

module.exports = ReadMe;