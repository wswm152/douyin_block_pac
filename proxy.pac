var douyin=[
'*pstatp.com',
'*snssdk.com',
'*ixigua.com',
'*aweme.snssdk.com',
'*amemv.com',
'*ixiguavideo.com',
'*yximgs.com',
'*gifshow.com',
'*huoshan.com',
'*douyin.com',
'*iesdouyin.com',
'*toutiao.com'
];
var block = 'PROXY 0.0.0.0:80;';
var direct = 'DIRECT;';
function FindProxyForURL(url, host) {
	for(i in douyin){
		// block by domain
		if(isdouyin(host)){
		
			return block;
		};
	};
		return direct;
    
}
function isdouyin(host){
for(i in douyin){
		// block by domain
		if(shExpMatch(host, douyin[i])){
			return true;
		};
	};
	return false;
}
