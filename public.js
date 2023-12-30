let official = `{
	"name": "SPL 4v4",
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
		"color": "452f52",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"v0": 54,
			"v1": 55,
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
			"v0": 66,
			"v1": 67,
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
		"color": "FFD700",
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

	"name" : "SPL warm up",

	"width" : 420,

	"height" : 200,

	"cameraWidth" : 0,

	"cameraHeight" : 0,

	"maxViewWidth" : 0,

	"cameraFollow" : "ball",

	"spawnDistance" : 150,

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	],

	"canBeStored" : false,

	"kickOffReset" : "full",

	"bg" : { "color" : "452f52", "height" : 320, "width" : 700 },

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"vertexes" : [
		/* 0 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 1 */ { "x" : 418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 2 */ { "x" : -418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : 10, "vis" : true },
		/* 3 */ { "x" : 418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : 10, "vis" : true },
		/* 4 */ { "x" : -453, "y" : -85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "ff6666" },
		/* 5 */ { "x" : -418, "y" : -85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "ff6666" },
		/* 6 */ { "x" : -453, "y" : 85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "ff6666" },
		/* 7 */ { "x" : -418, "y" : 85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "ff6666" },
		/* 8 */ { "x" : -453, "y" : -86, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "ff6666" },
		/* 9 */ { "x" : -453, "y" : 86, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "ff6666" },
		/* 10 */ { "x" : 453, "y" : -86, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "6666ff" },
		/* 11 */ { "x" : 453, "y" : 86, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "6666ff" },
		/* 12 */ { "x" : 453, "y" : -85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "6666ff" },
		/* 13 */ { "x" : 418, "y" : -85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "color" : "6666ff" },
		/* 14 */ { "x" : 453, "y" : 85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "6666ff" },
		/* 15 */ { "x" : 418, "y" : 85, "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "color" : "6666ff" },
		/* 16 */ { "x" : -418, "y" : -85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "DCDCDC" },
		/* 17 */ { "x" : -418, "y" : 85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "DCDCDC" },
		/* 18 */ { "x" : 418, "y" : -85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "DCDCDC" },
		/* 19 */ { "x" : 418, "y" : 85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "DCDCDC" },
		/* 20 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false, "color" : "818FB0" },
		/* 21 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "818FB0", "vis" : false },
		/* 22 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 23 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 24 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 25 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 26 */ { "x" : 0, "y" : -86, "cMask" : ["wall" ], "cGroup" : ["c1" ], "color" : "5b00a3" },
		/* 27 */ { "x" : 0, "y" : 86, "cMask" : ["wall" ], "cGroup" : ["c1" ], "color" : "5b00a3" },
		/* 28 */ { "x" : -418, "y" : 85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 29 */ { "x" : -418, "y" : -85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 30 */ { "x" : 418, "y" : -85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 31 */ { "x" : 418, "y" : 85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 32 */ { "x" : 418, "y" : -85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 33 */ { "x" : 418, "y" : 85, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "454C5E", "curve" : 0 },
		/* 34 */ { "x" : 0, "y" : -2.5, "bCoef" : 0.75, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "5b00a3" },
		/* 35 */ { "x" : 0, "y" : 2.5, "bCoef" : 0.75, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "5b00a3" },
		/* 36 */ { "x" : 0, "y" : -88, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : true, "color" : "5b00a3" },
		/* 37 */ { "x" : 0, "y" : 88, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : true, "color" : "5b00a3" },
		/* 38 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 39 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 40 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 41 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 42 */ { "x" : -418, "y" : -150, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 43 */ { "x" : -418, "y" : 150, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "5b00a3", "vis" : true },
		/* 44 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 45 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 46 */ { "x" : 0, "y" : 85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 47 */ { "x" : 0, "y" : -85, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 48 */ { "x" : 418, "y" : 150, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 49 */ { "x" : 418, "y" : -150, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "5b00a3", "vis" : true, "curve" : 180 },
		/* 50 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 51 */ { "x" : 418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 52 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 53 */ { "x" : -418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 54 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 55 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 56 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 57 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 58 */ { "x" : -418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 59 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 60 */ { "x" : -418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 61 */ { "x" : 418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 62 */ { "x" : 418, "y" : -85, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 63 */ { "x" : -418, "y" : -85, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 64 */ { "x" : -418, "y" : -200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 65 */ { "x" : 0, "y" : -201.85185185185185, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0, "color" : "5b00a3" },
		/* 66 */ { "x" : 0, "y" : -85, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0, "color" : "5b00a3" },
		/* 67 */ { "x" : 0, "y" : 85, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0, "color" : "5b00a3" },
		/* 68 */ { "x" : 0, "y" : 200, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0, "color" : "5b00a3" },
		/* 69 */ { "x" : 418, "y" : 85, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 70 */ { "x" : 418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 71 */ { "x" : -418, "y" : 200, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true },
		/* 72 */ { "x" : -418, "y" : 85, "bCoef" : 1, "cMask" : ["ball" ], "color" : "151a1e", "bias" : -10, "vis" : true }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200 },
		{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : 10, "y" : 200 },
		{ "v0" : 4, "v1" : 5, "color" : "ff6666", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10 },
		{ "v0" : 6, "v1" : 7, "color" : "ff6666", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "y" : 70 },
		{ "v0" : 8, "v1" : 9, "color" : "ff6666", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10, "x" : -453 },
		{ "v0" : 10, "v1" : 11, "color" : "6666ff", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "x" : 453 },
		{ "v0" : 12, "v1" : 13, "color" : "6666ff", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : 10 },
		{ "v0" : 14, "v1" : 15, "color" : "6666ff", "bCoef" : 1.7, "cMask" : ["ball" ], "cGroup" : ["ball" ], "bias" : -10, "y" : 70 },
		{ "v0" : 16, "v1" : 17, "color" : "DCDCDC", "cMask" : ["wall" ], "cGroup" : ["wall" ], "x" : -418 },
		{ "v0" : 18, "v1" : 19, "color" : "DCDCDC", "cMask" : ["wall" ], "cGroup" : ["wall" ], "x" : 418 },
		{ "v0" : 22, "v1" : 23, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "x" : 0 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "x" : 0 },
		{ "v0" : 34, "v1" : 35, "color" : "5b00a3", "bCoef" : 0.75, "cMask" : ["wall" ], "cGroup" : ["wall" ] },
		{ "v0" : 38, "v1" : 39, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "x" : 0 },
		{ "v0" : 40, "v1" : 41, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "x" : 0 },
		{ "v0" : 42, "v1" : 43, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "x" : -418 },
		{ "v0" : 44, "v1" : 45, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "x" : 0 },
		{ "v0" : 46, "v1" : 47, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 180, "vis" : true, "color" : "5b00a3", "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "x" : 380 },
		{ "v0" : 50, "v1" : 51, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200 },
		{ "v0" : 61, "v1" : 62, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200, "x" : 418 },
		{ "v0" : 63, "v1" : 64, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200, "x" : -418 },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "5b00a3", "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 67, "v1" : 68, "curve" : 0, "vis" : true, "color" : "5b00a3", "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 69, "v1" : 70, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200, "x" : 418 },
		{ "v0" : 71, "v1" : 72, "vis" : true, "color" : "151a1e", "bCoef" : 1, "cMask" : ["ball" ], "bias" : -10, "y" : -200, "x" : -418 }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 5.4, "invMass" : 0, "pos" : [-418,85 ], "color" : "151a1e", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["all" ] },
		{ "radius" : 5.4, "invMass" : 0, "pos" : [-418,-85 ], "color" : "151a1e", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["all" ] },
		{ "radius" : 5.4, "invMass" : 0, "pos" : [418,-85 ], "color" : "151a1e", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["all" ] },
		{ "radius" : 5.4, "invMass" : 0, "pos" : [418,85 ], "color" : "151a1e", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["all" ] }

	],

	"planes" : [
		

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 4.545,
		"radius" : 15,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 5.8,
		"bCoef" : 0.412,
		"invMass" : 1.5,
		"color" : "FFD700",
		"cMask" : [ "all"
		],
		"damping" : 0.99,
		"gravity" : [ 0, 0
		],
		"cGroup" : [ "ball"
		]

	},

	"joints" : [
		

	]
}`
let onevone = `{
	"name": "SPL 1v1",
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
		"color": "452f52",
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
			"x": 0,
			"y": -86,
			"cMask": [
				"wall"
			],
			"cGroup": [
				"c1"
			],
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"x": -418,
			"y": -150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"x": 418,
			"y": 150,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"color": "5b00a3",
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
			"color": "5b00a3",
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"color": "5b00a3"
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
			"v0": 24,
			"v1": 25,
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
			"v0": 34,
			"v1": 35,
			"color": "5b00a3",
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
			"v0": 40,
			"v1": 41,
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
			"v0": 42,
			"v1": 43,
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
			"v0": 46,
			"v1": 47,
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
			"v0": 48,
			"v1": 49,
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
			"color": "5b00a3",
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
			"color": "5b00a3",
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
		"color": "FFD700",
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

timeString = `[${new Date().getUTCDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]`

let maxPlayers = 30
let password = 'aint gonna tell ya 😭🙏'
var room = HBInit({
    roomName: 'Statville Premier League',
    maxPlayers: 16,
    noPlayer: true, // remove host player
    public: false
});

room.setCustomStadium(official)
room.setScoreLimit(1)
room.setTimeLimit(3)
room.setTeamsLock(true)
room.setPassword('1989')

// ---------- ROOM CONFIG ----------

// ---------- VARS AND FUNCS ----------

//logsWebhook
const webhook = 'https://discord.com/api/webhooks/1189619772304920730/u0F2Kwm6p6ZICpKgkRwnV4V1CArfxbJqbEOndKoOwV_DNZ5SOQOtNmrdgt_LUMpyIh2N'

//infosWebhook
const webhook2 = 'https://discord.com/api/webhooks/1190590175278022767/Ry9iRB3TGewClvrXB-xrL4fY1sUodGw1e0ijlkxdoQMBlqSffG8ARkURqc3t2vHsGpR9'

const sendWebhookMessage = (message, usedWebhook) => {
	if (!message.includes('@everyone')) {
		const msg = {
			"content": message
		}
		fetch(usedWebhook,
			{'method': 'POST',
			'headers': {'content-type': 'application/json'},
			'body': JSON.stringify(msg)})
	}
}

let goalContributers = []

function handleTouch(player) {
	if (goalContributers.length <= 0) {
		goalContributers.push(player)
	} else if (goalContributers[goalContributers.length - 1] != undefined) {
		if (goalContributers[goalContributers.length - 1].id != player.id) {
			goalContributers.push(player)
		}
	}
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

let OLS = [2, 60, 0x36FFFF, 0x264E92, 0xE8CC17, null, 3, 60, 0x4F0FFF, 0xFFFFFF, 0xBC8C2B, 0x000000]
let ATL = [3, 60, 0x000000, 0xFF1F1F, 0xFFDD00, 0xFF0000, 3, 60, 0xFFFFFF, 0x636363, 0x3D3D3D, 0x191919]
let FTN = [3, 180, 0xFFFFFF, 0x025492, 0x0368B5, 0x025492, 3, 100, 0x1b486a, 0xFFFFFF, 0xDECDA3, 0xFFFFFF]
let CMT = [2, 75, 0x000000, 0x5F059C, 0xF7F7F7, null, 2, 75, 0x000000, 0x5F059C, 0xF7F7F7, null]
let EFC = [3, 20, 0xFFFFFF, 0x14A2A4, 0x3FB885, 0x6ACF64, 3, 20, 0xFFFFFF, 0xFFAC30, 0xFF893B, 0xF25607]
let CNT = [3, 90, 0x000000, 0xFFFFFF, 0xFF0000, 0xFFFFFF, 2, 60, 0xFFFFFF, 0x8C0808, 0xFF0000, null]
let ARS = [3, 90, 0x000000, 0x5F021F, 0xFFFFFF, 0x5F021F, 2, 0, 0xFFD700, 0x7851A9, 0x000000, null]
let ACS = [3, 0, 0xFFFFFF, 0x000000, 0xFF0505, 0x000000, 3, 0, 0x000000, 0xFFFFFF, 0xFF0505, 0xFFFFFF ]

let availableHomeKits = ['OLS', 'ATL', 'FTN', 'CMT', 'EFC', 'CNT', 'ARS', 'ACS']
let availableAwayKits = ['ATL', 'FTN', 'EFC', 'CNT', 'ARS', 'ACS']

function setHomeKit(coloursNumber, angle, avatarColour, colour1, colour2, colour3) {
	let coloursArray = []
	for (let i = 0; i < coloursNumber; i++) {
		coloursArray.push(eval(`colour${i+1}`))
	}
	room.setTeamColors(1, angle, avatarColour, coloursArray)
}

function setAwayKit(coloursNumber, angle, avatarColour, colour1, colour2, colour3) {
	let coloursArray = []
	for (let i = 0; i < coloursNumber; i++) {
		coloursArray.push(eval(`colour${i+1}`))
	}
	room.setTeamColors(2, angle, avatarColour, coloursArray)
}

let scores = room.getScores()
let redTeamPlayers = []
let blueTeamPlayers = []
let playersNumber = 0
let admins = ['BOj3h2H8p9PDUEqbUoHMu9erqCxVYkEl3VC2pNGhhhY', 'SwBqGL0MnnYdIFWsYMbJa9-goTBmr_dcdoUsLn8htmA', 'hji0qRQWt_yTUKzrbNgGcjVxby6hwq-2ba8RAcNelpg', 'uL4_aogqL07MHuwnrUO3TxblVCU2yWOXu2Hqj4B5EgY', 'SgGerYbs4v6NW52LgkB1tAtY7hw6zw2kGtaIs9YoIv8'] //comrade, duck, bolton, vvv, nova
//🔥💥🌟

let gameMode = 'warmup'
let captainPicking = null

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
		scores = room.getScores()
        room.stopGame()
        room.setCustomStadium(warmup)
        room.setPlayerTeam(room.getPlayerList()[0].id, 1)
        room.sendAnnouncement('⚡️ 1 player in the room, warm up!', null, 0xFFFF00, 'bold')
        room.startGame()
    }
    if (playersNum == 2) {
        gameMode = '1v1NOSUB'
		scores = room.getScores()
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
		scores = room.getScores()
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
	sendWebhookMessage(`${timeString} 💬 CHAT\n**${player.name}:** ${message}`, webhook)

    if (message == '!bb') {
        room.kickPlayer(player.id, 'Bye!')
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
    } else {
		room.sendAnnouncement((player.admin ? '[Admin] ' : '(Player) ') + player.name + ': ' + message, null, player.admin ? 0xFFD700 : 0xFFFFFF, null)
	}

	if (captainPicking != null) {
		if (!isNaN(message)) {
			if (parseInt(message) >= 1 && parseInt(message) <= specs.length) {
				room.sendAnnouncement(blueTeamPlayers[0].name + ' chose ' + specs[parseInt(message) - 1].id, null, 0xC0C0C0, 'bold')
				room.setPlayerTeam(specs[parseInt(message) - 1].id, captainPicking == 'blue' ? 2 : 1)
			} else {
				room.sendAnnouncement('invalid pick', specs[0].id, 0xC0C0C0, 'bold')
			}
		} else {
			room.sendAnnouncement('invalid pick', specs[0].id, 0xC0C0C0, 'bold')
		}

		return false
	}

	return false
}

setInterval(() => {
    room.sendAnnouncement('Join our discord at: https://discord.gg/R5C8x43pcY', null, 0xFFFFFF, 'bold')
}, 170000);

room.onPlayerJoin = function(player) {
	sendWebhookMessage(`${timeString} :arrow_right: **${player.name}** joined the room (${room.getPlayerList().length}/${maxPlayers})\n[${player.auth}] {${player.conn}}`, webhook)
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

let getSpecs = []

// room.onGameStart = function() {
// 	randomInt = Math.floor(Math.random() * availableHomeKits.length)
// 	randomIntAway = Math.floor(Math.random() * availableAwayKits.length)
// 	setHomeKit(eval(availableHomeKits[randomInt])[0], eval(availableHomeKits[randomInt])[1], eval(availableHomeKits[randomInt])[2], eval(availableHomeKits[randomInt])[3], eval(availableHomeKits[randomInt])[4], eval(availableHomeKits[randomInt])[5])
// 	setHomeKit(availableAwayKits[randomIntAway][6], availableAwayKits[randomIntAway][7], availableAwayKits[randomIntAway][8], availableAwayKits[randomIntAway][9], availableAwayKits[randomIntAway][10], availableAwayKits[randomIntAway][11])
// }

room.onGameStop = function() {
	getSpecs = []
	let winningTeam = specs
	let losingTeam = specs

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
                room.setPlayerTeam(shuffledPlayerList[i].id, 1)
            }
            if (i > 1) {
                room.setPlayerTeam(shuffledPlayerList[i].id, 2)
            }
        }
		room.startGame()
    }
    if (gameMode == 'SUB') {
		room.stopGame()
        if (scores.red > scores.blue) {
			winningTeam = redTeamPlayers
			losingTeam = blueTeamPlayers
        }
        if (scores.red < scores.blue) {
			winningTeam = blueTeamPlayers   
			losingTeam = redTeamPlayers         
        }
		for (let i = 0; i < winningTeam.length; i++) {
			room.setPlayerTeam(winningTeam[i].id, 1)
		}
		for (let i = 0; i < losingTeam.length; i++) {
			room.setPlayerTeam(losingTeam[i].id, 0)
			getSpecs.push(losingTeam[i])
		}
		room.setPlayerTeam(specs[0].id, 2)
		blueCaptainPicks()
    }
}

let pickTeamString = 'Pick your team!\n'
const blueCaptainPicks = () => {
	for (let i = 0; i < getSpecs.length; i++) {
		pickTeamString = pickTeamString + '[' + [i + 1] + ']. ' + getSpecs[i].name + ', '
	}
	room.sendAnnouncement(pickTeamString, specs[0].id, 0xC0C0C0, 'bold')
	captainPicking = 'blue'
}

room.onPlayerLeave = function(player) {
	sendWebhookMessage(`${timeString} :arrow_left: **${player.name}** left the room (${room.getPlayerList().length}/${maxPlayers})`, webhook)
    updateTeams()
    playersNumber = room.getPlayerList().length
    updateGameMode(playersNumber)
}

room.onGameTick = function() {
	scores = room.getScores()
	if (blueTeamPlayers.length != redTeamPlayers.length && gameMode != 'warmup') {
		room.pauseGame(true)
	}
}

let ownGoal = false
room.onTeamGoal = function(team) {
	let goalColour = 0x00FFFF
	goalContributers[goalContributers.length - 1].team == team ? ownGoal = true : ownGoal = false
	if (ownGoal) {
		room.sendAnnouncement(`[${room.getScores().time}] 😂 Own goal by ${goalContributers[goalContributers.length - 1]}!`, null, goalColour)
	} else if (goalContributers.length >= 2) {
		if (goalContributers[goalContributers.length - 1].team != goalContributers[goalContributers.length - 2].team) {
			room.sendAnnouncement(`[${room.getScores().time}] ⚽️ Own goal by ${goalContributers[goalContributers.length - 1]}!`, null, goalColour)
		} else {
			room.sendAnnouncement(`[${room.getScores().time}] ⚽️ Goal by ${goalContributers[goalContributers.length - 1]}! Assist by ${goalContributers[goalContributers.length - 2]}`, null, goalColour)
		}
	} else {
		room.sendAnnouncement(`[${room.getScores().time}] ⚽️ Goal by ${goalContributers[goalContributers.length - 1]}! Assist by ${goalContributers[goalContributers.length - 2]}`, null, goalColour)
	}
}

room.onPlayerBallKick = function(player) {
	handleTouch(player)
}

room.onRoomLink = function(url) {
	sendWebhookMessage(`🟢 The pub is **online**\n🔗 Link: ${url}\n🔑 Password: ${password}`, webhook2)
}