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
monogatari.assets('scenes',{
	//Chapter 0:
		'room': 'bedroom1.jpg'
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
		name: 'zoro',
		color: '#FFAB91',
		sprites: {
			normal: '<div style="width: 50px; height: 50px; background-color: blue; border-radius: 50%;" ></div>'
		}
	},
	'br': {
		name: 'brol',
		color: '#FFAB91',
		sprites: {
			normal: '<div style="width: 50px; height: 50px; background-color: red; border-radius: 50%;" ></div>'
		}
	},
	'rk': {
		name: 'rilke',
		color: '#FFAB91',
		sprites: {
			normal: '<div style="width: 50px; height: 50px; background-color: yellow; border-radius: 50%;" ></div>'
		}
	}
});

//  Chapter 0
// characters and scenes (gore u characters i pod assets-scenes)


// Start of Chapter 0

monogatari.script({
	//DobroJutro! PrijatnaKafica

	'Start': [

		'show scene room with fadeIn',
		//'show character in scene',

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


		'I roll out of bed and start to dress, preparing to head downstairs to wait for the guild leader.',
		'The atmosphere is laidback and calm, as is the norm here. The guild is like a second home, the members like extended family...',


		'I stand before the front desk, patiently waiting for the guild leader to arrive. As I stand there, two members pass by, Zoro and Brol.',
		'They are exchanging friendly banter as they go and a small conversation ensues.',


		'show character z normal at left',
		'show character br normal at right',

		//'Dialog':
		'z So, did your bet pay off last night?',
		'br Yeah, I won a few copper coins... Not too bad, huh?',
		'z Not bad, not bad at all. You gonna use it to buy some drinks?',
		'br You know it.',

		//'hide character z',
		//'hide character b',

		'I casually roll my eyes as they walk past due to knowing how Brols gambling last night really went...', //Brol's 
		'Truth be told, he lost 10 gold coins to get a few copper ones.',

		'rk Good day to you.',

		'rk You are here for another mission, I assume?',
		'rk Finally recovered, huh?',


		'Yeah finally. Got pretty bored from this prolonged "vacation". I was wondering if you had anything in the works for me.',

		'rk Hmm...',

		'rk Let me check my board.',


		'I wait patiently as Rilke looks at his precious board filled with all kinds of job posters',

		'end of scene'
		//'FadeOut'?

		]
		
});

