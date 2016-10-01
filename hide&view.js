/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function(){
    $( "#hide" ).click(function(){
        $( "p" ).hide();
    });
    
    $( "#show" ).click(function(){
        $( "p" ).show( 1000 );
    });
});
