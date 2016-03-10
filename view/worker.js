var i=0,timer;
function timeCount(){
	i++;
	// postMessage(i);//向页面推送消息
	// postMessage("哈哈哈哈");
	// var jsonStr='{"name:"张三","age":20}';
	postMessage(i);
	clearTimeout(timer);
	timer=setTimeout("timeCount()",500);
}
timeCount();