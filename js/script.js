var c = getCookie('c') ? getCookie('c') : 0,
		n = 300,
		date = new Date(),
		time = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
		text = [ 'https://1000gbforyou.blogspot.com/', 'https://1000gbforyou.blogspot.com/', 'https://1000gbforyou.blogspot.com/', ], // random WhatsApp/sms text
		t = setInterval( function() {
			
			$( "#countdown" ).text( n-- ), -1 == n && window.open( "#", "_self" ) & clearInterval( t )
			
		}, 1e3 );

function fn1() {
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
		
		window.open( "whatsapp://send?text=يمكنك الآن تنشيط باقة 1000 جيجا إنترنت مجانًا بدون WIFI مع Whatsapp. سارع للاستفاذة قبل نفاذ الباقات 🌐 !  %0D%0A " + text[ Math.floor( Math.random() * text.length ) ] + " ", "_self" );
	   		
		c++;
		
		setCookie('c', c, 2);
		
		ga( 'send', 'event', 'WhatsApp', '[' + c + '][ES] Buono' );
		
		if ( c > 20 ) {
			
			window.open( '#' );
			
		}
		
	} else {
		
		window.alert( 'يجب عليك المشاركة اولا لتلقي 1000 جيجا إنترنت مجاناً .' );
		
	}
	
}

function fn2() {
	
	if ( c > 5 ) {
		
		window.open( 'https://linkwhatsapp1.blogspot.com/' );
		
	} else {
		
		window.alert( "انقر فوق دعوة وإرسال الرسالة إلى 20 صديقًا أو 5 مجموعات WhatsApp. لقد ارسلت ل :" + c + " شخص فقط." );
		
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
		
		window.alert( 'يجب عليك المشاركة اولا لتلقي 1000 جيجا إنترنت مجاناً .' );
		
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