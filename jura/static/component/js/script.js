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

var agent = document.getElementById('agent');

// Funkcija za prikaz bota
function showBot() {
    agent.style.display = 'block';
}

// Funkcija za sakrivanje bota
function hideBot() {
    agent.style.display = 'none';
}

function triggerBotInteraction(section) {
    if (section.includes('Razgovor s AI')) {
        showBot();
        question('bok'); // Pokrećemo interakciju s botom
    } else {
        hideBot(); // Sakrivamo bota
    }
}

// Funkcija za prikazivanje sadržaja i aktiviranje bota gdje je potrebno
function displayContent(section) {
    var contentHtml = '';
    section.forEach(item => {
        if (typeof item === 'string') {
            contentHtml += '<p>' + item + '</p>';
        } else if (typeof item === 'object' && item.Choice) {
            contentHtml += '<p>' + item.Choice.Dialog + '</p>';
            for (var option in item.Choice) {
                if (option !== 'Dialog') {
                    contentHtml += '<button onclick="' + item.Choice[option].Do + '">' + item.Choice[option].Text + '</button>';
                }
            }
        }
    });

    $('#content').html(contentHtml);
    triggerBotInteraction(contentHtml);
}


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

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Ending 1 - Vacation time</span>',

        'end'
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

        'show character r normal at left',

        'y Hey, Rioth! Mind if I talk to you for a minute?',

        //OVDJE IDE AI

        'hide character r',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        'jump Direct_Attack'
    ],

    'Conversation_Bazarr2': [

        'centered <span class="custom-dialog">You have decided to talk to Bizarr.</span>',

        'show character b normal at right',

        'y Hey, Bizarr! Mind if I talk to you for a minute?',

        //OVDJE IDE AI

        'hide character b',

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        'jump Go_Around'
    ],

    'Direct_Attack': [

        'show character r normal at left',

        'r Have you tought up some kind of plan already? Cause I have.',

        'I perk up as Rioth speaks, showing a curious expression as I wait for her to continue',

        'r This may be my first team mission, but it isnt my first time dealing with the orcs',
        'r They may be powerful and durable, but dont have much coordination.',
        'r The best way to deal with them is quickly and directly before they get the chance to orginize properly.',
        'r Also, there may be hostages involved.',
        'y I was also thinkig about that. The quicker we get there the better.',
        'r Exectly! Im glad we think the same way.',
        'r It would be best to not take any detours, especially through the forest. I HATE the forest.',
        'r I get stuck on every branch on the way. If I was like the little guy with us, it would be a breeze for me!',
        'y Ill keep that in mind. Sending you through any kind of tight space seems like a bad idea anyway.',

        'jump Bizarr_Joins'
    ],

    'Go_Around': [

        'show character b normal at right',

        'b You know, Ive been thinking and got an idea on how we could get around those orcs.',

        'I perk up as Bizarr speaks, showing a curious expression as I wait for him to continue',

        'b You see, there could be a different path that we could take to reach the cave.',
        'b Its a little more work and time, but it would put us right behind the orcs and allow us to catch them off guard.',
        'b That way we can even see if there are those missing locals too.',
        'y That...that actually seems like a solid idea.',
        'b Indeed. It would take longer and might be a bit taxing to navigate, but it would definitely give us the advantage.',
        'b And thats what well need if we want to rescue the locals.',
        'y And with the element of surprise, we could make quick work of those orcs as well.',

        'jump Rioth_Joins'
    ],

    'Bizarr_Joins': [

        'Bizarr, who had been listening nearby, steps in and interjects the conversation between us two.',

        'show character b normal at right',

        'b Wait, what? You want to go the direct route?',
        'r Well, yeah. Its the fastest way there. Is that not what we need right now?',
        'b Yes, time is of the essence. But we should also try to not get killed immediately.',
        'b Frontal assault cant even be counted as a plan. We need to go around and see if there are any other entrances.',
        'b That way we can ambush the orcs!',
        'b We would also save the hostages earlier this way, since they would probably be kept somwhere in the back of the cave.',
        'r What good is another entrance if by the time we get there the hostages are dead, and the orcs are ready for any kind of attack?',
        'b Well its not my fault that you are a giant musclehead that cant get through a simple forest!',
        'b This so called "plan" you came up with is so typical for someone like you.',
        'r Listen here whimp, Im not gonna be talked down by some kind of smartass who thinks he knows everything.',
        'r Ive seen more combat than you, so what I say goes. I bet you are just scared of a little fight with the bad guys.',
        'r Trying to get the easy way out for yourself, huh?',

        'jump Choices'
    ],

    'Rioth_Joins': [

        'Rioth, who had been listening nearby, steps in and interjects the conversation between us two.',

        'show character r normal at left',

        'r Are you out of your mind? We dont have any time to waste, we need to take the direct route to the orcs and eliminate them as soon as possible.',
        'b Whoa, no need to get so agitated. I just thought the indirect way would be more effective...',
        'r Theres nothing to discuss. We go straight to the orcs, end of story.',
        'b Look, Im just saying that the indirect route might be more effective and help us-',
        'r No. Theres nothing to discuss, this path will bring us faster to the cave and we are not wasting any more time on trying to find a different one.',
        'b Look, you might have better combat skills and strength, but I know better than anyone how to navigate these mountains and forests.',
        'b So you need to just listen to me and trust that the indirect approach will result in a better outcome.',

        'jump Choices'
    ],

    'Choices': [
        {
            'Choice': {
                'Dialog': 'Maybe you should calm them down?',
                'listen': {
                    'Text': 'Listen to them argue',
                    'Do': 'jump Listen'
                },
                'calm': {
                    'Text': 'Calm them down',
                    'Do': 'jump Calm'
                }
            }
        }
    ],

    'Listen': [

        'centered <span class="custom-dialog">You have decided to keep listening to them.</span>',

        'I continue to listen to their pointless arguing and think why am I stuck with this two people.',
        'I start to rethink my life choices as I hold my head.',

        'As the pair argue, I notice an odd and curious sound coming from somewhere in the bushes nearby.',
        'I take note of the sound, thinking about whether to investigate it or stay focused on their current conversation.',
        'Should I investigate this noise, or keep listening to them argue? It might be nothing, but it could also be something important...',

        {
            'Choice': {
                'Dialog': 'Should you investigate?',
                'investigate': {
                    'Text': 'Investigate the sound',
                    'Do': 'jump Investigate'
                },
                'focus': {
                    'Text': 'Focus on the sound',
                    'Do': 'jump Focus'
                }
            }
        }
    ],

    'Investigate': [

        'centered <span class="custom-dialog">You have decided to investigate the noise.</span>',

        'While listening to Rioth and Bizarr argue, I hear a peculiar, faint noise from amongst the trees.',
        'I decide to investigate on my own, unsure of what it might be.',
        'However, as soon as I step few meters away from my team, a large, gnarly, bugbear ambushes me from his hiding spot.',
        'He quickly manages to bring me down in one hit.',
        'With my last breaths, I feel sheer terror as the bugbear lowers immense axe above my head and everything fades to black.',

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Ending 2 - Curiosity killed the cat</span>',

        'end'
    ],

    'Focus': [

        'centered <span class="custom-dialog">You have decided to keep focusing on the sound.</span>',

        'While listening to Rioth and Bizarr argue, my attention is drawn to a new and puzzling sound coming from beyond the bushes.',
        'It sounds like something moving nearby, and the more I listen, the louder and closer it seems to get.',
        'I focus more and realise what that awful sound is and quickly yell to my team.',

        'y Watch out! Bugbear!',

        'We all prepare for the battle as the fight begins, with the ambushing bugbear charging towards us.',

        'jump Bugbear'
    ],

    'Calm': [

        'centered <span class="custom-dialog">You have decided to calm the party down.</span>',

        'y Hey, guys, enough...youre starting to-',

        'My words get cut off by a strange noise coming from the bushes. Both Rioth and Bizarr turn around to hear it as well.',

        'b Did you guys hear that?',
        'r It is probably nothi-',

        'Bizarr and the Rioth turn to face me but see a huge Bugbear few meters behind me with a giant axe held in one hand.',
        'With a low grumbling noise coming from him, the Bugbear runs at us.',

        'r Get behind me!',

        'Without hesitation, Rioth grabs a hold of the me and Bizarr as she pushes us backwards, putting herself between the Bugbear and us.',

        'jump Bugbear'
    ],

    'Bugbear': [

        'The Bugbear comes charging in, his huge axe held up high.',
        'A low growling comes from the creature, and it seems like it might kill us right then and there.',
        'Rioth quickly moves in and manages to strike the Bugbear, making him stagger back for a moment.',
        'Bizarr also strikes it, but the impact of his sword seems to ricochet off its thick hide and it manages to strike my left arm in return.',
        'While Bizarr is busy injuring me, Rioth manages to hit the Bugbear just below the neck, sending him staggering back and leaving him vulnerable to another hit.',
        'She quickly takes advantage of the opportunity and goes to deal the finishing blow as she slams her axe in his head.',
        'As it falls to the ground, she goes to search the body for any items of value. Meanwhile I see Bizarr running to me.',

        'b Oh, uhh...sorry about the attack. It was totally an accident I swear to everything that is holy. Umm... I might have something for that.',

        'Bizarr starts going though his bag and pulls out a vial with glowing liquid.',

        'b Here you go...this healing potion should help with that. Its not the strongest one, but it should work well enough.',

        'He holds out the bottle for me to take, with a friendly expression on his face.',

        {
            'Choice': {
                'Dialog': 'Do you take the potion from your assailant?',
                'accept': {
                    'Text': 'Accept Healing Potion',
                    'Do': 'jump Accept'
                },
                'decline': {
                    'Text': 'Decline Healing Potion',
                    'Do': 'jump Decline'
                }
            }
        }
    ],

    'Decline': [

        'centered <span class="custom-dialog">You have refused the potion.</span>',

        'y Oh, well, thank you...but I dont want to take something so valuable from you.',
        'b Are you kidding?',
        'y Look, I know its an expensive healing potion, I dont want to just take it.',
        'b But Im...offering it to you. Its my way of saying sorry for nearly chopping your arm off.',
        'y Dont worry. Ill be fine.',
        'y I feel like we could really use a break. Lets set up camp for the night and get some rest.',
        'r Agreed. No point in trying to push further when were all tired and out of breath.',
        'b Exactly. Lets just take it easy for a bit, then continue tomorrow.',
        'b I can make us a meal and you two can set up the tents and rest. That work for everyone?',

        'Rioth and I both nod, as we start setting up the camp.',

        'show scene camp with fadeIn',

        'Rioth gathers up some wood from the surrounding area, carefully selecting dried branches and logs before starting to make a pile for us to use as firewood.',
        'Bizarr starts heating up a pot of soup, adding various ingredients from his pack to make a hearty meal for us to eat.',
        'I set up the bedding for us to rest for the night, setting up our bedrolls and covering them with blankets for warmth.',
        'The night is quiet, but not completely silent. We can hear the occasional rustle of leaves in the wind, and the distant cry of some nocturnal creatures.',
        'After eating the warm, hearty soup that Bizarr had made for us, we each make our way to our separate tents and settle down for the night.',
        'Rioth disappears into her tent quickly, as if eager to get some rest.',
        'Bizarr looks around for a moment before entering his own tent, a slight yawn escaping his mouth as he does.',
        'I stand in front of my tent for a moment, taking a glance around the campsite before entering and getting into my bedroll.',

        'show scene dark with fadeIn',

        'I lay there in my bedroll, slowly drifting off to sleep, when suddenly I am awoken by a strange noise.',
        'Confused and disoriented, I realize that theres a cloth covering my head, making it impossible to see.',
        'Panic starts to set in as my mind races to make sense of whats happening.I struggle weakly, trying to free myself.',
        'But my left arm is still damaged and useless, while my right arm is kept pinned down.',
        'My mind is racing, trying to figure out whats happening, when I feel the sharp pain of a blade piercing through my body.',
        'Everything goes black as I lie there, slowly losing last bits of consciousness as the pain subsides.',
        'The last thing Im aware of is a sound of voice fading away as I slip into darkness.',

        'centered <span class="custom-dialog">Ending 3 - Should have taken that potion...</span>',

        'end'
    ],

    'Accept': [

        'centered <span class="custom-dialog">You have accepted the potion.</span>',

        'I nod slightly, accepting the vial of healing potion from Bizarr.',

        'y Thank you. Sure you wont need it later ? ',
        'b No and its no problem. Its the least I could do after what happened back there.',

        'Bizarr gives a slight laugh, as if trying to lighten the mood after what he did.',

        'y I feel like we could really use a break. Lets set up camp for the night and get some rest.',
        'r Agreed. No point in trying to push further when were all tired and out of breath.',
        'b Exactly. Lets just take it easy for a bit, then continue tomorrow.',
        'b I can make us a meal and you two can set up the tents and rest. That work for everyone?',

        'Rioth and I both nod, as we start setting up the camp.',

        'show scene camp with fadeIn',

        'We all set up our camp for the night.',
        'Rioth starts gathering some firewood, Bizarr is doing soup by the looks of it and I am simply organizing and setting up bedding.',
        'Theres a moment of quiet as we settle into the campsite, and I decide to break the silence by talking to Rioth.',

        'show character r normal at left',

        'y Hey. Just wanted to say thanks for basically soloing the bugbear.',
        'r Its no problem. I didnt want any of you to get hurt on my watch.',
        'r Too bad I didnt anticipate you two would somehow injure each other or better said Bizarr would injure you.',

        'Rioth drops some firewood near the camp.',

        'r Also, Bugbears arent the toughest opponents Ive faced.',
        'y Really? So youve fought much tougher foes than that bugbear?',
        'r Yeah, Ive gone up against Ogres, Trolls, and even a few Giants before.',
        'r The giant was probably the toughest of them all, but I still managed to take them down in the end.',

        'As you pinch the last tent, Rioth gets up and wipes the sweat of her head.',

        'r Phew, finally done with that. Im gonna get some wood for the fire. Hopefully the little guy can cook well, because Im starving.',

        {
            'Choice': {
                'Dialog': 'Who deserves your help the most?',
                'wood': {
                    'Text': 'Help Rioth',
                    'Do': 'jump Wood'
                },
                'food': {
                    'Text': 'Help Bizarr',
                    'Do': 'jump Food'
                }
            }
        }
    ],

    'Wood': [

        'centered <span class="custom-dialog">You have decided to help Rioth.</span>',

        'y Ill join you. That way we can eat sooner. Im starving as well.',

        //OVDJE IDE AI

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        'jump Dream'

    ],

    'Food': [

        'centered <span class="custom-dialog">You have decided to help Bizarr.</span>',

        'y Ill go help Bizarr. That way everything is prepared sooner.',

        //OVDJE IDE AI

        'centered <span class="custom-dialog">Razgovor s AI</span>',

        'jump Dream'

    ],

    'Dream': [

        // Getting together

        'show scene night with fadeIn',

        'As the wood is brought to the campsite, you start the fire.',
        'Bizarr starts with his cooking. All three of you sit down and talk.',

        'show character r normal at left',
        'show character b normal at right',

        'When the food is done, Bizarr hands everyone a bowl and serves them their meal.',

        'b This one is a specialty from where I come from. We even have festivals with cooking competitions with this exact recipe.',
        'b I didnt win the last one, but thats cause the other guy cheated. No way in hell would I lose otherwise.',

        'He gives you plenty of hope.',
        'However, just from a simple glance at your bowl you can tell that something is off.',
        'Taking one spoonfull just confirms it.',
        '...',
        'It doesnt taste good.',

        'y Well, umm, its certainly a-',
        'r Is this a joke?',
        'b Beg your pardon?',
        'r Listen kid, Im gonna spare you my words. Hopefully your people are just insane and its not your awfull cooking skills.',
        'r Thanks for the food. Just so you know, with every bite Im gonna be wishing I was eating anything else. Ill eat it so that I dont die of starvation.',

        'Rioth finishes her serving with one swift strike.',
        'She leaves the bowl and goes to her tent while clenching her stomach.',

        'hide character r',

        'Its fairly obvious she didnt enjoy what she was eating.',

        'b I guess I was expecting too much from her. No village girl can enjoy this high class food.',
        'b What does she know anyway? Not like she can do better, right?',
        'y Lets leave it at that.',

        'You barely finish your food without making a face of disgust.',
        'Both you and Bizarr clean up the campfire as you head for your tents.',

        // Tent time

        'show scene dark with fadeIn',

        'You fall asleep fairly guickly from exhaustion.',
        'As you drift into deep slumber, you start to dream.',

        'show scene dream with fadeIn',

        'You walk around a forest, just like the one you were walking through during the day.',
        'Suddenly, he appears.',

        'show character ? normal at center',

        '? Greetings.',
        'y What the hell are you?',
        '? Do you know what they call the shadow of the second moon?',

        'Looking up at the sky, there definetly is a second mooon.</span>',
        'And yes, it somehow has a shadow.</span>',
        'centered <span class="custom-dialog">Do you know the name?</span>',

        'y Of course I dont.',
        '? They call it, MuaDIb.',
        'y You are... Muadib ? ',

        'hide character ?',
        'show character m normal at center',

        'm I am Paul... MuaDib.',
        'y Great. What are you anyway, Paul?',
        'm Well I would tell you, but it seems that someone is entering your tent as we speak.',
        'y What tent?',
        'm You are dreaming dumdum. Go and see for yourself. You will wake up soon anyway. Maybe we can continue our conversation later.',

        'hide character m',
        'show scene dark with fadeIn',

        'As you exit your dream, you wake up and see...',
        '...',
        'nothing?',
        'Your arms and legs cant move. You are slowly running out of breath.',
        'Someone is clenching you down and trying to strangle you by putting something over your head!',
        'As you grasp your situation, you calm yourself down.',
        'This is not your first time.',
        'There are a lot of bounties on your head after all.',
        'You quickly do an escape maneuver and swat the other person out of your tent.',
        'You run out of the tent, hoping to catch the culprit red handed!',

        // Outside of the tent

        'show scene night with fadeIn',

        'As you head out, the only person you see is Bizarr poking his little head out of his tent.',

        'show character b normal at right',

        'b What was that noise?',
        'y I was... attacked.',
        'r You were WHAT?',

        'Rioth bursts out of her tent.',

        'show character r normal at left',

        'r By whom! WHERE ARE THEY!',
        'y Well I expected them to be-',

        'Before you can finish your sentence, Rioth falls to her knees and clenches her stomach.',

        'r My god. It still hurts like HELL. Guess I shouldnt have eaten that. How can I even sleep like this ?',
        'r Im sorry, I think Im gonna vomit. To spare you the sight Ill do it in the forest.',

        'hide character r',

        'Rioth storms off, leaving you with a still shocked Bizarr.',

        'y Did you hear anyobody run away from the camp?',
        'b No, I must have woken up just as they were starting to leave.',
        'y I see. Well, whatever. I dealt with this stuff before so it aint that big of a deal. Just go back to sleep.',

        'show scene dark with fadeIn',

        'centered <span class="custom-dialog">Bullshit!</span>',
        'One of them wakes up just at the right time so that he can hide in his tent and claim he heard nothing?',
        'The other one didnt help me, even though she said she couldnt sleep? And now she runs off?',
        'There is only one logical conclusion from this chain of events. One of those two...',
        'y is lying!',

        'end of scene'
    ]
});