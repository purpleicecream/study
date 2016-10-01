/**
 * Created by yu on 2016/7/18.
 */
$.noConflict();
jQuery(documnet).ready(function () {
    jQuery("button").click(function () {
        jQuery("p").text( "jQuery人在运行!" );
    });
});