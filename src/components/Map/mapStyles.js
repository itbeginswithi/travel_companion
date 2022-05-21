const mapStyles = [   
{
    featureType: 'road',
    elementType: 'labels',
    stylers: [
        {
        visibility: 'off',
        },
    ],
    },
    {
    featureType: 'transit',
    elementType: 'labels',
    stylers: [
        {
        visibility: 'off',
        },
    ],
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-5"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "21"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "1"
            },
            {
                "color": "#eae2d3"
            },
            {
                "lightness": "20"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "39"
            },
            {
                "lightness": "7"
            },
            {
                "gamma": "1.06"
            },
            {
                "visibility": "on"
            },
            {
                "hue": "#00b8ff"
            },
            {
                "weight": "1.44"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "100"
            },
            {
                "weight": "1.16"
            },
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-16"
            },
            {
                "lightness": "28"
            },
            {
                "gamma": "0.87"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-75"
            },
            {
                "lightness": "-15"
            },
            {
                "gamma": "1.35"
            },
            {
                "weight": "1.45"
            },
            {
                "hue": "#00dcff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#626262"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "19"
            },
            {
                "weight": "1.84"
            }
        ]
    }
]

export default mapStyles;