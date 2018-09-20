$( document ).ready( function () {

	var Index2 = ( function () {
		function Index2( obj ) {
			this.obj = obj;
			this.child = new Array();
		}

		Index2.prototype.initData = function ( t ) {
			for ( var i = 0; i < t.length; i++ ) {
				this.obj.child[i] = this.obj.children().eq( i );
			}
		};

		Index2.prototype.revealData = function ( obj ) {
			this.obj.children().css( {'opacity': '1', 'visibility': 'visible'} );
		};

		Index2.prototype.hideData = function ( obj ) {
			this.obj.children().css( {"opacity": "0", "visibility": "hidden"} );
		};

		Index2.prototype.revealDataEach = function ( obj, n ) {
			this.obj.children().eq( n ).stop().fadeIn( 500 );
		};

		Index2.prototype.hideDataEach = function ( obj, n ) {
			this.obj.children().eq( n ).stop().fadeOut( 500 );
		};

		Index2.prototype.randColor = function ( obj ) {
			this.obj.children().each( function ( index ) {

				var Rcolor = Math.floor( ( Math.random() * 256 ) );
				var Gcolor = Math.floor( ( Math.random() * 256 ) );
				var Bcolor = Math.floor( ( Math.random() * 256 ) );

				$( this ).css( "color", "rgb(" + Rcolor + "," + Gcolor + "," + Bcolor + ")" );
			} );
		};

		return Index2;

	}() );

	var index2_ul = new Index2( $( '.index_wide_wrap' ) );
	index2_ul.initData( this );

	$( '#index2' ).hover( function () {
		$( '.index_wide_wrap' ).css( {'opacity': '1', 'visibility': 'visible'} );
		index2_ul.revealData( this );
	}, function () {
		index2_ul.hideData( this );
		$( '.index2_wide_wrap' ).css( {'opacity': '0', 'visibility': 'hidden'} );
	} );

	var hyba = new Index2( $( "#hyba" ) );
	hyba.initData( this );

	$( '#hyba > img' ).hover( function () {
		hyba.hideDataEach( this, 1 );
	}, function () {
		hyba.revealDataEach( this, 1 );
	} );


	var terminal = new Index2( $( '.terminal_screen' ) );
	terminal.initData( this );
	terminal.randColor( this );


} );