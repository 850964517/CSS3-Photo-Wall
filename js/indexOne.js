 var indexOne={
 	init:function(){
          var _this=this;
          this.img_hover();
 	},
 	img_hover:function(){
       var $img_box=$(".img_box"),
           box_width=$(".img_content_box").width(),
           box_height=$(".img_content_box").height(),
           img_width=$(".img_box").width(),//
           img_height=$(".img_box").height();
           $img_box.each(function(index){
           	  var self=$(this),startIndex,endIndex,startYIndex,endYIndex;
           	  self.mouseover(function(){
           	  	 $(this).css({
           	  	 	width:box_width/2.18
           	  	 });
           	  	 if(index==0 || index==3 || index==6){
                     startIndex=index+1;
                     endIndex=index+2;
           	  	 }else if(index==1 || index==4 || index==7){
                     startIndex=index-1;
                     endIndex=index+1;
           	  	 }else if(index==2 || index==5 || index==8){
                     startIndex=index-2;
                     endIndex=index-1;
           	  	 }
           	  	  startYIndex=index+3;
                  endYIndex=index+6;
                 
           	  	 $(".img_content_box").find(".img_box:eq('"+startIndex+"'),.img_box:eq('"+endIndex+"')").css({
                     	width:box_width/4
                 });
               
           	  }).mouseout(function(){
                   $(".img_content_box .img_box").css({
		         	 	width:img_width
		          });
           	  });
           });

 	}
 }

$(function(){
   indexOne.init();
});