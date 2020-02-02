
// navのくるっと

$(function() {
    $('#nav li')
    .each(function(){
        $(this).append('<span>'+$(this).html()+'</span>')
    })
     .hover(
        function(){
            $('a', this).stop().animate({
                marginTop:'-1.5em'
            },200);
        },
        function () {
            $('a', this).stop().animate({
                marginTop:'0em'
            },300);
        }
    );
});


//■page topボタン

$(function(){
    var topBtn=$('#pageTop');
    topBtn.hide();
    
     
    
    //◇ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>80){
    
        //---- 画面を80pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
    
      }else{
    
        //---- 画面が80pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
    
      }
    });
    
     
    
    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    
    });
    
    
    });






    Modernizr.addTest('backgroundclip',function(){
 
      var div = document.createElement('div');

      if ('backgroundClip' in div.style) return true;

      'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val){
        if (val+'BackgroundClip' in div.style) return true;
      });

    });

