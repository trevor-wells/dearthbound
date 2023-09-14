# **dearthbound**

a simple clone of the turn-based combat system in the 1995 japanese role-playing game *earthbound* (released in japan as *mother 2*)

## **installation**

to set up the app on your local machine, type the following into the terminal:

```
npm install
npm run server
```

open another terminal window, then type:

```
npm run dev
o
```

## **how to play**

you will face ten different enemies in dearthbound, each enemy more difficult than the last. you must defeat all ten enemies to win!

### <ins>**character creation**</ins>

choose between different sprites by clicking on your character.

enter your character's name, favorite food, and favorite thing.

once you're ready, click "yep"!

### <ins>**combat**</ins>

while in combat, you may choose between four different character actions:

**bash** - swing at the enemy, dealing damage equal to the attack power of your weapon.

**psi** - use psychic points (pp) to perform a psionic ability (psi) on the enemy. effects vary between abilities.

**goods** - choose between items that may be used in various ways to aid you in battle. your favorite food heals you, while water bottles restore your pp.

**check** - examine your opponent to discover details about their remaining health, abilities, and weaknesses.

if you defeat your enemy, you will be awarded money and sent to the shop screen.

### <ins>**shop**</ins>

in the shop screen, you can use the money earned from your battles to purchase helpful items. you may also sell unwanted items in order to afford better ones.

## **folder structure**
```
.
├── node_modules
├── src
│   ├── assets
│   │   ├── audio
│   │   │   ├── music
│   │   │   └── sfx
│   │   ├── backgrounds
│   │   ├── fonts
│   │   ├── images
│   │   └── sprites
│   │       ├── character
│   │       └── enemies
│   ├── routes
│   │   ├── character-screen
│   │   ├── error-screen
│   │   ├── fight-screen
│   │   ├── game-over-screen
│   │   ├── shop-screen
│   │   └── title-screen
│   ├── util
│   ├── app.jsx
│   ├── index.css
│   ├── index.jsx
│   └── nes.css
├── db.json
├── index.html
└── ...
```

• **node_modules** - contains installed dependencies acquired through `npm install`

• **src** - contains all source files

• **assets** - contains assets used in the project

• **audio** - contains audio files

• **backgrounds** - contains background .mp4s and .jpegs

• **fonts** - contains custom fonts

• **images** - contains app icon, as well as sprites for in-game entities

• **routes** - contains react components representing different screens in the application

• **util** - contains crud functions, as well as other common functions used throughout the app

• **app.jsx** - renders the app, consisting of all the routes defined in index.jsx

• **index.css** - primary stylesheet for the app

• **index.jsx** - defines the react routes used by app.jsx

• **nes.css** - css library used heavily throughout project

• **db.json** - json database file used to store game data

• **index.html** - html file that serves as entry point for app

## **technologies used**
• vite         (4.2.0)

• react        (18.2.0)

• react router (6.4.4)

• typed.js     (2.0.15)

• tailwind css (3.3.1)

## **features**
*insert key features here (client-side routing, talk about the logic used, typed library, etc)*

## **demo / walkthrough**
*insert link to loom video with thumbnail here*

## **license**
dearthbound is available under the mit license. see the license.txt file for more info.

## **contact information**
[github](https://github.com/trevor-wells)

[linkedin](https://www.linkedin.com/in/trevor-e-wells/)
