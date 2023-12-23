let official = `{
	"name": "SPL official map",
	"width": 765,
	"height": 350,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "261438",
		"height": 320,
		"width": 700
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -360,
			"y": -350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": -360,
			"y": 350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": 360,
			"y": -350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": 360,
			"y": 350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": -698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": -625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": -500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": -698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 380,
			"y": 318.5,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 380,
			"y": -318.5,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": -380,
			"y": 318.5,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": -380,
			"y": -318.5,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": -380,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": -380,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 380,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 380,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -320
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 320
		},
		{
			"v0": 4,
			"v1": 5,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 6,
			"v1": 7,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 8,
			"v1": 9,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 10,
			"v1": 11,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"x": -735
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 735
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 22,
			"v1": 23,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 24,
			"v1": 25,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -700
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 700
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 36,
			"v1": 37,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -625
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 625
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 45,
			"v1": 44,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 47,
			"v1": 46,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 48,
			"v1": 49,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 66,
			"v1": 67,
			"color": "902cc9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 68,
			"v1": 69,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 70,
			"v1": 71,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 72,
			"v1": 73,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"x": 380
		},
		{
			"v0": 74,
			"v1": 75,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"x": -380
		},
		{
			"v0": 76,
			"v1": 77,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 78,
			"v1": 79,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 80,
			"v1": 81,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": -380
		},
		{
			"v0": 82,
			"v1": 83,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 84,
			"v1": 85,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 86,
			"v1": 87,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 380
		}
	],
	"goals": [
		{
			"p0": [
				-705.8,
				-85
			],
			"p1": [
				-705.8,
				85
			],
			"team": "red"
		},
		{
			"p0": [
				705.8,
				-85
			],
			"p1": [
				705.8,
				85
			],
			"team": "blue"
		}
	],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": -350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -350,
					"canvas_rect": [
						-446.3701523755323,
						-204.22163834174683,
						446.3701523755323,
						204.22163834174683
					],
					"a": [
						-446.3701523755323,
						-350
					],
					"b": [
						446.3701523755323,
						-350
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": 350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -350,
					"canvas_rect": [
						-446.3701523755323,
						-204.22163834174683,
						446.3701523755323,
						204.22163834174683
					],
					"a": [
						-446.3701523755323,
						350
					],
					"b": [
						446.3701523755323,
						350
					]
				}
			}
		}
	],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545,
		"radius": 15,
		"invMass": 0.5,
		"damping": 0.96,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickingDamping": 0.96,
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFFFFF",
		"cMask": [
			"all"
		],
		"damping": 0.99,
		"gravity": [
			0,
			0
		],
		"cGroup": [
			"ball"
		]
	},
	"joints": []
}`
let warmup = `{
	"name": "SPL warm up",
	"width": 765,
	"height": 350,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "261438",
		"height": 320,
		"width": 700
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 701,
			"y": -320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 701,
			"y": 320,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": 321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 700,
			"y": -321,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 735,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 735,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 736,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 700,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 700,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 700,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC",
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -360,
			"y": -350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": -360,
			"y": 350,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": 360,
			"y": -350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": 360,
			"y": 350,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9",
			"vis": false
		},
		{
			"x": -698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": -625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 625,
			"y": -126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 625,
			"y": 126,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 624,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 698.5,
			"y": -125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 624,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 698.5,
			"y": 125,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": -500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": -500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 500,
			"y": 2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 500,
			"y": -2.5,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"curve": 180,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 350,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": -698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 698,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 702,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 318.5,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 380,
			"y": 318.5,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 380,
			"y": -318.5,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": -380,
			"y": 318.5,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": -380,
			"y": -318.5,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": -380,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": -380,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 380,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 380,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -320
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 320
		},
		{
			"v0": 4,
			"v1": 5,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 6,
			"v1": 7,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 8,
			"v1": 9,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"x": -700
		},
		{
			"v0": 10,
			"v1": 11,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"x": 700
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"x": -735
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 735
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 22,
			"v1": 23,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 24,
			"v1": 25,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -700
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 700,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						700,
						-85
					],
					"b": [
						700,
						85
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 36,
			"v1": 37,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -625
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 625
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": -125
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"y": 125
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 45,
			"v1": 44,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 47,
			"v1": 46,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"color": "902cc9",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 500
		},
		{
			"v0": 48,
			"v1": 49,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": false,
			"color": "818FB0",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 66,
			"v1": 67,
			"color": "902cc9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 68,
			"v1": 69,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 70,
			"v1": 71,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 72,
			"v1": 73,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"wall"
			],
			"x": 380
		},
		{
			"v0": 74,
			"v1": 75,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"wall"
			],
			"x": -380
		},
		{
			"v0": 76,
			"v1": 77,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 78,
			"v1": 79,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 80,
			"v1": 81,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": -380
		},
		{
			"v0": 82,
			"v1": 83,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 84,
			"v1": 85,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 86,
			"v1": 87,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 380
		}
	],
	"goals": [],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				700,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": -350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -350,
					"canvas_rect": [
						-562.2978373892867,
						-257.26044847875863,
						562.2978373892867,
						257.26044847875863
					],
					"a": [
						-562.2978373892867,
						-350
					],
					"b": [
						562.2978373892867,
						-350
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -350,
			"cMask": [
				"red",
				"blue"
			],
			"y": 350,
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -350,
					"canvas_rect": [
						-562.2978373892867,
						-257.26044847875863,
						562.2978373892867,
						257.26044847875863
					],
					"a": [
						-562.2978373892867,
						350
					],
					"b": [
						562.2978373892867,
						350
					]
				}
			}
		}
	],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545,
		"radius": 15,
		"invMass": 0.5,
		"damping": 0.96,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickingDamping": 0.96,
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFFFFF",
		"cMask": [
			"all"
		],
		"damping": 0.99,
		"gravity": [
			0,
			0
		],
		"cGroup": [
			"ball"
		]
	},
	"joints": []
}`
let onevone = `{
	"name": "SPL official map",
	"width": 420,
	"height": 200,
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"spawnDistance": 150,
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "full",
	"bg": {
		"color": "261438",
		"height": 320,
		"width": 700
	},
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"vertexes": [
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": 418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": 10,
			"vis": true
		},
		{
			"x": -453,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -418,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "ff6666"
		},
		{
			"x": -453,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -418,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -453,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": -453,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "ff6666"
		},
		{
			"x": 453,
			"y": -86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 453,
			"y": 86,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 453,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 418,
			"y": -85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"color": "6666ff"
		},
		{
			"x": 453,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": 418,
			"y": 85,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"color": "6666ff"
		},
		{
			"x": -418,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": -418,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 418,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 418,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "DCDCDC"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": false,
			"color": "818FB0"
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"color": "818FB0",
			"vis": false
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "902cc9"
		},
		{
			"x": -418,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": -418,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 418,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 418,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 418,
			"y": -85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 418,
			"y": 85,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "454C5E",
			"curve": 0
		},
		{
			"x": 0,
			"y": -2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 2.5,
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 88,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"vis": true,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true
		},
		{
			"x": -418,
			"y": -150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": 150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "902cc9",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": 85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -85,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180
		},
		{
			"x": 418,
			"y": 150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 418,
			"y": -150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "902cc9",
			"vis": true,
			"curve": 180,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": -418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true
		},
		{
			"x": 418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 418,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": -200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 0,
			"y": -201.85185185185185,
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": -85,
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 0,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"curve": 0,
			"color": "902cc9"
		},
		{
			"x": 418,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": 200,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -418,
			"y": 85,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"color": "151a1e",
			"bias": -10,
			"vis": true,
			"_data": {
				"mirror": {}
			}
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200
		},
		{
			"v0": 2,
			"v1": 3,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": 10,
			"y": 200
		},
		{
			"v0": 4,
			"v1": 5,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10
		},
		{
			"v0": 6,
			"v1": 7,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"y": 70
		},
		{
			"v0": 8,
			"v1": 9,
			"color": "ff6666",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10,
			"x": -453
		},
		{
			"v0": 10,
			"v1": 11,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"x": 453
		},
		{
			"v0": 12,
			"v1": 13,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": 10
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "6666ff",
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"bias": -10,
			"y": 70
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": -418
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "DCDCDC",
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			],
			"x": 418
		},
		{
			"v0": 22,
			"v1": 23,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 34,
			"v1": 35,
			"color": "902cc9",
			"bCoef": 0.75,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"wall"
			]
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": 0
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"x": -418,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-418,
						-150
					],
					"b": [
						-418,
						150
					],
					"curve": 180,
					"radius": 150,
					"center": [
						-418,
						0
					],
					"from": -1.5707963267948966,
					"to": 1.5707963267948966
				}
			}
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 0
		},
		{
			"v0": 48,
			"v1": 49,
			"curve": 180,
			"vis": true,
			"color": "902cc9",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"x": 380,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						418,
						150
					],
					"b": [
						418,
						-150
					],
					"curve": 180,
					"radius": 150,
					"center": [
						418,
						0
					],
					"from": 1.5707963267948966,
					"to": -1.5707963267948966
				}
			}
		},
		{
			"v0": 50,
			"v1": 51,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200
		},
		{
			"v0": 61,
			"v1": 62,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200,
			"x": 418,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						418,
						-200
					],
					"b": [
						418,
						-85
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 63,
			"v1": 64,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200,
			"x": -418,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-418,
						-85
					],
					"b": [
						-418,
						-200
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 65,
			"v1": 66,
			"curve": 0,
			"vis": true,
			"color": "902cc9",
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			]
		},
		{
			"v0": 67,
			"v1": 68,
			"curve": 0,
			"vis": true,
			"color": "902cc9",
			"bCoef": 1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			]
		},
		{
			"v0": 69,
			"v1": 70,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200,
			"x": 418,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						418,
						85
					],
					"b": [
						418,
						200
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 71,
			"v1": 72,
			"vis": true,
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"bias": -10,
			"y": -200,
			"x": -418,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-418,
						200
					],
					"b": [
						-418,
						85
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		}
	],
	"goals": [
		{
			"p0": [
				-422.8,
				-85
			],
			"p1": [
				-422.8,
				85
			],
			"team": "red"
		},
		{
			"p0": [
				422.8,
				-85
			],
			"p1": [
				422.8,
				85
			],
			"team": "blue",
			"_data": {
				"mirror": {}
			}
		}
	],
	"discs": [
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-418,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				-418,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				418,
				-85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		},
		{
			"radius": 5.4,
			"invMass": 0,
			"pos": [
				418,
				85
			],
			"color": "151a1e",
			"bCoef": 1,
			"cMask": [
				"all"
			],
			"cGroup": [
				"all"
			]
		}
	],
	"planes": [],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.545,
		"radius": 15,
		"invMass": 0.5,
		"damping": 0.96,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickingDamping": 0.96,
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 5.8,
		"bCoef": 0.412,
		"invMass": 1.5,
		"color": "FFFFFF",
		"cMask": [
			"all"
		],
		"damping": 0.99,
		"gravity": [
			0,
			0
		],
		"cGroup": [
			"ball"
		]
	},
	"joints": []
}`

// ---------- ROOM CONFIG ----------

var room = HBInit({
    roomName: 'Statville Premier League',
    maxPlayers: 16,
    noPlayer: true, // remove host player
    public: false
});

room.setCustomStadium(official)
room.setScoreLimit(3)
room.setTimeLimit(3)
room.setTeamsLock(true)

// ---------- ROOM CONFIG ----------

// ---------- VARS AND FUNCS ----------

let redTeamPlayers = []
let blueTeamPlayers = []
let playersNumber = 0
let admins = ['BOj3h2H8p9PDUEqbUoHMu9erqCxVYkEl3VC2pNGhhhY', 'SwBqGL0MnnYdIFWsYMbJa9-goTBmr_dcdoUsLn8htmA', 'hji0qRQWt_yTUKzrbNgGcjVxby6hwq-2ba8RAcNelpg'] //comrade, duck, bolton
//🔥💥🌟

let gameMode = 'warmup'

const updateTeams = () => {
    redTeamPlayers = []
    blueTeamPlayers = []
    specs = []
    for (let i = 0; i < room.getPlayerList().length; i++) {
        if (room.getPlayerList()[i].team == 1) {
            redTeamPlayers.push(room.getPlayerList()[i])
        }
        if (room.getPlayerList()[i].team == 2) {
            blueTeamPlayers.push(room.getPlayerList()[i])
        }
        if (room.getPlayerList()[i].team == 0) {
            specs.push(room.getPlayerList()[i])
        }
    }
}

const updateGameMode = (playersNum) => {
    if (playersNum <= 1) {
        gameMode = 'warmup'
        room.stopGame()
        room.setCustomStadium(warmup)
        room.setPlayerTeam(room.getPlayerList()[0].id, 1)
        room.sendAnnouncement('⚡️ 1 player in the room, warm up!', null, 0xFFFF00, 'bold')
        room.startGame()
    }
    if (playersNum == 2) {
        gameMode = '1v1NOSUB'
        room.stopGame()
        room.setCustomStadium(onevone)
        room.setPlayerTeam(room.getPlayerList()[0].id, 1)
        room.setPlayerTeam(room.getPlayerList()[1].id, 2)
        room.sendAnnouncement('🌟 2 players in the room, 1v1!', null, 0xFFFF00, 'bold')
        room.startGame()
    }
    if (playersNum == 3) {
        gameMode = '1v1SUB'
    }
    if (playersNum == 4 || playersNum == 6 || playersNum == 8) {
		room.stopGame()
        gameMode = 'NOSUB'
    }
    if (playersNum == 5 || playersNum == 7 || playersNum > 8) {
        gameMode = 'SUB'
    }
}

// ---------- VARS AND FUNCS ----------

room.onPlayerTeamChange = function(changedPlayer) {
    updateTeams()
}

room.onPlayerChat = function(player, message) {
    if (message == '!bb') {
        room.kickPlayer(player.id, 'goodbye, now join the discord: https://discord.gg/cx9WWA84dv')
    }

    if (message == '!discord') {
        room.sendAnnouncement('join our discord server here: https://discord.gg/cx9WWA84dv')
    }

    if (message.charAt(0) == '!') {
        return false
    }

    if (message.charAt(0) == 't' && message.charAt(1) == ' ') {
        if (player.team == 1) {
            for (let i = 0; i < redTeamPlayers.length; i++) {
                room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), redTeamPlayers[i].id, 0xD6755D, 'bold')
            }
        }
        if (player.team == 2) {
            for (let i = 0; i < blueTeamPlayers.length; i++) {
                room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), blueTeamPlayers[i].id, 0x00A2FF, 'bold')
            }
        }
        if (player.team == 0) {
            for (let i = 0; i < specs.length; i++) {
                room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), specs[i].id, 0xFFFFFF, 'bold')
            }
        }
        return false
    }
}

setInterval(() => {
    room.sendAnnouncement('Join our discord at: https://discord.gg/R5C8x43pcY', null, 0xFFFFFF, 'bold')
}, 170000);

room.onPlayerJoin = function(player) {
    updateTeams()
    playersNumber = room.getPlayerList().length
    updateGameMode(playersNumber)
	for (let i = 0; i < admins.length; i++) {
		if (player.auth == admins[i]) {
			room.setPlayerAdmin(player.id, true)
			room.sendAnnouncement(`Master ${player.name} has joined the room!`, null, 0xFFD700, 'bold')
		}
	}
}

room.onTeamVictory = function(scores) {
    if (gameMode == '1v1NOSUB') {
        if (scores.red > scores.blue) {
            room.stopGame()
            room.setPlayerTeam(redTeamPlayers[0].id, 1)
            room.setPlayerTeam(blueTeamPlayers[0].id, 2)
            room.startGame()
        }
        if (scores.red < scores.blue) {
            room.stopGame()
            room.setPlayerTeam(redTeamPlayers[0].id, 2)
            room.setPlayerTeam(blueTeamPlayers[0].id, 1)
            room.startGame()
        }
    }
    if (gameMode == '1v1SUB') {
        if (scores.red > scores.blue) {
            room.stopGame()
            room.setPlayerTeam(blueTeamPlayers[0].id, 0)
            room.setPlayerTeam(redTeamPlayers[0].id, 1)
            room.setPlayerTeam(specs[0].id, 2)
            room.startGame()
        }
        if (scores.red < scores.blue) {
            room.stopGame()
            room.setPlayerTeam(redTeamPlayers[0].id, 0)
            room.setPlayerTeam(specs[0].id, 2)
            room.setPlayerTeam(blueTeamPlayers[0].id, 1)
            room.startGame()
        }
    }
    if (gameMode == 'NOSUB') {
        const shuffledPlayerList = room.getPlayerList().sort((a, b) => 0.5 - Math.random());
        for (let i = 0; i < shuffledPlayerList.length; i++) {
            if (i <= 1) {
                room.setPlayerTeam(shuffledPlayerList.id, 1)
            }
            if (i > 1) {
                room.setPlayerTeam(shuffledPlayerList.id, 2)
            }
        }
    }
    if (gameMode == 'SUB') {
        if (scores.red > scores.blue) {
            room.stopGame()
            room.setPlayerTeam(blueTeamPlayers[0].id, 0)
            room.setPlayerTeam(redTeamPlayers[0].id, 1)
            room.setPlayerTeam(specs[0].id, 2)
            room.startGame()
        }
        if (scores.red < scores.blue) {
            room.stopGame()
            room.setPlayerTeam(redTeamPlayers[0].id, 0)
            room.setPlayerTeam(specs[0].id, 2)
            room.setPlayerTeam(blueTeamPlayers[0].id, 1)
            room.startGame()
        }
    }
}

let colours = [0xFFFFF, 0x000000, 0xFF0000]

room.onTeamGoal = function(team) {
	for (let i = 0; i < 100; i++) {
		room.setTeamColors(team, 60, 0xFFFFFF, [0])
		room.sendAnnouncement('e')
		setTimeout(() => {
			room.setTeamColors(team, 60, 0xFFFFFF, [1])
			room.sendAnnouncement('a')
		}, 100);
		setTimeout(() => {
			room.setTeamColors(team, 60, 0xFFFFFF, [2])
			room.sendAnnouncement('r')
		}, 2000);
	}
}

room.onPositionsReset = function() {
}

// room.onPlayerLeave = function() {
//     updateTeams()
//     playersNumber = room.getPlayerList().length
//     updateGameMode(playersNumber)
// }