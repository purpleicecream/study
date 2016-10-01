/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function () {
    $( "#start" ).click(function () {
        $( "div" ).animate( {left: '100px'}, 5000 ).animate( {fontSize:'3em'}, 5000 );
    });

    $( "#stop" ).click(function () {
        $( "div" ).stop();
    });

    $( "#stopAll" ).click(function () {
        $( "div" ).stop( true );
    });

    $( "#stopBut" ).click(function () {
        $( "div" ).stop( true, true );
    });

});