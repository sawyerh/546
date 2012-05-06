$(function(){
    transformProp = Modernizr.prefixed('transform');
    perspProp = Modernizr.prefixed('perspective');
    
    $('#perspective').on('change', function(){
        var p = $(this).val();
        
        var style = {};
        style[ perspProp ] = p + 'px';
        $('.container').css( style );
        
        
        $('.perspective').html(p);
    });
    
    $('#rotation').on('change', function(){
        var r = $(this).val();
        
        var style = {};
        style[ transformProp ] = 'rotateX('+ r +'deg)';
        $('.card').css( style );
        
        
        $('.rotation').html(r);
    });
}); 