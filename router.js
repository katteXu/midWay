const music = require('./controller/music.js');
const test = require('./controller/user.js');
const controller = require('./controller');

let GetRoutes = controller.get;
let PostRoutes = controller.post;
let PutRoutes = controller.put;
let DelRoutes = controller.del;

let basePath = "api/"

exports.route = (route) => {
  for (let path in GetRoutes) {
    route.get(basePath + path, GetRoutes[path]);
  }

  for (let path in PostRoutes) {
    route.post(basePath + path, PostRoutes[path]);
  }

  for (let path in PutRoutes) {
    route.put(basePath + path, PutRoutes[path]);
  }

  for (let path in DelRoutes) {
    route.del(basePath + path, DelRoutes[path]);
  }
}


// GetRoutes['/api/Music'] = music.getMusicById; //scott御用接口

// GetRoutes['api/Test'] = test.test;
