 $(function() {
     // 初始化工具提示
     // $('[data-toggle="tooltip"]').tooltip();
     /**
      * 1. 监听屏幕变化事件
      * 2. 在屏幕变化事件里面获取屏幕的宽度
      * 3. 判断当前屏幕宽度是否大于768 如果大于768 就是PC端 否则就是移动端
      * 4. 如果是PC端就加载PC端的a标签 如果是移动端就加载移动端的a标签
      * 5. 获取轮播图的所有轮播图项item
      * 6. 遍历所有item分别插入对应的a标签
      * 7. a标签的图片地址都不一样所以事先把图片地址存储到当前item的自定义属性身上
      * 8. 分别给item添加两个自定义属性 data-large-image（大图路径） data-small-image(小图路径)
      * 9. 通过JS获取item身上的自定义属性的值 原生JS dataset['属性名'] jquery data('属性名')
      * 10. 把图片设置到a标签里面 后添加到item里
      * 11. resize事件默认不会触发需要拖动才会执行加载图片 所以通过trigger方法触发一下当前事件
      */

      var items = $('.carousel-inner .item');
      $(window).on('resize',function(){
          var windowWidth = $(window).width();
          if(windowWidth > 640){
              items.each(function(index, value) {
              //     $(value).html('<a href="#" class="pcImg" style="background-image:url(img/slide_0'+(index+1)+'_2000x410.jpg)"></a>')
              // }); //不严谨，不利于维护

              //js写法
                // var largeImage = value.datrset['background-image:url(' + largeImage + ')"></a>'];
                // value.html('<a href="#" class="pcImage" style="background-image:url(' + largeImage + ')"></a>');
              
                //jQ写法
                  var largeImage = $(value).data('large-image');
                  $(value).html('<a href="#" class="pcImg" style="background-image:url('+largeImage+')"></a>');
              });
         }else{
              items.each(function (index,value) {
               //    $(value).html('<a href="#" class="mobileImg"><img src="img/slide_0'+(index+1)+'_640x340.jpg" alt="..."></a> ');
               // });  //不严谨，不利于维护
                  var smallImage = $(value).data('small-image');
                  $(value).html('<a href="#" class="mobileImg"><img src="'+smallImage+'" alt="..."></a>');
              });
          }
      }).trigger('resize');
  })


