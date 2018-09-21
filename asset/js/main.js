$( document ).ready( function () {
	// flicking main cursor

	function flick() {
		$( '#flickr_Cursor' ).addClass( 'flickrAnimation' );
	}

	flick();

	function ham() {
		$( '#hamToggle' ).click( function () {
			var windowWrap = $( '.window_wrap' );
			if ( windowWrap.css( "display" ) == "none" ) {
				$( '.window_wrap' ).animate().css( "display", "block" );
			} else {
				$( '.window_wrap' ).css( "display", "none" );
			}
		} );
	}

	ham();

	function cog() {
		var faCog = $( '.mainContainer_row ul li a' );
		$( faCog ).hover( function () {
			$( this ).children( ".fa-cog" ).addClass( 'fa-spin' );
		}, function () {
			$( this ).children( '.fa-cog' ).removeClass( 'fa-spin' );
		} );
	}

	cog();

	function nowClock() {
		var watch = $( '#nowWatch' );
		var nowDate = new Date();
		var hourAM_PM = 'AM';
		var nowYear = nowDate.getFullYear();
		var nowMonth = addPrefix( nowDate.getMonth() + 1, 2 );
		var nowDay = addPrefix( nowDate.getDate(), 2 );
		var nowHour = addPrefix( nowDate.getHours(), 2 );
		var nowMin = addPrefix( nowDate.getMinutes(), 2 );
		var nowSecond = addPrefix( nowDate.getSeconds(), 2 );

		if ( nowHour >= 12 ) {
			hourAM_PM = 'PM';
			nowDate = addPrefix( nowHour - 12, 2 );
		}

		watch.html( "First Login:" + " " + nowYear + "-" + nowMonth + "-" + nowDay + " " + nowHour + ":" + nowMin + ":" + nowSecond );

	}

	function addPrefix( num, digit ) {
		var zero_prefix = "";
		num = num.toString();
		if ( num.length < digit ) {
			for ( var i = 0; i < digit - num.length; i++ ) {
				zero_prefix += 0;
			}
		}
		return zero_prefix + num;
	}

	setInterval( nowClock, 1000 );

	var nav = $( '#selectTab > li' );
	var articles = $( 'body > section' );

	$( nav ).click( function () {
		event.preventDefault();

		var target = $( this );
		var indexs = target.index();
		var section = articles.eq( indexs );
		var offset = section.offset().top;

		$( 'html, body' ).stop().animate( {scrollTop: offset}, 3000, 'swing' );
	} );

	// to the top btn

	$( window ).scroll( function () {

		if ( $( this ).scrollTop() > 100 ) {
			$( ".top_btn" ).fadeIn( 500 );
		} else {
			$( ".top_btn" ).fadeOut( 500 );
		}
	} );

	$( ".top_btn" ).click( function () {
		$( 'html' ).animate( {scrollTop: 500}, 1500 );
	} );

	// header_title fadeOut

	$( window ).on( 'scroll', function () {
		var borderLine = $( '#section1' ).offset().top - 500;
		var windowOffset = $( window ).scrollTop();
		if ( windowOffset >= borderLine ) {
			$( '.header_title' ).stop().fadeOut( 0 );
		} else {
			$( '.header_title' ).stop().fadeIn( 0 );
		}
	} );

	// text effect

	$( '.flow_text' ).html( function ( i, html ) {
		var chars = $.trim( html ).split( "" );
		return '<span>' + chars.join( '</span><span>' ) + '</span>';
	} );

	// desert

	$( '#desert_wide_img' ).hover( function () {
		$( '#desert_wrap' ).stop().animate( {opacity: '1'}, 500 );
	}, function () {
		$( '#desert_wrap' ).stop().animate( {opacity: '0'}, 500 );
	} );

	// door

	$( '.door_bell > img' ).on( 'click', function () {
		if ( $( '.panel' ).hasClass( 'open_panel' ) == false ) {
			$( '.panel' ).addClass( 'open_panel' );
			$( '.door_img_left' ).addClass( 'open_panel' );
			$( '.door_img_right' ).addClass( 'open_panel' );
		} else {
			$( '.panel' ).removeClass( 'open_panel' );
			$( '.door_img_left' ).removeClass( 'open_panel' );
			$( '.door_img_right' ).removeClass( 'open_panel' );
		}
		$( '.design_row_door' ).fadeOut( 2000 );
	} );

	/* $('a').on('click', function(){
		$('.wrap, a').toggleClass('active');

		return false;
	}); */

	// close door

	$( '.hyba_close' ).on( 'click', function () {
		$( '.design_row_door' ).fadeIn( 2000 );
		$( '.panel' ).removeClass( 'open_panel' );
		$( '.door_img_left' ).removeClass( 'open_panel' );
		$( '.door_img_right' ).removeClass( 'open_panel' );
	} );

	$( '#beWhite' ).click( function () {
		$( '#section1' ).css( "background", "#ffffff" );
	} );

	$( '.circle' ).on( 'click', function () {
		var animationClass = $( this ).data( 'animation' );
		var removeSec = $( this ).data( 'remove' );
		if ( $( this ).hasClass( animationClass ) ) {
			$( this ).removeClass( 'animationClass' );
		} else {
			$( this ).addClass( animationClass );
			if ( typeof removeSec != 'undefined' ) {
				var elapse = $( this );
				setTimeout( function () {
					elapse.removeClass( animationClass );
				}, removeSec );
			}
		}
	} );

	$( '.mainImg1' ).click( function () {
		$( '.bouquet_wide' ).fadeIn( 200 );
	} );

	$( '.mainImg2' ).click( function () {
		$( '.desert_wide' ).fadeIn( 200 );
	} );

	$( '.mainImg3' ).click( function () {
		$( '.index2_wide' ).fadeIn( 200 );
	} );

	$( '.wide_img_close_btn' ).click( function () {
		$( this ).parent().fadeOut( 200 );
	} );

	$( window ).on( 'scroll', function () {
		var toggleColorLine = $( '#hamToggleLine' ).offset().top;
		var windowOffset = $( window ).scrollTop();
		var hamburgers = $( '.hamburger-inner' );

		if ( windowOffset >= toggleColorLine ) {
			hamburgers.css( 'background-color', '#e6ae58' );

		} else {
			hamburgers.css( 'background-color', '#fff' );

		}
	} );

	$( '.aesop_btn' ).click( function () {
			if ( $( '.aesopDetail' ).css( 'opacity' ) == 0.2 ) {
				$( '.aesopDetail' ).css( {'opacity': '1', 'z-index': '1'} );
			} else {
				$( '.aesopDetail' ).css( {'opacity': '0.2', 'z-index': '-1'} );
			}
	} );

	$( '.hansol_btn' ).click( function () {
		if ( $( '.hansolDetail' ).css( 'opacity' ) == 0.3 ) {
			$( '.hansolDetail' ).css( {'opacity': '1', 'z-index': '1'} );
			$('.animate_text_scss').addClass('add_netflix');
		} else {
			$( '.hansolDetail' ).css( {'opacity': '0.3', 'z-index': '-1'} );
			$('.animate_text_scss').removeClass('add_netflix');
		}
	} );

	var myBubbles = $( '.bubble' );
	var bubbleColor = ['#7f6ec5', '#c5ffa6', '#c2a4ff'];

	for ( var i = 0; i < myBubbles.length; i++ ) {
		myBubbles[i].style.backgroundColor = bubbleColor[Math.floor( Math.random() * bubbleColor.length )];
		myBubbles[i].style.opacity = Math.random() * .75;
		var bubbleSize = ( Math.floor( Math.random() * 9 ) + 2 ) * 50;
		myBubbles[i].style.width = bubbleSize + 'px';
		myBubbles[i].style.height = bubbleSize + 'px';
		myBubbles[i].style.borderRadius = ( bubbleSize / 2 ) + 'px';
		myBubbles[i].style.left = Math.floor( Math.random() * 100 ) + '%';
		myBubbles[i].style.animationDuration = Math.floor( Math.random() * 16 ) + 12 + 's';
		myBubbles[i].style.animationDelay = Math.floor( Math.random() * 8 ) + 's';
	}

	$( document ).ready( function () {
		jQuery.expr.filters.offscreen = function ( el ) {
			return (
					( el.offsetLeft + el.offsetWidth ) < 0 ||
					( el.offsetTop + el.offsetHeight ) < 0 ||
					( el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight )
			);
		};

		setInterval( function () {
			$( '.bubble' ).each( function () {
				if ( $( this ).is( ':offscreen' ) ) {
					var bubbleOffset = Math.floor( ( Math.random() * 140 ) - 19 );
					$( this ).css( {'left': bubbleOffset + '%'} );
				}
			} );
		}, 50 );
	} );


} );
