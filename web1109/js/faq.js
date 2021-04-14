$(function(){

    var $blockOpen=$('.blockOpen');

    $blockOpen.find('.switch a').click(function(){
        var $this=$(this),
            $mapOpen=$this.parent().find('.mapOpen'),
            $tag=$this.find('.tag')


        /*return false;*/
        if($mapOpen.hasClass('updown')){
            $mapOpen.stop().slideUp(400);
            $mapOpen.removeClass('updown');
            $tag.html('+');

        }else{
            $mapOpen.stop().slideDown(400);
            $mapOpen.addClass('updown');

            $tag.html('-');
        }
    })



});
