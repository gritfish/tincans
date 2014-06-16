$.noConflict();
// Code that uses other library's $ can follow here.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function removeClasses(OBJ){
	for(var i=0; i<alphabet.length; i++){
		OBJ.removeClass("ui-bar-"+alphabet[i]);
		OBJ.removeClass("ui-body-"+alphabet[i]);
		OBJ.removeClass("ui-button-"+alphabet[i]);
		OBJ.removeClass("ui-btn-up-"+alphabet[i]);
		OBJ.removeClass("ui-btn-down-"+alphabet[i]);
	}
}
function setTheme(THEME){
	
	jQuery('#pageContainer div[data-role=header]').each(function(){
		removeClasses(jQuery(this));
		jQuery(this).addClass("ui-bar-"+THEME).attr("data-theme",THEME);
	})
	jQuery('#pageContainer div[data-role=header] a[data-role=button]').each(function(){
		removeClasses(jQuery(this));
		jQuery(this).addClass("ui-btn-up-"+THEME).attr("data-theme",THEME);
	})
	jQuery('#pageContainer div[data-role=content]').each(function(){
		removeClasses(jQuery(this));
		jQuery(this).addClass("ui-body-"+THEME).attr("data-theme",THEME);
	})
	jQuery('#pageContainer div[data-role=footer]').each(function(){
		removeClasses(jQuery(this));
		jQuery(this).addClass("ui-bar-"+THEME).attr("data-theme",THEME);
	})
}
jQuery(function () {
    jQuery(window).bind('resize', function (event) {

		var content_height = jQuery('#pageContainer').css('min-height')
		var header_height  = jQuery('#pageContainer div[data-role="header"]').height()

		content_height = content_height.replace('px','');

		var inner_height = content_height-header_height-32;

		jQuery('#passages').css('min-height', inner_height+'px');

		event.stopImmediatePropagation();


    }).trigger('resize');
});