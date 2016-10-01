/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function () {
    $( "btn1" ).click(function () {
        console.log( "Text: "+ $( "#test" ).text() );
    });
    
    $( "#btn2" ).click(function () {
        x=100;
        console.log( "HTML:" + $( "#test").html()+x );
    });
});