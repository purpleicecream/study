/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function () {
    $( "#flip" ).click(function () {
        $( "#panel" ).slideDown( 5000 );
    });
    $( "#stop" ).click( function () {
        $( "#panel" ).stop();
    });
});