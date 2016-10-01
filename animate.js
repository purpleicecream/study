/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function () {
    $( "button" ).click(function () {
        $( "div" ).animate( {
            left:'250px',
            opacity:0.7,
            height:'360px',
            width:'300px' }, 3000 );
    });
});