const http = require('http');
const co = require('co');
/**
 * 根据id获取网易云音乐
 * 测试id=317921676
 */
let getMusicById = (req, res, next) => {
    let id = req.query.id;
    let url = `http://music.163.com/api/playlist/detail?id=${id}`;
    get(url).then((val) => {
        res.json(NetEaseResult(val));
    });
}

/**
 * 返回信息封装Promise
 */
let getPromise = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let str = "";
            response.setEncoding('utf8');
            response.on('data', (r) => {
                str += r;
            });
            response.on('end', () => {
                resolve(JSON.parse(str));
            });
        });
    });
}

/**
 * get请求
 */
let get = co.wrap(function* (url) {
    var result = yield getPromise(url);
    return result;
});

/**
 * 网易云音乐过滤
 * 格式：
 *  {
 *      name:
 *      src:
 *      author:
 *      cover:
 *  }
 */
let NetEaseResult = (model) => {
    let result = model.result.tracks;
    let muiscResult = [];
    result.forEach((item, index) => {
        let obj = {
            name: item.name,
            src: item.mp3Url,
            author: formatArtisets(item.artists),
            cover: item.album.picUrl
        }
        muiscResult.push(obj);
    });
    return muiscResult;
}

/**
 * 将artisets内容并列
 */
let formatArtisets = (artists) => {
    let artistsResult = [];
    artists.forEach((item, index) => {
        artistsResult.push(item.name);
    });
    return artistsResult.join("&");
}

//导出
module.exports = {
    Get: { 'Music': getMusicById }
}