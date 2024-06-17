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
    'room': 'bedroom1.jpg',
    'hall': 'guild-hall1.jpg',
    'town': 'town-entrance1.jpg'
});


// Define the Characters
monogatari.characters({
    'r': {
        name: 'Rioth',
        color: '#565656',
        sprites: {
            normal: 'rioth/normal.png'
        }
    },
    'b': {
        name: 'Bizarr',
        color: '#81523F',
        sprites: {
            normal: 'bizarr/normal.png'
        }
    },
    'z': {
        name: 'Zoro',
        color: '#6D6A4D',
        sprites: {
            normal: '<div style="width: 50px; height: 50px; background-color: blue; border-radius: 50%;" ></div>'
        }
    },
    'br': {
        name: 'Brol',
        color: '#6D6A4D',
        sprites: {
            normal: '<div style="width: 50px; height: 50px; background-color: red; border-radius: 50%;" ></div>'
        }
    },
    'rk': {
        name: 'Rilke',
        color: '#6D6A4D',
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

        'centered <span class="custom-dialog">Test odlomak</span>',

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

        'centered <span class="custom-dialog">You have selected the name {{player.name}} and will from now on be referred to as such.</span>',


        'I roll out of bed and start to dress, preparing to head downstairs to wait for the guild leader.',
        'The atmosphere is laidback and calm, as is the norm here. The guild is like a second home, the members like extended family...',

        'show scene hall with fadeIn',


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

        'show character rk normal at center',

        'rk Good day to you.',

        'rk You are here for another mission, I assume?',
        'rk Finally recovered, huh?',


        'Yeah finally. Got pretty bored from this prolonged "vacation". I was wondering if you had anything in the works for me.',

        'rk Hmm...',

        'rk Let me check my board.',


        'I wait patiently as Rilke looks at his precious board filled with all kinds of job posters',

        // Chapter 0 - TalkingToLeader

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

        'centered <span class="custom-dialog">You are now being presented with the first choice within the game. This choice will bear consequences.</span>',

        {
            'Choice': {
                'Dialog': 'You have received a new mission. Do you accept it?',
                'accept': {
                    'Text': 'Accept mission',
                    'Do': 'jump Mission_Accepted'
                },

                'reject': {
                    'Text': 'Reject mission',
                    'Do': 'jump Mission_Rejected'
                }
            }
        }
    ],


    //Option 1: Reject to team up with someone new.

    'Mission_Rejected': [

        'centered <span class="custom-dialog">You have decided to reject the mission.</span>',

        'Hmm...',
        'if I do not have my old teammates with me, I do not think I want to take on this mission...',
        'It just would not feel right.',

        'show character rk normal at center',

        'Rilke gives me a nod of understanding',

        'rk I can respect that.',
        'rk I understand not wanting to dive into something like this without people you trust by your side.',
        'rk I will give the mission to someone else who might be eager to try out a new team setup.',

        'The decision is made, and Rilke bids me farewell as I head out of the guild.',
        'I leave the building, feeling relaxed and free for the first time in a while.',

        'show scene town with fadeIn',

        'That night, as I lay in bed, I think to myself how lucky I am to have had such an easy day.',
        'That mission that got turned down surely will not end up being as big of a deal.',
        '...perhaps I should learn to stop overthinking things.',
        'centered <span class="custom-dialog">You rejected the mission. Game over.</span>',
        'end',

        // Bad Ending 1 - Vacation time
    ],

    //Option 2: Accept to team up with someone new.

    'Mission_Accepted': [

        'centered <span class="custom-dialog">You have decided to accept the mission.</span>',

        'Sure, I suppose I can work with some new people for once.',

        'show character rk normal at center',

        'rk So you accepted the mission...',
        'rk Good choice!',
        'rk I was hoping you would take it on.',
        'rk Let me give you a little information on the two people we have assigned to your team.',
        'rk The first is a woman barbarian named Rioth, who is known for her strength and battle prowess.',
        'rk The second is a male knight named Bizarr, who is a skilled swordsman, I hear.',

        'Sounds promising.',
        'Where are they now?',

        'rk Right now, they are both over at the tavern.',
        'rk I highly suggest you go there and introduce yourself, get to know them a bit before starting this mission.',

        'Sounds like a good idea.',
        'Thanks and goodbye, Rilke!',
        'I wave my hand to Rilke as I go to the tavern.',

        'I wonder what I should ask him first...',
        'Should I ask about the skills he has or what kind of missions he has been on?',
        'Or maybe... I should rather ask why he even joined this team?',
        'But...',
        'I would like to know more about them personally...',

        'centered <span class="custom-dialog">You are given the option to choose which one of the main characters you will talk to first.</span>',
        'centered <span class="custom-dialog">You will get to talk to both characters if you so desire so the initial choice does not matter.</span> ',

        {
            'Choice': {
                'Dialog': 'You accepted the mission. Now, choose who you want to talk to first:',
                'rioth': {
                    'Text': 'Talk to Rioth',
                    'Do': 'jump Conversation_Rioth_Start'
                },
                'bizarr': {
                    'Text': 'Talk to Bizarr',
                    'Do': 'jump Conversation_Bazarr_Start'
                }
            }
        }
    ],

    //'scene of tavern',

    // Walking to CA1

    // Talking to CA1


    // ako odaberes rioth PRVI PUT

    'Conversation_Rioth_Start': [

        'centered <span class="custom-dialog">You have decided to talk to Rioth.</span>',

        'show character r normal at center',
        'r Holy shit!',
        'r Arent you {{player.name}}?',
        'r I thought i heard you dont even visit this hall anymore!',
        'r What brings you here?',

        //razgovori - moguci ishodi s CA1 - Rioth
        //OVDJE IDE AI

        'hide character r',
        'centered <span class="custom-dialog">Razgovor s AI</span>',

        //OVDJE

        'centered <span class="custom-dialog">You can now choose to talk to the other remaining character or continue on with the story.</span>',

        {
            'Choice': {
                'Dialog': 'After talking to Rioth, you...',
                'bizarr2': {
                    'Text': 'Go talk to Bizarr.',
                    'Do': 'jump Conversation_Bazarr_After_Rioth'
                },
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump samoRioth'
                }
            }
        }
    ],

    //Done with Conversation - Rioth


    // Going to talk to the other CA2


    //After finishing your conversation with Rioth, you begin walking towards where Bizarr is waiting


    // Talking to CA2

    // ako biras bazarr PRVI PUT
    // AI dio
    // name

    'Conversation_Bazarr_Start': [

        'centered <span class="custom-dialog">You have decided to talk to Bizarr.</span>',

        'show character b normal at center',

        'hide character b',
        'centered <span class="custom-dialog">Razgovor s AI</span>',

        //OVDJE

        'centered <span class="custom-dialog">You can now choose to talk to the other remaining character or continue on with the story.</span>',

        {
            'Choice': {
                'Dialog': 'After talking to Bizarr, you...',
                'rioth2': {
                    'Text': 'Go talk to Rioth.',
                    'Do': 'jump Conversation_Rioth_After_Bazarr'
                },
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump samoBizarr'
                }
            }
        }
    ],

    //Going to talk to the other CA

    // Ako si odabro rioth PRVI PUT, onda pricaj s bizarr

    'Conversation_Bazarr_After_Rioth': [

        'centered <span class="custom-dialog">You decided to talk to the other remaining character.</span>',

        'After talking to Bizzar, you head over to where Rioth is waiting.',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        {
            'Choice': {
                'Dialog': 'Finished talking with Bizarr...',
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump Goodbye'
                }
            }
        }
    ],

    // ako si odabro bazarr PRVI PUT, onda pricaj s rioth

    'Conversation_Rioth_After_Bazarr': [

        'centered <span class="custom-dialog">You decided to talk to the other remaining character.</span>',

        'After talking to Rioth, you head over to where Bizarr is waiting.',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        //OVDJE

        {
            'Choice': {
                'Dialog': 'Finished talking with Rioth...',
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump Goodbye'
                }
            }
        }
    ],



    // finished talking to both..
    // Player can ask questions. After questions have been asked the player continues to other CA or if they already talked to him they go to wait in front of the town entrance for meetup.
    // - ovo je vjerojatno prvi i zadnji put kad igrac moze razgovarati sa oba lika, posto je poanta igrice da nadalje igrac mora sam izabrati lika s kojim zeli razgovarati
    // - naravno sa likom kojim ne pricamo gubimo mali broj bodova, a s likom kojim pricamo dobivamo / gubimo bodove ovisno o nasem razgovoru



    // If user wants to continue conversation with Rioth

    'Bizarr_and_Rioth': [

        'centered < span class= "custom-dialog" >You finished talking to both characters.</span >',
        'centered <span class="custom-dialog">You now continue on with the story.</span>',

        'After finishing the talk with Rioth and Bizarr at the tavern, the atmosphere is still friendly and upbeat.',
        'jump Goodbye'
    ],

    'samoRioth': [

        'centered <span class="custom-dialog">You decided to continue the story without talking to Bizarr.</span>',

        'After finishing the talk with Rioth at the tavern, the atmosphere is still friendly and upbeat.',
        'jump Goodbye'
    ],
    'samoBizarr': [

        'centered <span class="custom-dialog">You decided to continue the story without talking to Rioth.</span>',

        'After finishing the talk with Bizarr at the tavern, the atmosphere is still friendly and upbeat.',
        'jump Goodbye'
    ],

    //Saying goodbye for now

    'Goodbye': [

        
        'I cannot help but feel a little excited getting to know some new people.',
        'With a quick smile, I head off to my room for my sword and backpack.',
        'As I exit the tavern, I make my way to the entrance of the town.',

        'show scene town with fadeIn',

        // Entrance of the Town ?

        'Rioth and Bizarr are already waiting, standing beside the gate and making small talk about the upcoming mission.',
        'It is clear that they have been chatting for quite some time...',

        'show character r normal at left',
        'show character b normal at right',

        //Entrance of the Town tu?
        //'scene of the town entrance FadeIn'

        'Rioth and Bizarr glance over and notice me as I approach...',
        'b Ah, there you are.',
        'b Glad you finally made it out here.',
        'b I was beginning to wonder if youd gotten lost.',

        'I was not lost...',
        'Just went to quickly grab my things.',

        'r Well, now that we are all here, lets get going.',

        'The mood is casual and lighthearted',
        '...as I fall into step with them and begin to walk along the road toward our destination.',

        'end of scene'
    ]
});
