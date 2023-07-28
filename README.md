# **DearthBound**

A simple clone of the turn-based combat system in the 1995 Japanese role-playing game *EarthBound* (released in Japan as *Mother 2*).

## **Installation**

To set up the app on your local machine, type the following into the terminal:

```
npm install
npm run server
```

Open another terminal window, then type:

```
npm run dev
o
```

## **How to Play**

You will face ten different enemies in Dearthbound, each enemy more difficult than the last. You must defeat all ten enemies to win!

### **Character Creation**

Choose between different sprites by clicking on your character.

Enter your character's name, favorite food, and favorite thing.

Once you're ready, click "Yep"!

### **Combat**

While in combat, you may choose between four different character actions:

**Bash** - Swing at the enemy, dealing damage equal to the attack power of your weapon.

**PSI** - Use Psychic Points (PP) to perform a Psionic ability (PSI) on the enemy. Effects vary between abilities.

**Goods** - Choose between items that may be used in various ways to aid you in battle. Your favorite food heals you, while water bottles restore your PP.

**Check** - Examine your opponent to discover details about their remaining health, abilities, and weaknesses.

If you defeat your enemy, you will be awarded money and sent to the shop screen.

### **Shop**

In the shop screen, you can use the money earned from your battles to purchase helpful items. You may also sell unwanted items in order to afford better ones.

## **Folder Structure**
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
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   └── nes.css
├── db.json
├── index.html
├── package.json
├── README.md
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

• **util** - contains CRUD functions, as well as other common functions used throughout the app

• **App.jsx** - renders the app, consisting of all the routes defined in index.jsx

• **index.css** - primary stylesheet for the app

• **index.jsx** - defines the react routes used by App.jsx

• **nes.css** - CSS library used heavily throughout project

• **db.json** - JSON database file used to store game data

• **index.html** - HTML file that serves as entry point for app

• **package.json** - holds metadata about project's dependencies, as well as scripts to manage project

• **README.md** - file you are currently reading!

## **Technologies Used**
• Vite         (4.2.0)

• React        (18.2.0)

• React Router (6.4.4)

• Typed.js     (2.0.15)

• Tailwind CSS (3.3.1)

## **Features**
*insert key features here (client-side routing, talk about the logic used, typed library, etc)*

## **Demo / Walkthrough**
*insert link to loom video with thumbnail here*

## **License**
DearthBound is available under the MIT license. See the LICENSE.txt file for more info.

## **Contact Information**
[GitHub](https://github.com/trevor-wells)

[LinkedIn](https://www.linkedin.com/in/trevor-e-wells/)
