/**
 * Created by yu on 2016/7/18.
 */
$(document).ready(function () {
    $( "button" ).click(function () {
        var txt = "";
        var w = $("#div1");
        txt += "Width of div: " + w.width() + "</br>";
        txt += "Height of div: " + w.height();
        w.html( txt );
    });
});