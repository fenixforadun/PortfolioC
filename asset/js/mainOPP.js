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
			this.obj.children().eq( n ).stop().fadeIn( 2000 );
		};

		Index2.prototype.hideDataEach = function ( obj, n ) {
			this.obj.children().eq( n ).stop().fadeOut( 2000 );
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

	var index2_ul = new Index2( $( '#index2_wrap' ) );
	index2_ul.initData( this );

	$( '#index2' ).hover( function () {
		index2_ul.revealData( this );
	}, function () {
		index2_ul.hideData( this );
	} );

	var hyba = new Index2( $( "#hyba" ) );
	hyba.initData( this );

	$( '#hyba > img' ).hover( function () {
		hyba.hideDataEach( this, 1 );
		hyba.revealDataEach( this, 2 );
	}, function () {
		hyba.hideDataEach( this, 2 );
		hyba.revealDataEach( this, 1 );
	} );


	var terminal = new Index2( $( '.terminal_screen' ) );
	terminal.initData( this );
	terminal.randColor( this );

	// sakura

	onload = function () {
		initPetal();
	};

	function initPetal() {
		window.PetalCanvas = new CanvasController( "petals" );
		window.fallenPetals = 0;
		var time = setInterval( petalAnimation, 50 );
	}

	function petalAnimation() {
		if ( Math.random() > 0.25 && PetalCanvas.children.length < 200 )
			addPetal( 1, 1, 1, PetalCanvas.width, 1 );

		if ( fallenPetals > 50 ) {
			var j = PetalCanvas.children.length;
			for ( var i = 0; i < j; i++ ) {
				var child = PetalCanvas.children[i];
				if ( child.floatPetal ) child.floatPetal();
			}
			fallenPetals = 0;
		}
		PetalCanvas.rendering();
	}

	function CanvasController( id ) {
		var canvas = document.getElementById( id );
		canvas.width = 600;
		canvas.height = 300;

		this.canvas = canvas;
		this.canvasContext = canvas.getContext( "2d" );
		this.width = canvas.width;
		this.height = canvas.height;
		this.children = new Array();

		this.rendering = function () {
			this.clear();

			var limit = this.children.length;
			for ( var i = limit - 1; i >= 0; i-- ) {
				this.canvasContext.save();
				var child = this.children[i];

				if ( child.draw( this.canvasContext ) ) {
					child.callback();
					this.removeChild( i );
				}
				this.canvasContext.restore();
			}
		};

		this.clear = function () {
			this.canvasContext.clearRect( 0, 0, this.width, this.height );
		};
		this.addChild = function ( child ) {
			this.children.push( child );
		};
		this.removeChild = function ( num ) {
			this.children.splice( num, 1 );
		};
	}

	function random( n ) {
		return Math.floor( Math.random() * n ) + 1;
	}

	function addPetal( num, x1, y1, x2, y2 ) {
		for ( var i = 0; i < num; i++ ) {
			var x_pos = Math.floor( Math.random() * ( x2 - x1 ) ) + x1;
			var y_pos = Math.floor( Math.random() * ( y2 - y1 ) ) + y1;

			PetalCanvas.addChild(
					new Petals(
							x_pos, y_pos, Math.random() + 0.5,
							{x: random( 360 ), y: random( 360 ), z: random( 360 )},
							{x: random( 10 ), y: random( 10 ), z: random( 10 )},
							random( 5 )
					)
			);
		}
	}

	function Petals( x, y, scale, direction, rotate, wind ) {
		this.x_pos = x;
		this.y_pos = y;
		this.scale = scale;
		this.direction = direction;
		this.rotate = rotate;
		this.wind = wind;
		this.gr = 6;
		this.length = 10;
		this.phase = 0;

		this.draw = function ( context ) {
			context.beginPath();
			context.translate( this.x_pos, this.y_pos );

			context.rotate( this.direction.y / 180 * Math.PI );
			context.scale( this.scale, this.scale );

			var gradient = context.createRadialGradient( 0, 0, 0, 0, 0, this.length );
			gradient.addColorStop( 0, "rgba(255, 250, 250, 1)" );
			gradient.addColorStop( 0.6, "rgba(255, 230, 230, 1)" );
			gradient.addColorStop( 1, "rgba(255, 150, 150, 0.4)" );
			context.fillStyle = gradient;
			context.shadowColor = "rgb(255, 255, 255)";
			context.shadowBlur = 15;

			var x_radi = Math.cos( this.direction.x * Math.PI / 180 );
			var z_radi = Math.cos( this.direction.z * Math.PI / 180 );
			context.moveTo( -6 * z_radi, -10 * x_radi );

			context.bezierCurveTo( -10 * z_radi, 0 * x_radi, -5 * z_radi,
					10 * x_radi, 0 * z_radi, 10 * x_radi );
			context.bezierCurveTo( 5 * z_radi, 10 * x_radi, 10 * z_radi,
					0 * x_radi, 6 * z_radi, -10 * x_radi );
			context.bezierCurveTo( 0 * z_radi, -10 * x_radi, 0 * z_radi,
					-7 * x_radi, 0 * z_radi, -5 * x_radi );
			context.bezierCurveTo( 0 * z_radi, -7 * x_radi, 0 * z_radi,
					-10 * x_radi, -6 * z_radi, -10 * x_radi );
			context.fill();

			return this.movePetals();
		};
		this.movePetals = function () {
			var move_y;
			if ( this.phase === 0 ) {
				var ground = 0.8 + this.scale / 10;
				if ( this.y_pos > PetalCanvas.height * ground ) {
					this.gr = 0;
					this.wind = 0;
					this.rotate.x = 0;
					this.rotate.y = 0;
					this.rotate.z = 0;
					this.phase = 1;
					fallenPetals++;
				}
			} else if ( this.phase === 2 ) {
				if ( this.gr > -3 ) this.gr += this.gr / 10;
				move_y = this.gr * this.scale;
			}
			this.y_pos = this.y_pos + this.gr * this.scale;
			this.x_pos = this.x_pos + this.wind;
			this.direction.x += this.rotate.x;
			this.direction.y += this.rotate.y;
			this.direction.z += this.rotate.z;

			if ( this.x_pos > PetalCanvas.width ) return true;
			return this.y_pos > PetalCanvas.height ? true : false;
		};

		this.floatPetal = function () {
			if ( this.phase === 3 ) {
				this.gr = -Math.random();
				this.wind = random( 15 ) + 5;
				this.rotate.x = random( 10 ) + 15;
				this.rotate.y = random( 10 ) + 15;
				this.rotate.z = random( 10 ) + 15;
				this.phase = 2;
			}
		};
		this.callback = function () {
		};
	}
} );

