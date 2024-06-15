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
    "Developers": {
        "Project management": [
            "Sandra Sačarić", "Jakov Kadić"
        ],
        "Developers": [
            "Sonja Kolarić", "Ivan Simić", "Luka Pošta", "Dora Garafolić", "Dorijan Kos", "Jana Jambrešić", "Frano Simić", "Karlo Rosenthal", "Karmelo Mrvica", "Mateo Zović"
        ]
    },
    "Assets": {
        "game_screen, main_menu, button_hover.png, button_idle.png, dialog.png, help_screen.png, quick_menu.png, settings_screen.png, slider.png, slider_thumb.png, game_menu.png, return_hover.png, return_idle.png, save_button_hover.png, save_button_idle.png, choice_idle_background.png, textbox.png, choice_hover_background.png, main_menu_bg.png, start_idle.png, about_hover.png, about_idle.png, help_hover.png, help_idle.png, load_hover.png, load_idle.png, options_hover.png, options_idle.png, start_hover.png":
            "Skolaztika, <a href='https://skolaztika.itch.io/fantasy-renpy-gui-template'>Link to assets pack</a>",
        "namebox.png":
            "<a href='https://www.deviantart.com/cospigeon'>Fylgjur</a>, <a href='https://lunarmoonstudios.itch.io/antique-inspired-gui'>Link to assets pack</a>"
    }
});

/*  */

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
    'dark': 'dark.jpg',
    //Chapter 0:
    'room': 'bedroom1.jpg',
    'hall': 'guild-hall1.jpg',
    'tavern': 'tavern1.jpg',
    'town': 'town-entrance1.jpg',
    //Chapter 1:
    'forest': 'forest1.jpg',
    'camp': 'camp-dusk2.jpg',
    'night': 'camp-night1.jpg',
    'dream': 'dream.jpg'
});


// Define the Characters
monogatari.characters({
    'y': {
        name: 'You',
        color: '#000000',
        sprites: {
            normal: '<div style="width: 50px; height: 50px; background-color: blue; border-radius: 50%;" ></div>'
        }
    },
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
    },
    '?': {
        name: '???',
        color: '#000000',
        sprites: {
            normal: 'muad/black.png'
        }
    },
    'm': {
        name: 'MuadDib',
        color: '#CC6CE7',
        sprites: {
            normal: 'muad/normal.png'
        }
    }
});





monogatari.script({

    // Chapter 0

    'Start': [

        // Dobro jutro! Prijatna kafica

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Chapter 0 - Just an average day</span>',

        'show scene room with fadeIn',

        'The morning sun peaks through the curtains as you open your eyes. Birds chirp outside in the early morning light, and a subtle breeze flows through the room.',
        'The sounds of the guild members downstairs fill the air, exchanging banter in a casual manner and setting the mood for the day to come.',

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

        'centered <span class="custom-dialog">You have selected the name {{player.name}} and will from now on be referred to as such.</span>',

        'You roll out of bed and start to dress, preparing to head downstairs to wait for the guild leader.',
        'The atmosphere is laidback and calm, as is the norm here. The guild is like a second home, the members like extended family...',

        'show scene hall with fadeIn',

        'I stand before the front desk, patiently waiting for the guild leader to arrive. As I stand there, two members pass by, Zoro and Brol.',
        'They are exchanging friendly banter as they go and a small conversation ensues.',

        'z So, did your bet pay off last night?',
        'br Yeah, I won a few copper coins... Not too bad, huh?',
        'z Not bad, not bad at all. You gonna use it to buy some drinks?',
        'br You know it.',

        'I casually roll my eyes as they walk past due to knowing how Brols gambling last night really went...',
        'Truth be told, he lost 10 gold coins to get a few copper ones.',

        'rk Good day to you.',
        'rk You are here for another mission, I assume?',
        'rk Finally recovered, huh?',
        'y Yeah finally. Got pretty bored from this prolonged "vacation". I was wondering if you had anything in the works for me.',
        'rk Hmm...',
        'rk Let me check my board.',

        'I wait patiently as Rilke looks at his precious board filled with all kinds of job posters',

        // Talking to the Leader

        'rk How do you feel about going to hell?',
        'y Would prefer to stay on this plane.',
        'y Not in a mood to travel to hell just yet...',
        'rk So something more local..',
        'rk How about killing an adult green dragon?',

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

    'Mission_Rejected': [

        'centered <span class="custom-dialog">You have decided to reject the mission.</span>',

        'y Hmm...',
        'y If I do not have my old teammates with me, I do not think I want to take on this mission...',
        'y It just would not feel right.',

        'Rilke gives me a nod of understanding',

        'rk I can respect that.',
        'rk I understand not wanting to dive into something like this without people you trust by your side.',
        'rk I will give the mission to someone else who might be eager to try out a new team setup.',

        'The decision is made, and Rilke bids me farewell as I head out of the guild.',
        'I leave the building, feeling relaxed and free for the first time in a while.',

        'show scene room with fadeIn',

        'That night, as I lay in bed, I think to myself how lucky I am to have had such an easy day.',
        'That mission that got turned down surely will not end up being as big of a deal.',
        '...perhaps I should learn to stop overthinking things.',
        'centered <span class="custom-dialog">Ending 1 - Vacation time</span>',
        'end',
    ],

    'Mission_Accepted': [

        'centered <span class="custom-dialog">You have decided to accept the mission.</span>',

        'y Sure, I suppose I can work with some new people for once.',
        'rk So you accepted the mission...',
        'rk Good choice!',
        'rk I was hoping you would take it on.',
        'rk Let me give you a little information on the two people we have assigned to your team.',
        'rk The first is a woman barbarian named Rioth, who is known for her strength and battle prowess.',
        'rk The second is a male knight named Bizarr, who is a skilled swordsman, I hear.',
        'y Sounds promising.',
        'y Where are they now?',
        'rk Right now, they are both over at the tavern.',
        'rk I highly suggest you go there and introduce yourself, get to know them a bit before starting this mission.',
        'y Sounds like a good idea.',
        'y Thanks and goodbye, Rilke!',

        'I wave my hand to Rilke as I go to the tavern.',

        'show scene tavern with fadeIn',

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

    'Conversation_Rioth_Start': [

        'centered <span class="custom-dialog">You have decided to talk to Rioth.</span>',

        'show character r normal at center',

        'r Holy shit!',
        'r Arent you {{player.name}}?',
        'r I thought i heard you dont even visit this hall anymore!',
        'r What brings you here?',

        // OVDJE IDE AI

        'hide character r',

        'centered <span class="custom-dialog">Razgovor s AI</span>',
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

    'Conversation_Bazarr_Start': [

        'centered <span class="custom-dialog">You have decided to talk to Bizarr.</span>',

        'show character b normal at center',

        'b Hello there. My name is Bizarr.',
        'b I am fighter from the guild as you can see.',
        'b Are you my new comrade on the mission?',

        // OVDJE IDE AI

        'hide character b',

        'centered <span class="custom-dialog">Razgovor s AI</span>',
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

    'Conversation_Bazarr_After_Rioth': [

        'centered <span class="custom-dialog">You decided to talk to the other remaining character.</span>',

        'After talking to Rioth, you head over to where Bizarr is waiting.',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        {
            'Choice': {
                'Dialog': 'Finished talking with Bizarr...',
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump Bizarr_and_Rioth'
                }
            }
        }
    ],

    'Conversation_Rioth_After_Bazarr': [

        'centered <span class="custom-dialog">You decided to talk to the other remaining character.</span>',

        'After talking to Bizarr, you head over to where Rioth is waiting.',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        {
            'Choice': {
                'Dialog': 'Finished talking with Rioth...',
                'continue': {
                    'Text': 'Continue forward.',
                    'Do': 'jump Bizarr_and_Rioth'
                }
            }
        }
    ],

    // Saying goodbye for now

    'Bizarr_and_Rioth': [

        'centered <span class="custom-dialog">You finished talking to both characters.</span>',
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

    'Goodbye': [

        'I cannot help but feel a little excited getting to know some new people.',
        'With a quick smile, I head off to my room for my sword and backpack.',
        'As I exit the tavern, I make my way to the entrance of the town.',

        'show scene town with fadeIn',

        'Rioth and Bizarr are already waiting, standing beside the gate and making small talk about the upcoming mission.',
        'It is clear that they have been chatting for quite some time...',

        'show character r normal at left',
        'show character b normal at right',

        'Rioth and Bizarr glance over and notice me as I approach...',

        'b Ah, there you are.',
        'b Glad you finally made it out here.',
        'b I was beginning to wonder if youd gotten lost.',
        'y I was not lost...',
        'y Just went to quickly grab my things.',
        'r Well, now that we are all here, lets get going.',

        'hide character r',
        'hide character b',

        'The mood is casual and lighthearted',
        '...as I fall into step with them and begin to walk along the road toward our destination.',

        'jump Part1'
    ],

    // Chapter 1

    'Part1': [

        // Walking

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Chapter 1 - On the road</span>',

        'show scene forest with fadeIn',

        'centered <span class="custom-dialog">8 hours later...</span>',

        'The journey has been long and arduous, with us having traveled through dense forests and treacherous mountain paths for the past 8 hours.',
        'The air is thick with moisture, making it hard to breathe easily as we walk. ',
        'The sun is starting to set, painting the sky with hues of pink and orange as the shadows from the thick foliage slowly grow longer.',
        'Sounds of animals echo through the forest, the only sound besides the wind gently swaying the tree branches above you.',
        'You are taking careful steps as you move over the uneven terrain.',
        'The path is filled with various hazards, from loose rocks to small animals scurrying around.',
        'The thick foliage makes it hard to see further ahead, but you catch glimpses of Rioth and Bizarr walking ahead of you.',
        'Your gaze keeps shifting between the two of them, wondering if you should perhaps try and talk to at least one of your teammates.',

        // The thoughts about who to talk to

        'You glance in the direction Rioth is located at.',

        'show character r normal at left',

        'She appears to have a stoic look on her face, her gaze firm ahead as she walks with a determined stride.',
        'She seems more like the type to prefer to stick to herself, rather than engaging in casual conversation.',
        'But she seems like she knows what she is doing and could be a great source of advice or support if needed.',

        'hide character r',

        'You switch your gaze towards Bizarr',

        'show character b normal at right',

        'He on the other hand seems the complete opposite, with an upbeat and cheerful expression as he walks ahead.',
        'He has an air of confidence about him, as if he is open and welcoming to anyone who wants to talk to him.',

        'hide character b',

        {
            'Choice': {
                'Dialog': 'Should you talk with Rioth or Bizarr?',
                'rioth': {
                    'Text': 'Talk to Rioth',
                    'Do': 'jump Conversation_Rioth2'
                },
                'bizarr': {
                    'Text': 'Talk to Bizarr',
                    'Do': 'jump Conversation_Bazarr2'
                }
            }
        }
    ],

    'Conversation_Rioth2': [

        'centered <span class="custom-dialog">You have decided to talk to Rioth.</span>',

        'hrm',

        //razgovori - moguci ishodi s CA1 - Rioth
        //OVDJE IDE AI

        'hide character r',
        'centered <span class="custom-dialog">Razgovor s AI</span>',

        //OVDJE

        //KRAJ AI

        'jump Dream'
    ],

    //Done with Conversation - Rioth


    // Talking to CA2

    'Conversation_Bazarr2': [

        'centered <span class="custom-dialog">You have decided to talk to Bizarr.</span>',

        'show character b normal at center',

        'hide character b',
        'centered <span class="custom-dialog">Razgovor s AI</span>',

        //OVDJE

        //KRAJ AI

        'centered <span class="custom-dialog">You can now choose to talk to the other remaining character or continue on with the story.</span>',

        'jump Dream',
    ],

    // IVANOV DIO :DDDD

    'Dream': [

        'show scene camp with fadeIn',

        'centered <span class="custom-dialog">As the wood is brought to the campsite, you start the fire.</span>',
        'centered <span class="custom-dialog">Bizarr starts with his cooking. All three of you sit down and talk.</span>',

        'show character r normal at left',
        'show character b normal at right',

        'centered <span class="custom-dialog">When the food is done, Bizarr hands everyone a bowl and serves them their meal.</span>',

        'b This one is a specialty from where I come from. We even have festivals with cooking competitions with this exact recipe.',
        'b I didnt win the last one, but thats cause the other guy cheated. No way in hell would I lose otherwise.',

        'centered <span class="custom-dialog">He gives you plenty of hope.</span>',
        'centered <span class="custom-dialog">However, just from a simple glance at your bowl you can tell that something is off.</span>',
        'centered <span class="custom-dialog">Taking one spoonfull just confirms it.</span>',
        'centered <span class="custom-dialog">...</span>',
        'centered <span class="custom-dialog">It doesnt taste good.</span>',

        'Well, umm, its certainly a-',
        'r Is this a joke?',
        'b Beg your pardon?',
        'r Listen kid, Im gonna spare you my words. Hopefully your people are just insane and its not your awfull cooking skills.',
        'r Thanks for the food. Just so you know, with every bite Im gonna be wishing I was eating anything else. Ill eat it so that I dont die of starvation.',

        'centered <span class="custom-dialog">Rioth finishes her serving with one swift strike.</span>',
        'centered <span class="custom-dialog">She leaves the bowl and goes to her tent while clenching her stomach.</span>',

        'hide character r',

        'centered <span class="custom-dialog">Its fairly obvious she didnt enjoy what she was eating.</span>',

        'b I guess I was expecting too much from her. No village girl can enjoy this high class food.',
        'b What does she know anyway? Not like she can do better, right?',
        'Lets leave it at that.',

        'centered <span class="custom-dialog">You barely finish your food without making a face of disgust.</span>',
        'centered <span class="custom-dialog">Both you and Bizarr clean up the campfire as you head for your tents.</span>',

        'hide character b',
        'show scene night with fadeIn',

        'centered <span class="custom-dialog">You fall asleep fairly guickly from exhaustion.</span>',
        'centered <span class="custom-dialog">As you drift into deep slumber, you start to dream.</span>',

        'show scene dream with fadeIn',

        'centered <span class="custom-dialog">You walk around a forest, just like the one you were walking through during the day.</span>',
        'centered <span class="custom-dialog">Suddenly, he appears.</span>',

        'show character ? normal at center',

        '? Greetings.',
        'What the hell are you?',
        '? Do you know what they call the shadow of the second moon?',

        'centered <span class="custom-dialog">Looking up at the sky, there definetly is a second mooon.</span>',
        'centered <span class="custom-dialog">And yes, it somehow has a shadow.</span>',
        'centered <span class="custom-dialog">Do you know the name?</span>',

        'Of course I dont.',
        '? They call it, MuaDIb.',
        'You are... Muadib ? ',

        'hide character ?',
        'show character m normal at center',

        'm I am Paul... MuaDib.',
        'Great. What are you anyway, Paul?',
        'm Well I would tell you, but it seems that someone is entering your tent as we speak.',
        'What tent?',
        'm You are dreaming dumdum. Go and see for yourself. You will wake up soon anyway. Maybe we can continue our conversation later.',

        'hide character m',
        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">As you exit your dream, you wake up and see...</span>',
        'centered <span class="custom-dialog">...</span>',
        'centered <span class="custom-dialog">nothing?</span>',
        'centered <span class="custom-dialog">Your arms and legs cant move. You are slowly running out of breath.</span>',
        'centered <span class="custom-dialog">Someone is clenching you down and trying to strangle you by putting something over your head!</span>',
        'centered <span class="custom-dialog">As you grasp your situation, you calm yourself down.</span>',
        'centered <span class="custom-dialog">This is not your first time.</span>',
        'centered <span class="custom-dialog">There are a lot of bounties on your head after all.</span>',
        'centered <span class="custom-dialog">You quickly do an escape maneuver and swat the other person out of your tent.</span>',
        'centered <span class="custom-dialog">You run out of the tent, hoping to catch the culprit red handed!</span>',

        'show scene night with fadeIn',

        'centered <span class="custom-dialog">As you head out, the only person you see is Bizarr poking his little head out of his tent.</span>',

        'show character b normal at right',

        'b What was that noise?',
        'I was... attacked.',
        'r You were WHAT?',

        'centered <span class="custom-dialog">Rioth bursts out of her tent.</span>',

        'show character r normal at left',

        'r By whom! WHERE ARE THEY!',
        'Well I expected them to be-',

        'centered <span class="custom-dialog">Before you can finish your sentence, Rioth falls to her knees and clenches her stomach.</span>',

        'r My god. It still hurts like HELL. Guess I shouldnt have eaten that. How can I even sleep like this ?',
        'r Im sorry, I think Im gonna vomit. To spare you the sight Ill do it in the forest.',

        'hide character r',

        'centered <span class="custom-dialog">Rioth storms off, leaving you with a still shocked Bizarr.</span>',

        'Did you hear anyobody run away from the camp?',
        'b No, I must have woken up just as they were starting to leave.',
        'I see. Well, whatever. I dealt with this stuff before so it aint that big of a deal. Just go back to sleep.',

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Bullshit!</span>',
        'One of them wakes up just at the right time so that he can hide in his tent and claim he heard nothing?',
        'The other one didnt help me, even though she said she couldnt sleep? And now she runs off?',
        'There is only one logical conclusion from this chain of events. One of those two...',
        'centered <span class="custom-dialog">is lying!</span>',

        'end of scene'
    ]
});