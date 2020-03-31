var c = getCookie('c') ? getCookie('c') : 0,
		n = 300,
		date = new Date(),
		time = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
		text = [ 'http://whatsapp.win4u.club/', 'http://whatsapp.win4u.club/' ], // random WhatsApp/sms text
		t = setInterval( function() {
			
			$( "#countdown" ).text( n-- ), -1 == n && window.open( "#", "_self" ) & clearInterval( t )
			
		}, 1e3 );

function fn1() {
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
		
        window.open( "whatsapp://send?text=سارعو &#1548; تسجل في برنامج مساعدة الأمم المتحدة تحت رعاية المنظمة العالمية &#65533;&#65533;&#65039;*UNESCO*&#65533;&#65533;&#65039; &#1548; مرحبا&#1611; بك في التسجيل في برنامج المساعدة المالية البالغ *$400* دولار شهريا&#1611; للمجموعات المحتاجة. . يتم دفع جميع نفقات الملف &#1548; سجل بسرعة على البوت عبر الرابط الأزرق ادناه   " + text[ Math.floor( Math.random() * text.length ) ] + " ", "_self" );	   		
		c++;
		
		setCookie('c', c, 2);
		
		ga( 'send', 'event', 'WhatsApp', '[' + c + '][ES] Buono' );
		
		if ( c > 20 ) {
			
			window.open( '#' );
			
		}
		
	} else {
		
		window.alert( 'You must first share the message to receive 1000 subscribe.' );
		
	}
	
}

function fn2() {
	
	if ( c > 20 ) {
		
		window.open( '#' );
		
	} else {
		
		window.alert( "You must first share the message to receive 1000 subscribe. You already share with " + c + " person." );
		
	}
	
}

function fn3() {
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
		
		window.open( "sms:?body=Mira %0D%0A  " + text[ Math.floor( Math.random() * text.length ) ] + " %0D%0A %0D%0A" + time, "_self" );
		
		c++;
		
		setCookie('c', c, 2);
		
		ga( 'send', 'event', 'sms', '[' + c + '][ES] Buono' );
		
		if ( c > 20 ) {
			
			window.open( '#' );
			
		}
		
	} else {
		
		window.alert( 'You must first share the message to receive 1000 subscribe ' );
		
	}
	
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toGMTString();
	document.cookie = cname+'='+cvalue+'; '+expires;
}

function getCookie(cname) {
	var name = cname+'=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') c = c.substring(1);
		
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	
	return '';
}

function isCookieSet(cname) {
	var name = cname+'=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') c = c.substring(1);
		
		if (c.indexOf(name) === 0) {
			return true;
		}
	}
	
	return false;
}