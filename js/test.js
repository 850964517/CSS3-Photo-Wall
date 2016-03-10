Test=function(){
	this.name="张三";
    this.age=20;
    this.children="no";
}
Test.prototype={
	 showInfo:function(){
	 	 console.log(this.name);
	 },
	 setName:function(newName){
        this.name=newName;
	 },
	 getName:function(){
	 	return this.name;
	 }
}