

//定义不同提交方式
//不同的接口 放到不同提交方式里
let Get, Post, Put, Delete;

Get = {
    'GetDemo/:data': (req, res, next) => {
        var data = req.params.data;
        res.json(data);
    },

    'GetAll': (req, res, next) => {
        res.json({ demo: '查询所有' });
    }
}

Post = {
    'AddDemo': (req, res, next) => {
        res.json('添加成功');
    }
}

Put = {
    'EditDemo/:data': (req, res, next) => {
        var data = req.params.data;
        res.json({ data: data + '编辑成功' });
    }
}

Delete = {
    'Delete/:data': (req, res, next) => {
        var data = req.params.data;
        res.json({ data: data + '删除成功' });
    }
}

//导出提交方式
module.exports = {
    Get, Post, Put, Delete
}