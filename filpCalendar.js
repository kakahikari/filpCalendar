/*
 * filpCalendar a jQuery Plug-in
 * Copyright 2015 kakahikari
 * Licensed MIT
 * Date: 2015-12-??
 * Version:  1.0.0 
 */
 
;(function ( $ ) {
	
	//do flip and make next one active
	function flip(flipper, settings) {
		flipper.each( function () {
				$(this).removeClass("active");				
				$(this).find("div").removeClass("shadowChange");
				if ($(this).next(".flip-page").length == 0) {
					$(this).parent().find(".flip-page").css( "z-Index", settings.zIndex ).first().addClass("active").css( "z-Index", settings.zIndex+1 );
					if ( settings.shadowChange ) $(this).parent().find(".flip-page div").first().addClass("shadowChange");
				}
				else {
					$(this).next().addClass("active").css( "z-Index", settings.zIndex+1 );
					if ( settings.shadowChange ) $(this).next().find("div").addClass("shadowChange");
				} 
			});
	}
	
	//call active
	function startFlip(flipper, settings) {		
		setInterval( function() {
			flipper.find(".active").each( function() {
				$(this).find(".flip-page div").css( "width", $(this).width() );
				flip( $(this), settings );	
			});
		}, settings.interval);
	}	
	
	//main function
	$.fn.filpCalendar = function(options) {
		var settings = $.extend({
			'interval' : 5000,
			'animationDuration' : '4s',
			'backgroundColor' : '#fff',
			'backsideColor' : '#fff',
			'zIndex' : 5,
			'fullImg' : false,
			'shadowChange' : true,
		},options);
		var id = this.attr('id');
		if (id) {
			$('head').append("<style>#" + id + ".filpCalendar .flip-page.active::after {background-color:" + settings.backsideColor + ";visibility: hidden;content:'';position:absolute;top:0;left:0;width:100%;height:100%;-moz-animation: filppingHide " + settings.animationDuration + " linear 1;-o-animation: filppingHide " + settings.animationDuration + " linear 1;-webkit-animation:filppingHide " + settings.animationDuration + " linear 1;animation:filppingHide " + settings.animationDuration + " linear 1;}</style>");
			$('head').append("<style>@-webkit-keyframes filpping{0% {-webkit-transform:rotateX(0deg) skewX(0deg);z-index: " + (settings.zIndex-1) + ";}60% {-webkit-transform:rotateX(180deg) skewX(15deg);z-index: "+ (settings.zIndex-1) + ";}74% {-webkit-transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}75% {-webkit-transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}100% {-webkit-transform: rotateX(0) skewX(0);z-index: "+ (settings.zIndex+2) + ";}}</style>");
			$('head').append("<style>@keyframes filpping{0% {transform:rotateX(0deg) skewX(0deg);z-index: " + (settings.zIndex-1) + ";}60% {transform:rotateX(180deg) skewX(15deg);z-index: "+ (settings.zIndex-1) + ";}74% {transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}75% {transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}100% {transform: rotateX(0) skewX(0);z-index: "+ (settings.zIndex+2) + ";}}</style>");
		} else {
			$('head').append("<style>.filpCalendar .flip-page.active::after {background-color:" + settings.backsideColor + ";visibility: hidden;content:'';position:absolute;top:0;left:0;width:100%;height:100%;-moz-animation: filppingHide " + settings.animationDuration + " linear 1;-o-animation: filppingHide " + settings.animationDuration + " linear 1;-webkit-animation:filppingHide " + settings.animationDuration + " linear 1;animation:filppingHide " + settings.animationDuration + " linear 1;}</style>");
			$('head').append("<style>@-webkit-keyframes filpping{0% {-webkit-transform:rotateX(0deg) skewX(0deg);z-index: " + (settings.zIndex-1) + ";}60% {-webkit-transform:rotateX(180deg) skewX(15deg);z-index: "+ (settings.zIndex-1) + ";}74% {-webkit-transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}75% {-webkit-transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}100% {-webkit-transform: rotateX(0) skewX(0);z-index: "+ (settings.zIndex+2) + ";}}</style>");
			$('head').append("<style>@keyframes filpping{0% {transform:rotateX(0deg) skewX(0deg);z-index: " + (settings.zIndex-1) + ";}60% {transform:rotateX(180deg) skewX(15deg);z-index: "+ (settings.zIndex-1) + ";}74% {transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}75% {transform: rotateX(90deg) skewX(-45deg);z-index: "+ (settings.zIndex+2) + ";}100% {transform: rotateX(0) skewX(0);z-index: "+ (settings.zIndex+2) + ";}}</style>");
		}		
		return this.each( function(){
			$(this).find(".flip-page div").css( "height", $(this).height() );
			$(this).find(".flip-page div").css( "width", $(this).width() );
			$(this).find(".flip-page div").css( "background-color", settings.backgroundColor );
			$(this).find(".flip-page").css( "animation-duration", settings.animationDuration );
			if ( settings.fullImg ) $(this).find(".flip-page").addClass("fullImg");			
			$(this).children(".flip-page:eq(0)").addClass("active").css( "z-Index", settings.zIndex );
			if ( settings.shadowChange ) $(this).children(".flip-page:eq(0)").find("div").addClass("shadowChange");
			startFlip( $(this), settings );
		});
	};
}(jQuery));