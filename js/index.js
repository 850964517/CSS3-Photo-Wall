var Index={
     init:function(){
     	var _this=this;
     	_this.imgHover();
     },
     imgHover:function(){
         var $img_box=$(".img_box"),
         img_content_box_height=$(".img_content_box").height(),//盒子的宽度
         img_content_box_width=$(".img_content_box").width(),
         img_width=$(".img_box").width(),
         img_height=$(".img_box").height();
         $(".img_box img").height(img_height*0.7);
         $img_box.each(function(index, el) {
             var self=$(this),startIndex,endIndex;
	         self.mouseover(function(event) {
                  self.css({
                    width:"100%",
                    height:img_content_box_height/3
                  });
                  self.find("img").css("height",img_height);
                  $(".img_content_box").css({
                    "width":img_content_box_width*1.5
                  });
                  var hoverTxt=self.find(".tip_txt").attr("data-txt");
                  self.find(".tip_txt").html(hoverTxt).css({
                      left:"40%",
                      top:"40%"
                  });
	         	 if(index==1){
                    $(".img_content_box").find(".img_box:eq(2),.img_box:eq(0)").css({
                        height:img_height/1.8
                     }); 
	         	 }else if(index==0){
                     $(".img_content_box").find(".img_box:eq(1),.img_box:eq(2)").css({
                     	height:img_height/1.9
                     }); 
	         	 }else if(index==2){
                    $(".img_content_box").find(".img_box:eq(1),.img_box:eq(0)").css({
                     	height:img_height/1.9
                     }); 
	         	 }  
                 self.find(".img_mask").css({
                    backgroundColor:"#fff",
                    opacity:0
                 });
                 
	         }).mouseout(function(event) {
                 $(".img_box img").height(img_height*0.7);
                  $(".img_content_box").css({
                    "width":img_content_box_width
                  })
                   self.css({
                    width:"150%"
                  });
                  var mouseoutTxt=self.find(".tip_txt").attr("title");
                  self.find(".tip_txt").html(mouseoutTxt).css({
                      top: "45%",
                      left: "30%"
                  });
                   self.find(".img_mask").css({
                    backgroundColor:"#000",
                    height:img_height*0.7,
                    opacity:0.3
                 });
		        $(".img_content_box .img_box").height(img_height*0.7)
	         });;
         });
     }
};
$(function(){
	Index.init();
});
