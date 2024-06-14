 /*global monogatari */

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

					'end of scene',
					//'FadeOut'?,
		
		
		// Chapter 0 - TalkingToLeader
		
					'centered text',
					'show scene #f7f6f6 with fadeIn',
		
					'rk How do you feel about going to hell?',
		
					'Would prefer to stay on this plane.',
					'Not in a mood to travel to hell just yet...',
		
					'rk So something more local..',
					'rk How about killing an adult green dragon?',
		
		// prvo grananje

					//Option 1: Reject to team up with someone new.
					//Name]: ...
					//Option 2: Accept to team up with someone new.
					//[Name]: I don't have all day, Rilke.
		{
			'Text': 'You have received a new mission. Do you accept it?',
			'Options': [
				{
					'Text': 'Accept mission',
					'Action': {
						'Jump': 'Mission_Accepted'
					}
				},
				{
					'Text': 'Reject mission',
					'Action': {
						'Jump': 'Mission_Rejected'
					}
				}
			]
		}
	],

				//Option 1: Reject to team up with someone new.

				'Mission_Rejected': [

					'centered text',

					' Hmm...',
					' if I do not have my old teammates with me, I do not think I want to take on this mission...',
					' It just would not feel right.',

					'centered text',
					' Rilke gives me a nod of understanding',
		
					' rk I can respect that.',
					' rk I understand not wanting to dive into something like this without people you trust by your side.',
					' rk I will give the mission to someone else who might be eager to try out a new team setup.',

					'centered text',

					' The decision is made, and Rilke bids me farewell as I head out of the guild.',
					' I leave the building, feeling relaxed and free for the first time in a while.',
					' That night, as I lay in bed, I think to myself how lucky I am to have had such an easy day.',
					' That mission that got turned down surely will not end up being as big of a deal.',
					' ...perhaps I should learn to stop overthinking things.',
		
		      // Bad Ending 1 - Vacation time
					{
					
			'Text': 'You rejected the mission. Game over.'
		}
	],
	
				//Option 2: Accept to team up with someone new.

				'Mission_Accepted': [

					'centered text',
					' Sure, I suppose I can work with some new people for once.',
		
					' rk So you accepted the mission...',
					' rk Good choice!',
					' rk I was hoping you would take it on.',
					' rk Let me give you a little information on the two people we have assigned to your team.',
					' rk The first is a woman barbarian named Rioth, who is known for her strength and battle prowess.',
					' rk The second is a male knight named Bizarr, who is a skilled swordsman, I hear.',
		
					' Sounds promising.',
					' Where are they now?',
		
					' rk Right now, they are both over at the tavern.',
					' rk I highly suggest you go there and introduce yourself, get to know them a bit before starting this mission.',
		
					' Sounds like a good idea.',
					' Thanks and goodbye, Rilke!',
					' I wave my hand to Rilke as I go to the tavern.',
	],
	
	
	
				'InnerThoughts': [

					'centered text',

					' I wonder what I should ask him first...',
					' Should I ask about the skills he has or what kind of missions he has been on?',
					' Or maybe... I should rather ask why he even joined this team?',
					' But...',
					' I would like to know more about them personally...',
		
		//'scene of tavern',
	],

			'Mission_Accepted_Choice': [
		{
			'Text': 'You accepted the mission. Now, choose who you want to talk to first:',
			'Options': [
				{
					'Text': 'Talk to Rioth',
					'Action': {
						'Jump': 'Conversation_Rioth_Start'
					}
				},
				{
					'Text': 'Talk to Bazarr',
					'Action': {
						'Jump': 'Conversation_Bazarr_Start'
					}
				}
			]
		}
	],
	
				// Walking to CA1

				// Talking to CA1


	// ako odaberes rioth PRVI PUT

			'Conversation_Rioth_Start': [
		{
			//tu ide dijalog AI

			'CA1': [
					'centered text',

					' Holy shit!',
					' Arent you {{player.name}}?',
					' I thought i heard you dont even visit this hall anymore!',
					' What brings you here?',
		],

		//razgovori - moguci ishodi s CA1 - Rioth

		// Nonsence -> Inner thought -> Explanation

			// Explanation:You explain your intentions.
			// 'Inner tought' : 'Hmm, maybe I should just get to the point?'
			// Insult: You say something the CA dislikes.

		//Explanation -> CA1 - Response

					//CA1 - Response:
					// 'Oh? You will be joining us on the mission? Didnt expect this much fire power.',
					// 'This mission is either very difficult, or you really have nothing better to do.',
					// 'Either way its fine by me!',
					// 'So, what would you like to know about me?',
					// 'Im an open book..'

		//option:  you begin walking towards where Bizarr is waiting

		//CA1: Response se grana na:

			// 1.  CA1 - Question about skills
				// 'Well, I would say that I am pretty strong if that wasnt evident enough.
				//	Ask anyone from my village and they will say i am the strongest person they know!
				//	Altough, none of them really travel outside much, but you get the point. If you need a giant immovable wall, im the one for you.'

			//2.  CA1 - Question about missions
				// 'Oh, this will be one of my first ones! Ive been here for only a couple of weeks so didnt have much time to go on many.',
				// 'But that shouldnt pose much of a problem for an adventurer like you, right? I can handle my weight, dont worry.'

			//3.  CA1 - Question about team
				// Ive never done a team job before. Most of the people here find me very intimidating so they would rather get themselves a meek little priest.',
				// This is the first time someone doesnt have a problem with me being their teammate.',
				// 'That Bizarr guy really is bizarre.'

			//4.  CA1 - Personal question
					// 'Ah, getting to the personal stuff huh? Well i dont mind. Surely this kind of thing is important if you are gonna travel with a stranger for a long time. Anyway, I am a big log that enjoys punching and kicking.',
					// ' I also enjoy having morning walks every saturday.',
					// ' Get the picture?'


					//Done with Conversation - Rioth

			'Text': 'You finished your conversation with Rioth...',
			'Options': [
				{
					'Text': 'Go talk to Bazarr.',
					'Action': {
						'Jump': 'Conversation_Bazarr_After_Rioth'
					}
				},
				{
					'Text': 'Continue forward.',
					'Action': {
						'Jump': 'Continue_Story'
					}
				}
			]
		}
	],

				// Going to talk to the other CA2


				//After finishing your conversation with Rioth, you begin walking towards where Bizarr is waiting


				// Talking to CA2

	// ako biras bazarr PRVI PUT
	// AI dio
	// name

				'Conversation_Bazarr_Start': [
					{
					//'centered text',


		// razgovor i mogući ishodi 

					// Talking to CA2
					// 'Bizarr: Hello there.My name is Bizarr.I am fighter from the guild as you can see.Are you my new comrade on the mission?'


					
					// Nonsense Question -> CA2 - Response -> Hint from the Voice inside my Head

					// Nonsense Question:  Example: Why are there no watermelons here?
					// CA2 - Response: 'Huh, where did that question come from?'
					// Hint from the Voice inside my Head


					// Bad questions -> CA2 - Response -> Hint from the Voice inside my Head

					// Bad questions: Questions involving shitty flirting
					// CA2 - Response:
					// 'The Bizarr reacts with a mixture of confusion and disbelif, as if he can't believe anyone would flirt like that.', // ?
					// 'Not sure if you're just teasing me or not... but that was pretty bad.'
					// Hint from the Voice inside my Head




					// 1. Not telling the truth immediattelly -> Inner thought -> Truth -> Question about skills
					// 2. Not telling the truth immediattelly -> Inner thought -> Truth -> Question about how many missions they were on
					// 3. Not telling the truth immediattelly -> Inner thought -> Truth -> Question why he even joined the team
					// 4. Not telling the truth immediattelly -> Inner thought -> Truth -> Question about them


					// 1.
					// Not telling the truth immediatelly : (Inner thougt) 'Hmm, maybe I should just be honest to him?'
					// Truth: (We say we are the new comrade)
					// Question about skills : Answer about skills

					// Answer about skills: 'Bizarr: Well, I am no master swordsman by any means, but I've got some tricks up my sleeve.',
					//                       'Truth be told, this "tricks up my sleeve" are more like desperate attempt to distract or surprise my opponent more than anything else.',
					//                       'They still work though.'

					// 2.
					// Not telling the truth immediatelly:(Inner thougt) 'Hmm, maybe I should just be honest to him?'
					// Truth: (We say we are the new comrade)
					// Question about how many missions they were on : Answer about missions

					// Answer about missions:
					// 'Bizarr: I've been on a decent number of missions with this guild, I'd say probably around six or so..',
					//			'and only once did I end up needing to be carried away due to being knocked unconscious.',
					//



					// 3.
					// Not telling the truth immediatelly: (Inner thougt) 'Hmm, maybe I should just be honest to him?'
					// Truth: (We say we are the new comrade)
					// Question why he even joined the team : Answer about why he joined

					//  Answer about why he joined:
					// 'Bizarr: Why did I join the mission?'
					//          'There is a pause, as if he is considering his answer...',
					//          'To be honest, it's for the ... um... money?',
					//          'You see, this is what I do for a living after all.I am not some heroic type who's in it for the glory.',
					//          'I just do it for the paychecks.'



					// 4.
					// Not telling the truth immediatelly: (Inner thougt) 'Hmm, maybe I should just be honest to him?'
					// Truth: (We say we are the new comrade)
					// Question about them : Answers about them

					// Answers about them:
					// 'Bizarr: You want to know about me? Honestly, there is not too much to say about me.'

						//  'He pauses for a second, as if he is trying to think of something to say about himself'

					//  'So, uh...I dunno if you've met the other guild members, but they're pretty....interesting, to say the least.',
					//  'Like Rioth.. Most people are afraid of her, but I think she's pretty cool.',
					//	'She definitely knows how to get things done, and no one really messes with her.',



						// 'Done with Conversation - Bizarr

					// 'Bizarr: Well it was nice meeting you. I am looking forward to working with you during this mission.', 

					// '{{player.name}}: Same here.See you at the town entrance, yeah?',

					// 'Bizarr: Yep, you got it.',
					//			'See you there.' 


			// Going to talk to the other CA/ finished talking to both
			// After finishing your conversation with Bizarr, you begin walking towards where Rioth is waiting  




			'Text': 'You finished your conversation with Bazarr...',
			'Options': [
				{
					'Text': 'Go talk to Rioth.',
					'Action': {
						'Jump': 'Conversation_Rioth_After_Bazarr'
					}
				},
				{
					'Text': 'Continue forward',
					'Action': {
						'Jump': 'Continue_Story'
					}
				}
			]
		}
	],
	//Going to talk to the other CA

	// Ako si odabro rioth PRVI PUT, onda pricaj s bizarr
	
	'Conversation_Bazarr_After_Rioth': [
		{
			'Text': 'Finished talking with Bazarr...',
			'Options': [
				{
					'Text': 'Continue forward.',
					'Action': {
						'Jump': 'Continue_Story'
					}
				}
			]
		}
	],
	
	// ako si odabro bazarr PRVI PUT, onda pricaj s rioth
	
	'Conversation_Rioth_After_Bazarr': [
		{
			'Text': 'Finished talking with Rioth...',
			'Options': [
				{
					'Text': 'Continue forward.',
					'Action': {
						'Jump': 'Continue_Story'
					}
				}
			]
		}
	],
					


				// finished talking to both..
	// Player can ask questions. After questions have been asked the player continues to other CA or if they already talked to him they go to wait in front of the town entrance for meetup.
	// - ovo je vjerojatno prvi i zadnji put kad igrac moze razgovarati sa oba lika, posto je poanta igrice da nadalje igrac mora sam izabrati lika s kojim zeli razgovarati
	// - naravno sa likom kojim ne pricamo gubimo mali broj bodova, a s likom kojim pricamo dobivamo / gubimo bodove ovisno o nasem razgovoru



	// If user wants to continue conversation with Rioth
	
	'Continue_Story': [
		{
			'finishedTalking': [

		//After finishing your conversation with Bizarr
		//Rioth, you begin walking towards where Rioth/

					'centered text',
					' Bizarr is waiting'

			],

				//Saying goodbye for now
				
	'Goodbye': [

					'centered text',

					' After finishing the talk with Rioth and Bizarr at the tavern, the atmosphere is still friendly and upbeat.',
					' I cannot help but feel a little excited getting to know some new people.',
					' With a quick smile, I head off to my room for my sword and backpack.',
					' As I exit the tavern, I make my way to the entrance of the town.',
				// Entrance of the Town ?
			
					'centered text',
					' Rioth and Bizarr are already waiting, standing beside the gate and making small talk about the upcoming mission.',
					' It is clear that they have been chatting for quite some time...',
				
				//Entrance of the Town tu?
				//'scene of the town entrance FadeIn'

					'centered text',
					' Rioth and Bizarr glance over and notice me as I approach...',
					' b Ah, there you are.',
					' b Glad you finally made it out here.',
					' b I was beginning to wonder if youd gotten lost.',

					' I was not lost...',
					' Just went to quickly grab my things.',

					' r Well, now that we are all here, lets get going.',

					'centered text',
					' The mood is casual and lighthearted',
					' ...as I fall into step with them and begin to walk along the road toward our destination.',
				
					'centered text',


				'End of Chapter 0'
			]
		}
	],
});