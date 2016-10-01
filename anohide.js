/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function(){
    $( ".ex .hide" ).click(function () {
        $(this).parent( ".ex" ).toggle( "slow" ) ;
    });
});