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
		"color": "636363",
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "707070"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "707070",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"radius": 5.8,
			"invMass": 1.5,
			"pos": [
				0,
				0
			],
			"color": "FFCC00",
			"bCoef": 0.4,
			"cGroup": [
				"ball",
				"kick",
				"score"
			]
		},
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
			"y": -350
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
			"y": 350
		}
	],
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.2,
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
	"ballPhysics": "disc0",
	"joints": []
}`

const webhook = 'https://discord.com/api/webhooks/1170019949994065991/lXgoJHmR6rtK17ts8m-1Nc5aKN2XlCY6pA3HQBZndul4u2STw-771UDEqmI_Wa5vur-i'
const webhookadmin = 'https://discord.com/api/webhooks/1198548945987711006/K_CwYfQ0xJFG7h1smqsWzPZGTuHI2Fr5fMNAGv4CXTMGePlgi-xOQnjETwfc5fEWuPaz'

// ---------- ROOM CONFIG ----------

geo = {'code': 'gb', 'lat': 50, 'lon': 0}
var room = HBInit({
	roomName: 'SPL | Futsal 5v5 | Private Room 1',
	maxPlayers: 30,
	noPlayer: true, // remove host player
	token: 'thr1.AAAAAGWs2geCrkbmkrGiBQ.sahzSxmXw8o',
	public: false,
	geo
});	

const claimCode = Math.round(Math.random() * (9999 - 1000) + 1000);

room.setCustomStadium(official)
room.setScoreLimit(0)
room.setTimeLimit(10)
room.setPassword('SPL')
roomName = 'SPL Private Room'

// ---------- END OF ROOM CONFIG ----------

// ---------- CLASSES ----------

let welcomeColour = 0xCBB8A9;
let announcementColour = 0xE0AED0;
let infoColour = 0xAC87C5;
let privateMessageColour = 0xffc933;
let redColour = 0xff4c4c;
let blueColour = 0x62cbff;
let warningColour = 0xffa135;
let errorColour = 0xa40000;
let successColour = 0x75ff75;
let defaultColour = null;

function playerChat(player, message) {
    let msgArray = message.split(/ +/);
    let playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Invalid player, make sure the name you entered is correct.`,
            player.id,
            errorColour,
            'bold',
            null
        );
        return false;
    }
    let playerTarget = playersAll[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `You can't send a PM to yourself!`,
            player.id,
            errorColour,
            'bold',
            null
        );
        return false;
    }
    let messageFrom = `📝 [PM with ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    let messageTo = `📝 [PM with ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColour,
        'bold'
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColour,
        'bold'
    );
}

class team {
	constructor(name) {
		this.teamName = name
	}

	setHomeKit(coloursNumber, angle, avatarColour, colour1, colour2, colour3) {
		let coloursArray = []
		for (let i = 0; i < coloursNumber; i++) {
			coloursArray.push(eval(`colour${i+1}`))
		}
		room.setTeamColors(1, angle, avatarColour, coloursArray)
	}

	setAwayKit(coloursNumber, angle, avatarColour, colour1, colour2, colour3) {
		let coloursArray = []
		for (let i = 0; i < coloursNumber; i++) {
			coloursArray.push(eval(`colour${i+1}`))
		}
		room.setTeamColors(2, angle, avatarColour, coloursArray)
	}
}

let cardsArray = []

class playerStats {
	constructor(playerName) {
		this.playerName = playerName
		this.goals = 0
		this.assists = 0
		this.kicks = 0
	}
}

// ---------- END OF CLASSES ----------

// ---------- VARS ----------

let goalContributers = []
let poss = [0, 0]
let touches = [0, 0]
let goals = [0, 0]
let redTeamPlayers = []
let blueTeamPlayers = []
let specs = []
let teams = []
let offi = [false, 1] //isStarted, currentHalf

const def3Mess = false;

//3def system
let teamRed = [];
let teamBlue = [];
let teamSpec = [];
let redLine = -380;
let blueLine = 380;
let maxDefenders = 3;
let redDefenders = [];
let blueDefenders = [];
let attackers = [[], []];
let playerRadius = 15

function handleDef() {
let oldDefenders = [JSON.stringify(redDefenders.map((p) => p.id)), JSON.stringify(blueDefenders.map((p) => p.id))];
redDefenders = redDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 1);
blueDefenders = blueDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 2);
if (oldDefenders[0] != JSON.stringify(redDefenders.map((p) => p.id)) && redDefenders.length < maxDefenders) {
	for (let j = 0; j < attackers[0].length; j++) {
		room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
	}
}
if (oldDefenders[1] != JSON.stringify(blueDefenders.map((p) => p.id)) && blueDefenders.length < maxDefenders) {
	for (let j = 0; j < attackers[1].length; j++) {
		room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
	}
}
let arr = [[], []];
for (let i = 0; i < redTeamPlayers.length; i++) {
	if (redTeamPlayers[i].position !== null && redTeamPlayers[i].position.x <= redLine + playerRadius - 0.01) {
		if (redDefenders.find(a => a.id == redTeamPlayers[i].id) === undefined) {
			arr[0].push(redTeamPlayers[i]);
		}
	}
	else {
		if (redDefenders.find(a => a.id == redTeamPlayers[i].id) !== undefined) {
			redDefenders = redDefenders.filter(a => a.id !== redTeamPlayers[i].id);
			if (redDefenders.length < maxDefenders) {
				for (let j = 0; j < attackers[0].length; j++) {
					room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
					if(def3Mess) {
						room.sendAnnouncement(
							`[3def system] now you can join the defense`,
							attackers[0][j].id,
							0xf53131,
							'normal',
							null
						);
					}
				}
			}
		}
	}
}
arr[0].sort((a, b) => a.position.x - b.position.x);
for (let i = 0; i < arr[0].length; i++) {
	if (redDefenders.length < maxDefenders) {
		redDefenders.push(arr[0][i]);
		if (redDefenders.length === maxDefenders) {
			attackers[0] = redTeamPlayers.filter(a => !redDefenders.map(b => b.id).includes(a.id));
			attackers[0].forEach(a => {
				room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.red | room.CollisionFlags.c0 });
				if(def3Mess) {
					room.sendAnnouncement(
						`[3def system] go attack`,
						a.id,
						0xf53131,
						'normal',
						null
					);
				}
			});
			break;
		}
	}
}
for (let i = 0; i < blueTeamPlayers.length; i++) {
	if (blueTeamPlayers[i].position !== null && blueTeamPlayers[i].position.x >= blueLine - playerRadius + 0.01) {
		if (blueDefenders.find(a => a.id == blueTeamPlayers[i].id) === undefined) {
			arr[1].push(blueTeamPlayers[i]);
		}
	}
	else {
		if (blueDefenders.find(a => a.id == blueTeamPlayers[i].id) !== undefined) {
			blueDefenders = blueDefenders.filter(a => a.id !== blueTeamPlayers[i].id);
			if (blueDefenders.length < maxDefenders) {
				for (let j = 0; j < attackers[1].length; j++) {
					room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
					if(def3Mess) {
						room.sendAnnouncement(
							`[3def system] now you can join the defense`,
							attackers[1][j].id,
							0x283fed,
							'normal',
							null
						);
					}
				}
			}
		}
	}
}
arr[1].sort((a, b) => a.position.x - b.position.x);
for (let i = 0; i < arr[1].length; i++) {
	if (blueDefenders.length < maxDefenders) {
		blueDefenders.push(arr[1][i]);
		if (blueDefenders.length === maxDefenders) {
			attackers[1] = blueTeamPlayers.filter(a => !blueDefenders.map(b => b.id).includes(a.id));
			attackers[1].forEach(a => {
				room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.blue | room.CollisionFlags.c1 });
				if(def3Mess) {
					room.sendAnnouncement(
						`[3def system] go attack`,
						a.id,
						0x283fed,
						'normal',
						null
					);
				}
			});
			break;
		}
	}
}
}

function handleTouch(player) {
	if (goalContributers.length <= 0) {
		goalContributers.push(player)
	} else if (goalContributers[goalContributers.length - 1] != undefined) {
		if (goalContributers[goalContributers.length - 1].id != player.id) {
			goalContributers.push(player)
		}
	}
	player.team == 1 ? touches[0]++ : touches[1]++
}

function getLastTouch() {
	for (let i = 0; i < room.getPlayerList().length; i++) {
		let playerPos = room.getPlayerList()[i].position
		let ballPos = room.getBallPosition()
		let player = room.getPlayerList()[i]
		let triggerValue = 20.9
		if (playerPos != null) {
			if (Math.sqrt(Math.pow(playerPos.x - ballPos.x, 2) + Math.pow(playerPos.y - ballPos.y, 2)) < triggerValue) {
				handleTouch(player)
			}
		}
	}
}

room.onPlayerBallKick = function(player) {
	handleTouch(player)
}

room.onPlayerJoin = function(player) {
	cardsArray[player.id] = 0
	room.sendAnnouncement(
        `👋 Welcome to the SPL ${player.name}!`,
        player.id,
        welcomeColour,
        'bold'
    );
}

// KITS
let OLS = [2, 180, 0x000000, 0xFFE630, 0x2A4E99, null, 1, 90, 0x00CCFF, 0x001B33, null, null]
let FTN = [3, 180, 0xFFFFFF, 0x025492, 0x0368B5, 0x025492, 3, 0, 0xAD9967, 0xFFFFFF, 0xF5F5F5, 0xFFFFFF]
let CMT = [2, 75, 0x000000, 0x5F059C, 0xF7F7F7, null, 2, 75, 0x000000, 0x5F059C, 0xF7F7F7, null]
let EFC = [3, 20, 0xFFFFFF, 0x14A2A4, 0x3FB885, 0x6ACF64, 3, 20, 0xFFFFFF, 0xFFAC30, 0xFF893B, 0xF25607]
let CNT = [3, 90, 0x000000, 0xFFFFFF, 0xFF0000, 0xFFFFFF, 2, 60, 0xFFFFFF, 0x8C0808, 0xFF0000, null]
let ARS = [3, 58, 0xFFF952, 0x850000, 0x000000, 0x850000, 3, 58, 0xF8FF21, 0x871875, 0x0A0808, 0x871875]
let ACS = [3, 0, 0xFFFFFF, 0x000000, 0xFF0505, 0x000000, 3, 0, 0x000000, 0xFFFFFF, 0xFF0505, 0xFFFFFF]
let KAM = [3, 90, 0xEDEDED, 0xBC0900, 0x0D7311, null, 1, 0, 0x94AD8C, 0xE7F0E6, null, null]
let ARD = [2, 21, 0xFFFFFF, 0xC300FF, 0x3F0077, null, 3, 0, 0x050505, 0x878787, 0xFFFFFF, 0x878787]
let ZRT = [1, 0, 0xFFFFFF, 0xD6755D, null, null, 1, 0, 0xFFFFFF, 0x6188DE, null, null]

let availableHomeKits = ['OLS', 'FTN', 'CMT', 'EFC', 'CNT', 'ARS', 'ACS', 'KAM', 'ARD', 'ZRT']
let availableAwayKits = ['OLS', 'FTN', 'CMT', 'EFC', 'CNT', 'ARS', 'ACS', 'KAM', 'ARD', 'ZRT']

// ---------- END OF VARS ----------

room.onGameTick = function() {
	getLastTouch()
	// handleDef()
}

room.onPlayerChat = function(player, message) {

	if (message.charAt(0) == '@' && message.charAt(1) == '@') {
        playerChat(player, message);
        return false;
    }

if (message == '!start offi') {
	offi[0] = true
	offi[1] = 1
}

//chat censorsihip 😔
const forbiddenWords = ['reggan', 'negro', 'n1gga', 'jigga', 'fag', 'cunt', 'nigga', 'nigger', 'niga', 'niger', 'nlga', 'nlgga', 'nlger', 'nlgger', 'retard', 'retarded', 'chink', 'coon', 'faggot', 'hitler', 'nibba', 'paki', 'soccer', 'wigan', 'jew', 'jewish', 'nig', 'nigg', 'niglet', 'reggin', 'wetback', 'beaner', 'fag', 'slope', 'porn', 'sex']

for (let i = 0; i < forbiddenWords.length; i++) {
	if (message.toLowerCase().includes(forbiddenWords[i])) {
		console.warn(cardsArray)
		if (cardsArray[player.id] < 2) {
			cardsArray[player.id] = cardsArray[player.id] + 1
			if (cardsArray[player.id] == 1) {
				room.sendAnnouncement(`🟨 ${player.name} gets yellow card for saying a banned word!`, null, warningColour, 'bold')
			}
		} if (cardsArray[player.id] == 2) {
			room.sendAnnouncement(`🟥 ${player.name} gets a red card for saying two banned words!`, null, warningColour, 'bold')
			room.setPlayerTeam(player.id, 0)
		}
		return false
	}
}

if (message.split(' ')[0] == '!claim') {	
	if (message.split(' ')[1] == claimCode.toString() && message.split(' ').length == 2) {
		room.setPlayerAdmin(player.id, true)
	}
}

if (message == '!swap' && player.admin == true) {
	var players = room.getPlayerList()
	for (let i = 0; i < players.length; i++) {
		if (players[i].team == 1) {
			room.setPlayerTeam(players[i].id, 2)
		}
		if (players[i].team == 2) {
			room.setPlayerTeam(players[i].id, 1)
		}
	}
	if (teams[1] == undefined || teams[1] == null || teams[0] == undefined || teams[0] == null) {
		room.sendAnnouncement('Can\'t swap kits becuase one of them is not defined, make sure to define them with the !set home/away team command', player.id, 0xFF0000, 'bold')
	} else {
		let vario = eval(teams[1].teamName)
		teams[0].setHomeKit(vario[6], vario[7], vario[8], vario[9], vario[10], vario[11])
		
		let vari = eval(teams[0].teamName)
		teams[1].setAwayKit(vari[0], vari[1], vari[2], vari[3], vari[4], vari[5])
	}
}

// if (message.includes('!set map') && message.split(' ').length == 3) {
// 	maps = ['official', 'big', 'small', 'ultrasmall', 'medium']
// 	if (maps.includes(message.split(' ')[2])) {
// 		room.setCustomStadium(eval(message.split(' ')[2]))
// 	} else {
// 		room.sendAnnouncement('😔 | Only those stadiums exist:\n\'official\', \'big\', \'small\', \'ultrasmall\', \'medium\'', player.id, 0xFF0000, 'bold')
// 	}
// }

if (message.includes('!set home team') && message.split(' ').length == 4) {
	const output = message.split(' ')
	if (availableHomeKits.includes(output[3])) {
		let vari = eval(output[3])
		teams[0] = new team(output[3])
		teams[0].setHomeKit(vari[0], vari[1], vari[2], vari[3], vari[4], vari[5])
	} else {
		room.sendAnnouncement('😔 | I don\'t have those kits cuh', player.id, 0xFF0000, 'bold')
	}
}

if (message.includes('!set away team') && message.split(' ').length == 4) {
	const output = message.split(' ')
	if (availableAwayKits.includes(output[3])) {
		let vari = eval(output[3])
		teams[1] = new team(output[3])
		teams[1].setAwayKit(vari[6], vari[7], vari[7], vari[9], vari[10], vari[11])
	} else {
		room.sendAnnouncement('😔 | I don\'t have those kits cuh', player.id, 0xFF0000, 'bold')
	}
}

if (message == '!bb') {
	room.kickPlayer(player.id, 'goodbye, now join the discord: https://discord.gg/cx9WWA84dv')
}

if (message == '!discord') {
	room.sendAnnouncement('join our discord server here: https://discord.gg/cx9WWA84dv')
}

if (message.charAt(0) == '!') {
	return false
}

if (message == '!clear bans' && player.admin == true) {
	room.clearBans()
}

if (message.charAt(0) == 't' && message.charAt(1) == ' ') {
	if (player.team == 1) {
		for (let i = 0; i < redTeamPlayers.length; i++) {
			room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), redTeamPlayers[i].id, 0xDB1604, 'bold')
		}
	}
	if (player.team == 2) {
		for (let i = 0; i < blueTeamPlayers.length; i++) {
			room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), blueTeamPlayers[i].id, 0x00A2FF, 'bold')
		}
	}
	if (player.team == 0) {
		for (let i = 0; i < specs.length; i++) {
			room.sendAnnouncement('[team] ' + player.name + ':' + message.substring(1), blueTeamPlayers[i].id, 0xFFFFFF, 'bold')
		}
	}
	return false
}
}

room.onPlayerTeamChange = function(changedPlayer) {
cardsArray[changedPlayer.id] == 0
redTeamPlayers = []
blueTeamPlayers = []
specs = []
for (let i = 0; i < room.getPlayerList().length; i++) {
	if (room.getPlayerList()[i].team == 1) {
		redTeamPlayers.push(room.getPlayerList()[i])
		// redTeamPlayers.push(new playerStats(room.getPlayerList()[i].name, 0, 0, 0))
	}
	if (room.getPlayerList()[i].team == 2) {
		blueTeamPlayers.push(room.getPlayerList()[i])
		// blueTeamPlayers.push(new playerStats(room.getPlayerList()[i].name, 0, 0, 0))
	}
	if (room.getPlayerList()[i].team == 0) {
		specs.push(room.getPlayerList()[i])
		// blueTeamPlayers.push(new playerStats(room.getPlayerList()[i].name, 0, 0, 0))
	}
}
}

room.onGameStart = function() {
poss = [0, 0]
touches = [0, 0]
goals = [0, 0]
}

room.onGameStop = function() {
cardsArray = []
let totalPoss = touches[0] + touches[1]
poss = [(touches[0] * 100) / totalPoss, (touches[1] * 100) / totalPoss]
let getString = `💯 | SCORE:\nred: ${goals[0]} | blue: ${goals[1]}\n📊 | POSSESSION:\nred: ${Math.round(poss[0])}% | blue: ${Math.round(poss[1])}%\n⚽️ | KICKS:\nred: ${touches[0]} | blue: ${touches[1]}`
room.sendAnnouncement(`${getString}`, null, 0xFFFFF00, 'bold')
goals[0] == 0 ? room.sendAnnouncement('🥅 | The BLUE goalkeeper kept a clean sheet!', null, 0xFFFFF00, 'bold') : {}
goals[1] == 0 ? room.sendAnnouncement('🥅 | The RED goalkeeper kept a clean sheet!', null, 0xFFFFF00, 'bold') : {}
const msg = {
	"content": null,
	"embeds": [
		{
		"title": 'Half time/Game over!',
		"description": `${getString}`,
		"color": 5814783
		}
	],
	"attachments": []
}
fetch(webhook,
	{'method': 'POST',
	'headers': {'content-type': 'application/json'},
	'body': JSON.stringify(msg)})
}

function playerAvatar(id,avatarStart,avatarStop,timeout){
	room.setPlayerAvatar(id,avatarStart);
	setTimeout(function(){
        room.setPlayerAvatar(id,avatarStop);
    }, timeout);
}

let goalTimeout = 4000;

room.onTeamGoal = function(team) {

room.setDiscProperties(0, {color: 0xFF0000});

let ownGoal = false
if (goalContributers.length < 2|| goalContributers[goalContributers.length - 2].team != goalContributers[goalContributers.length - 1].team) {
	if (goalContributers[goalContributers.length - 1].team == team) {
		room.sendAnnouncement(`⚽️ Goal by ${goalContributers[goalContributers.length - 1].name}!`, null, team == 1 ? redColour : blueColour, 'bold')
		playerAvatar(goalContributers[goalContributers.length - 1].id, '⚽️', null, goalTimeout)
	} else {
		room.sendAnnouncement(`😂 Own goal by ${goalContributers[goalContributers.length - 1].name}!`, null, team == 1 ? redColour : blueColour, 'bold')
		playerAvatar(goalContributers[goalContributers.length - 1].id, '💀', null, goalTimeout)
		ownGoal = true
	}
} else {
	if (goalContributers[goalContributers.length - 1].team == team) {
		room.sendAnnouncement(`⚽️ Goal by ${goalContributers[goalContributers.length - 1].name}! Assist by ${goalContributers[goalContributers.length - 2].name}.`, null, team == 1 ? redColour : blueColour,   'bold')
		playerAvatar(goalContributers[goalContributers.length - 1].id, '⚽️', null, goalTimeout)
		playerAvatar(goalContributers[goalContributers.length - 2].id, '👟', null, goalTimeout)
	} else {
		room.sendAnnouncement(`😂 Own goal by ${goalContributers[goalContributers.length - 1].name}!`, null, team == 1 ? redColour : blueColour, 'bold')
		playerAvatar(goalContributers[goalContributers.length - 1].id, '💀', null, goalTimeout)
		ownGoal = true
	}
}
team == 1 ? goals[0]++ : goals[1]++
let goalType = ''
ownGoal ? goalType = 'Own goal' : goalType = 'Goal'
const msg = {
	"content": null,
	"embeds": [
		{
		"title": 'Goal!',
		"description": `⚽ | ${goalType} by ${goalContributers[goalContributers.length - 1].name}!\n📊 | Score is red ${room.getScores().red} - ${room.getScores().blue} blue\n🕙 | Minute ${(room.getScores().time / 60).toFixed(2)} of the game`,
		"color": 5814783
		}
	],
	"attachments": []
}
fetch(webhook,
	{'method': 'POST',
	'headers': {'content-type': 'application/json'},
	'body': JSON.stringify(msg)})

goalContributers = []
}

room.onRoomLink = function(link) {
	console.log(link)
	console.log(claimCode)
	const msg = {
		'content': `Private room link: ${link}\nAdmin code: ${claimCode}`,
		'embeds': null,
		'attachments': []
	}
	fetch(webhookadmin,
		{'method': 'POST',
		'headers': {'content-type': 'application/json'},
		'body': JSON.stringify(msg)})
	}
