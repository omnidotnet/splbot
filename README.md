# SPL Room

A script, running with Haxroomie to host the SPL's public and private rooms

## Deployment

To host the room, you will first need to install haxroomie-cli

```bash
  npm i haxroomie-cli -g
```

Then clone the repo in an empty folder

```bash
  git clone https://github.com/Yudjenn/splpHostBot.git
```

The code for the pub is in the pub.js file and for the private room in the room.js file. To launch it, be sure to have a valid token and that both of the are uncommented. Then run

```bash
  haxroomie-cli -c config.js
```
## Usuall issues

- If you get the **Error: Invalid Token Provided!** error, go regenerate a token at https://www.haxball.com/headlesstoken
- Any other issue is a skill issue ngl

## Authors

- [your best mate comrade 🗣️](https://github.com/Yudjenn)
- [Nova](https://github.com/omnidotnet)

## Todo list

### Pub:
- Fix stats

### Private:
- Send stats in discord at the end of a game
