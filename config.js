let headless = false
let roomPublic = headless ? false : true

let config = {
    priv1: {
        autoStart: true,
        roomName: 'SPL | Futsal 5v5 | Private Room 1',
        playerName: 'host',
        maxPlayers: 30,
        public: roomPublic,
        noPlayer: true,
        token: 'thr1.AAAAAGXCl1jL--emABttQA.L6arTpc8W4Y',
        geo: {'code': 'gb', 'lat': 50, 'lon': 0},
        roomScript: './private1.js'
    },
    priv2: {
        autoStart: true,
        roomName: 'SPL | Futsal 5v5 | Private Room 2',
        playerName: 'host',
        maxPlayers: 30,
        public: roomPublic,
        noPlayer: true,
        token: 'thr1.AAAAAGXCl1jL--emABttQA.L6arTpc8W4Y',
        geo: {'code': 'gb', 'lat': 50, 'lon': 0},
        roomScript: './private2.js'
    },
    pub1: {
        autoStart: true,
        roomName: '🟣⚫⚽️ 𝗦.𝗣.𝗟. 𝟭 🏆 | Futsal 4v4 ⚽️⚫🟣',
        playerName: 'host',
        maxPlayers: 30,
        public: roomPublic,
        noPlayer: true,
        token: 'thr1.AAAAAGXHff_3qJoKLQLnAA.ybKqfNv4w-U',
        geo: {'code': 'gb', 'lat': 50, 'lon': 0},
        roomScript: './splPub1.js'
    },
    pub2: {
        autoStart: true,
        roomName: '🟣⚫⚽️ 𝗦.𝗣.𝗟. 𝟮 🔥 | Futsal 4v4 ⚽️⚫🟣',
        playerName: 'host',
        maxPlayers: 30,
        public: roomPublic,
        noPlayer: true,
        token: 'thr1.AAAAAGXHRAkPccIC7vLgwA.ZAb4w2UabhA',
        geo: {'code': 'gb', 'lat': 50, 'lon': 0},
        roomScript: './splPub2.js'
    },
};
module.exports = config;