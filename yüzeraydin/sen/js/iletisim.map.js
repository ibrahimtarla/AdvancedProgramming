//var maps_styles =[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]

var maps_styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#008eff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-60"
            },
            {
                "lightness": "-20"
            }
        ]
    }
]

var markers = [];

	function initialize() {
			
		
		var locations = [
			['<div style="display:block; background: url(/assets/images/map-pin.png) scroll no-repeat left top; width:174px; height:197px; margin:0 0 0 0;"></div>', 	41.000608149958836, 29.055191011932166, 1]
		];
		
		var wWidth = $(window).width();
//		console.log(wWidth);
		
		if (wWidth < 737) {
			var pin = [
				"/assets/images/map-pin.png"
			];
			var zoom = 14; // mobile
		} else {
			var pin = [
				"/assets/images/map-pin.png"
			];
			var zoom = 14; // mobile
		}

		var map = new google.maps.Map(document.getElementById('google-map'), {
			zoom: zoom,
			center: new google.maps.LatLng(41.000608149958836, 29.055191011932166),
			scrollwheel: false,
			zoomControl: true,
			mapTypeControl: true,
			disableDefaultUI: true,
			styles: maps_styles,
			draggable: true,
		});
		
		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				animation: google.maps.Animation.DROP,
				map: map,
				url: "https://www.google.com/maps/dir/Current+Location/" + locations[i][1] + ", " + locations[i][2],
				icon: pin[i]
			});
			
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  window.open(this.url,"_blank");
				}
			})(marker, i));
		};
		
	}
						
	// google.maps.event.addDomListener(window, 'resize', initialize);
	// google.maps.event.addDomListener(window, 'load', initialize);
	//
	// $(document).ready(function() {
	// 	$(window).height();
	// 	$('.map-content').height($(window).height()-275);
	// })
	
	
	
	

