/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'r': {
		name: 'rioth',
		color: '#7FB8B3',
		sprites: {
			normal: 'rioth/normal.png'
		}
	},
	'b': {
		name: 'bizarr',
		color: '#FFAB91',
		sprites: {
			normal: 'bizarr/normal.png'
		}
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'centered text',
		'show scene #f7f6f6 with fadeIn',
		'centered jos teksta',
		'centered pretvaras se da je pred tobom slika guilda or smth idk',
		{
			'Choice': {
				'Dialog': 'U just woke up, who do you decide to bless with your pressence?',
				'rioth': {
					'Text': "Go drool at Rioth's feet",
					'Do': 'jump Rioth'
				},
				'bizarr': {
					'Text': 'Find out what that cool guys deal is',
					'Do': 'jump Bizarr'
				}
			}
		}
	],
	'Rioth': [
		'show character r normal at right',
		'r idk epik text + roasta te',
		'centered nezz tu bi kao trebo bit razg izmedju vas',
		'centered kad zavrsi mos ic delat nes drugo, biraj sta ces',
		{
			'Choice': {
				'Dialog': 'Opcije dalje?',
				'call': {
					'Text': '1',
					'Do': 'jump Call'
				},
				'ignore': {
					'Text': '2',
					'Do': 'jump Ignore'
				}
			}
		}
	],

	'Bizarr': [
		'show character b normal at right',
		'b oof insert zanimljiv razg ovdje',
		'centered yeah',
		'centered baci novcic',
		{
			'Choice': {
				'Dialog': 'Biraj svoju buducnost',
				'call': {
					'Text': '1',
					'Do': 'jump Call'
				},
				'ignore': {
					'Text': '2',
					'Do': 'jump Ignore'
				}
			}
		}
	],

	'Ignore': [
		'show character r normal at center',
		'r Ti si gay',
		'end'
	],
	'Call': [
		'show character b normal at center',
		'b Pls be gentle uwu senpai',
		'end'
	]
});