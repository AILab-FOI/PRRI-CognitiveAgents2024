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
	//Chapter 0:
		'guildRoom': 'scene..',
		'guildDesk': 'scene.....'
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
	},
	'z': {
		name: 'zorro',
		color: '#',
		sprites: {
			normal: ''
		}
	},
	'br': {
		name: 'brol',
		color: '#',
		//sprites: {
			normal: 'slikaBrol.jpg'
	},
	'rk': {
		name: 'rilke',
		color: '#',
			//normal: 'slikaRilke.jpg'
},
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
//  Chapter 0
// characters and scenes (gore u characters i pod assets-scenes)


// Start of Chapter 0

monogatari.script({
	//DobroJutro! PrijatnaKafica

	'Chapter0': [

		'show scene guildRoom with fadeIn',
		//'show character in scene',
		'centered text',

		' The morning sun peaks through the curtains as my eyes open. Birds chirp outside in the early morning light, and a subtle breeze flows through the room.',
		' The sounds of the guild members downstairs fill the air, exchanging banter in a casual manner and setting the mood for the day to come.',

		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		//{{player.name}}

		'show scene guildDesk with fadeInSlow',
		'show character {{player.name}} centered in scene',
		'centered text',


		'{{name}} I roll out of bed and start to dress, preparing to head downstairs to wait for the guild leader.',
		'{{name}} The atmosphere is laidback and calm, as is the norm here.The guild is like a second home, the members like extended family...',


		'{{name}} I stand before the front desk, patiently waiting for the guild leader to arrive. As I stand there, two members pass by, Zoro and Brol.',
		'{{name}} They are exchanging friendly banter as they go and a small conversation ensues.',//they're


		'show character z normal at left',
		'show character br normal at right',
		'centered text',

		//'Dialog':
		'z So, did your bet pay off last night?',
		'br Yeah, I won a few copper coins... Not too bad, huh?',
		'z Not bad, not bad at all. You gonna use it to buy some drinks?',
		'br You know it.',

		'hide character z',
		'hide character b',

		'show character {{name}} ...  left', // upper-body? upclose? closer?
		'centered text',

		'I casually roll my eyes as they walk past due to knowing how Brols gambling last night really went...', //Brol's 
		'Truth be told, he lost 10 gold coins to get a few copper ones.',

		'show character {{name}} centered in scene',


		'show character rk right upclose in scene',
		'show character {{player.name}} upclose left in scene',
		'centered text',

		'rk Good day to you.',

		'show character rk upclose centered in scene',
		//'zoom in character rk', 
		'hide character {{name}}',

		'rk You are here for another mission, I assume?',
		'rk Finally recovered, huh?',

		'hide character rk',
		'show {{player.name}} centered in scene',
		'centered text',


		'{{player.name}} Yeah finally. Got pretty bored from this prolonged "vacation". I was wondering if you had anything in the works for me.',

		'show character {{player.name}} left in scene',
		'show character rk right in scene',

		'rk Hmm...',

		'zoom in character rk',
		//'hide {{player.name}}',
		'centered text',

		'rk Let me check my board.',

		'centered text',
		'hide character rk',
		'show character {{player.name}} centered',

		'{{player.name}} I wait patiently as Rilke looks at his precious board filled with all kinds of job posters',

		'end of scene'
		//'FadeOut'?
		
});

