const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

let get = {},
    post = {},
    put = {},
    del = {};

let initMethod = (method, _name) => {
    for (var key in method) {
        if (method.hasOwnProperty(key)) {
            switch (key) {
                case 'Get':
                    for (var name in method[key]) {
                        get[_name + name] = method[key][name];
                    }
                    break;
                case 'Post':
                    for (var name in method[key]) {
                        post[_name + name] = method[key][name];
                    }
                    break;
                case 'Put':
                    for (var name in method[key]) {
                        put[_name + name] = method[key][name];
                    }
                    break;
                case 'Delete':
                    for (var name in method[key]) {
                        del[_name + name] = method[key][name];
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        var modules = require(path.join(__dirname, file));
        var name = file.replace('.js', '/');
        initMethod(modules, name);
    });

module.exports = {
    get, post, put, del
}
