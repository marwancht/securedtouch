var request = require('request');

request(`https://my.asos.com/identity/connect/authorize?state=${Math.floor(1e16 * Math.random())}&nonce=${Math.floor(1e16 * Math.random())}&client_id=D91F2DAA-898C-4E10-9102-D6C974AFBD59&redirect_uri=https%3A%2F%2Fwww.asos.com%2Fadidas-originals%2Fadidas-originals-niteball-trainers-in-black-and-white%2Fprd%2F23958430%3Fcolourwayid%3D60526809%26cid%3D7113&response_type=id_token%20token&scope=openid%20sensitive%20profile&ui_locales=en-GB&acr_values=0&response_mode=json&store=COM&country=GB&keyStoreDataversion=hnm9sjt-28&lang=en-GB`, function(err, res, body) {
sessionId = res.headers['set-cookie'][3].split('=')[1].split(';')[0]
payload = Buffer.from(`{"pingVersion":"1.3.0p","appId":"asos","appSessionId":"${sessionId}"}`).toString('base64')
request(`https://st-static.asos.com/sdk/pong.js?body=${payload}%3D`, function(err, res, body) {
securedTouch = body.split("= '")[1].split("';")[0]
});
});

