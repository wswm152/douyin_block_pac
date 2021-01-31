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
	
		if(isdouyin(host)&&iscctime()){
			return block;
		
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
function iscctime(){
return timeRange(17,30,17,59)||timeRange(18,30,18,59)||timeRange(19,30,19,59)||timeRange(20,30,20,59)||timeRange(21,30,21,59);
}
