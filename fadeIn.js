/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function(){
    $( "button" ).click(function () {
        $( "#div1" ).fadeIn();
        $( "#div2" ).fadeIn( "slow" );
        $( "#div3" ).fadeIn( 3000 );

    });
    $( "button.but" ).click(function () {
        $( "#div1" ).fadeTo( 3003, 0.16 );
        $( "#div2" ).fadeTo( "slow", 0.4 );
        $( "#div3" ).fadeTo(  0.7 );
    })
});