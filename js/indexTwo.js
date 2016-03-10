var IndexTwo={
	init:function(){
		var _this=this;
		_this.img_hover();
	},
	img_hover:function(){
         var $img_box_content=$(".img_box_content"),
             $one_cloumn=$(".one_cloumn"),
             $img_box=$(".img_box"),
             $img_view=$(".img_view"),
             img_view_height=$img_view.height();
             $img_view.height($img_box.height()*0.7);
             $img_box.each(function(){
         	   var self=$(this);
             self.mouseover(function(index){
                 self.find(".img_mask").css({
                    backgroundColor:"#fff",
                    opacity:0
                 });
                 self.siblings().height($img_box_content.height()/4);
                 self.css({
                   height:img_view_height
                 });
                 self.find(".img_view").css({
                 	width:"100%",
                  height:img_view_height
                 });
                  self.find(".img_view img").css({
                      height:"100%"
                  });
                  self.parent().css({
                      width:"45%"
                  });
                  if(self.parent().attr("class")==="one_cloumn"){
                     self.parent().next().css({
                         width:"19%"
                     });
                     self.parent().next().find(".img_box img").css({
                        height:"100%",
                        width:"100%"
                     });
                     self.parent().next().find(".img_box").height();
                  }else{
                      self.parent().prev().css({
                         width:"19%",
                      });
                      self.parent().next().find(".img_box img").css({
                           height:"100%",
                           width:"100%"
                      });
                      self.parent().prev().find(".img_box").height();
                  }
                  var hoverTxt=self.find(".tip_txt").attr("data-txt");
                  self.find(".tip_txt").html(hoverTxt);  
             }).mouseout(function(index){
                 self.find(".img_mask").css({
                    backgroundColor:"#000",
                    opacity:0.3
                 });
                  var mouseoutTxt=self.find(".tip_txt").attr("title");
                  self.find(".tip_txt").html(mouseoutTxt);
                 
                 /* self.find(".img_view").css({
                      width:"160%",
                      height:img_view_height*0.7
                  });
                  self.parent().css({
                     width:"32%"
                  });
                  self.parent().siblings().css({
                     width:"32%"
                  });
                  self.css({
                  	height:img_view_height*0.7
                  });
                  self.siblings().css({
                      height:img_view_height*0.7
                    });
                  self.find(".img_view img").height("");    */  
             });
         });
	}

}
$(function(){
     IndexTwo.init();
});
