//beginning of Chapter 1 - On the Road

	
	//'Chapter1'
	'Continue_Story' ; [

		'beginning of Chapter 1',
		'8 hours later',
		'centered text',
		'show scene #f7f6f6 with fadeIn',
	{

		'Walking': [

			' The journey has been long and arduous, with us having traveled through dense forests and treacherous mountain paths for the past 8 hours.',
			' The air is thick with moisture, making it hard to breathe easily as we walk. ',
			' The sun is starting to set, painting the sky with hues of pink and orange as the shadows from the thick foliage slowly grow longer.',
			' Sounds of animals echo through the forest, the only sound besides the wind gently swaying the tree branches above you.',
			' You are taking careful steps as you move over the uneven terrain.',
			' The path is filled with various hazards, from loose rocks to small animals scurrying around.',
			' The thick foliage makes it hard to see further ahead, but you catch glimpses of Rioth and Bizarr walking ahead of you.',
			' Your gaze keeps shifting between the two of them, wondering if you should perhaps try and talk to at least one of your teammates.',
		
		'centered text',
		'show character in scene',
		'The thoughts about who to talk to'
		],

	'Talking': [

		'glances at the Rioth first',

			' Rioth has a stoic look on her face, her gaze firm ahead as she walks with a determined stride.', 
			' She seems more like the type to prefer to stick to herself, rather than engaging in casual conversation.',
			' But she seems like she knows what she is doing and could be a great source of advice or support if needed.',

		'glances at the Bizarr',

			' Bizarr on the other hand seems the complete opposite, with an upbeat and cheerful expression as he walks ahead.',
			' He has an air of confidence about him, as if he is open and welcoming to anyone who wants to talk to him.',
			' Should you talk with Rioth or Bizarr?'
	],

// CA converations

'Talk with Bizarr' : [
	
	'centered text',
	'show scene #f7f6f6 with fadeIn',

// Note: Note za AI razgovore: 
// Boldan text je basically što bi player trebao reći a nastavak govora/scene se automatski dodaje nakon pružanje boldanog odgovora
// (boldan text ne mora biti identičan onome što player unosi i može varirati)
	
	
	'{{player.name}}: "Hey, Bizarr! Mind if I talk to you for a minute?"', // Bold text
	 
	'show character b',
	'centered text',

	' Maybe you should just ask him why he even became a swordsman in the first place?',
	
	' b Heh, well, to be honest, I had to... kind of go where the food was when I was growing up.',
	' b My family were simple poor farmers, so I had to take whatever work I could get.',
	' b If it wasnt swords, it would have been bows, or something else..',
	' b Really, I just took up swords because it was the first opportunity I had.',
	' b But how about you?',
	' b I see you also wield a sword..',

	'show scene #f7f6f6 with fadeOut',
],

//Choice (thinking)

'Choice' :[

	' Huh?',
	' You guess that you could tell him the truth and that it was curiosity that drew you into this line of work or you could..',
	' You could simply try and not answer and look around.',
],
	 
	//Choice 1: 'Answered (+2 points)'
Choice:[
{		
'Options': [
				{
					'Text': 'Answer', // +2
					'Action': {
						'Jump': 'Continue_Story'
					}
				}
			
],
},
],


'Continue_Story': [

		'centered text',
		'show scene #f7f6f6 with fadeIn',
		'show character {{player.name}}',
		
		'{{player.name}}  I guess thats as good a reason as any.', // bold text
		'{{player.name}}  For me, I would say curiosity drew me into this line of work.', // bold text

		'centered text',

	' You have been fascinated with the unknown and the fantastical for as long as you can remember,',
	' so this feels like a great way to explore that.',
	' And sword...',
	' yeah you simply cant use bow to save your life.',

    'show scene with fadeOut',
],

// razgovori

Bizarr_joins_the_talk: [

    // Scene: Forest ,

    'Scene Forest',

    'centered text',
	'show scene #... with fadeIn', //firest 
	'show character Bizarr',

' Bizarr, who had been listening nearby, steps in and interjects the conversation between us two.',

'centered text',
'show character Bizarr',

    ' b Wait, what? You want to go the direct route?',
    
'show character Rioth',
'hide character Bizarr',
'centered text',

    ' r Well, yeah. It is the fastest way there. Is that not what we need right now?',

'centered text',
'show character Bizarr',
'hide character Rioth',

    ' b Yes, time is of the essence.',
    ' b But we should also try to not get killed immediately..',
    ' b Frontal assault cant even be counted as a plan. We need to go around and see if there are any other entrances.',
    ' b That way we can ambush the orcs!',
    ' b We would also save the hostages earlier this way, since they would probably be kept somewhere in the back of the cave.',

    ' r What good is another entrance if by the time we get there the hostages are dead, and the orcs are ready for any kind of attack?',

    ' b Well, it is not my fault that you are a giant musclehead that can not get through a simple forest!',
    ' b This so-called "plan" you came up with is so typical for someone like you.',


    ' r Listen here, wimp, Im not gonna be talked down by some kind of smartass who thinks he knows everything.',
    ' r Ive seen more combat than you, so what I say goes..',
    ' r I bet you are just scared of a little fight with the bad guys. Trying to get the easy way out for yourself, huh?',

    'show scene with fadeOut',

],

Rioth_joins_the_talk: [

'show Scene Forest ',
'centered text',
'show characters Rioth and Bizarr in scene',

    ' Rioth, who had been listening nearby, steps in and interjects the conversation between us two.',

'centered text',

    ' r Are you out of your mind?',
    ' r We dont have any time to waste, we need to take the direct route to the orcs and eliminate them as soon as possible.',

    ' b Whoa, no need to get so agitated. ',
    ' b I just thought the indirect way would be more effective...',

    ' r Theres nothing to discuss.',
    ' r We go straight to the orcs, end of story.',

    ' b Look, Im just saying that the indirect route might be more effective and help us..',

    ' r No. Theres nothing to discuss, this path will bring us faster to the cave and we are not wasting any more time on trying to find a different one.',

    ' b Look, you might have better combat skills and strength, but I know better than anyone how to navigate these mountains and forests.',
    ' b So you need to just listen to me and trust that the indirect approach will result in a better outcome.',
],
//Choices:
//[Listen to them argue]

//[Calm them down]

Choice:[
    {		
    'Options': [
                    {
                        'Text': 'Answer', 
                        'Action': {
                            'Jump': '..'
                        }
                    }
                
    ],
    },
],

Choices_Outcomes : [

'show Scene FadeIn ',
'centered text',
'show characters {{player.name}}, Rioth and Bizarr in scene',
    
'centered text',

    Choosing, 'Listen to them argue' : [

        ' You continue to listen to their pointless arguing and think why am I stuck with this two people.',
        ' And start to rethink your life choices as you hold your head',
    ],


    Choosing, 'Calm them down' : [

'centered text',

    ' {{player.name}} Hey, guys, listen up. ',
    ' {{player.name}} There is no need to start arguing about which plan is better...',
    ' {{player.name}} Its obvious that both have their merits, but the important thing right now is that-',
    ],
    
    
'centered text',

    ' Rioth and Bizarr both ignore you and continue their back-and-forth',

        
        ' r Theres nothing to discuss. We are going the usual route which is fast and simple, thats all there is to it.',
        ' b And Im saying that my way is better.',
        ' b Just trust me on this.',
        ' b We cant risk wasting any more time than we already have.'
],

//Outcomes (1.granjanje): Listen to them argue -> Strange sound appears
Choices_Outcomes:[
'centered text',

' As the pair argue, you notice an odd and curious sound coming from somewhere in the bushes nearby.',
' Take note of the sound, thinking about whether to investigate it or stay focused on their current conversation.',


' Should you investigate this noise, or keep listening to them argue?',
' It might be nothing, but it could also be something important...',
],
// AI 

Choices: [
{
'Focus_on_the_sound' :[
	
'show scene FadeIn',
'centered text',
	
' While listening to Rioth and Bizarr argue, your attention is drawn to a new and puzzling sound coming from beyond the bushes.',
' It sounds like something moving nearby, and the more you listen, the louder and closer it seems to get.',

	' {{player.name}} Hmm... pretty sure that theres something else near us now.',
	
' You focus more and realise what that awful sound is and quickly yell to your team',
	
	' {{player.name}} " Watch out! Bugbear!',
	
'You all prepare for the battle as the fight begins, with the ambushing bugbear charging towards you.',
{	

// Bad ending 2: Curiosity killed the cat
'Investigate_the_sound' : [

'show scene FadeIn',
'centered text',

' While listening to Rioth and Bizarr argue, you hear a peculiar, faint noise from amongst the trees.', 
' So you decide to investigate on your own, unsure of what it might be.',
' However, as soon as you step few meters away from your team, a large, gnarly, bugbear ambushes you from his hiding spot, quickly managing to being you down in one hit.',

' With your last breaths, you feel sheer terror as the bugbear lowers immense axe above your head and everything fades to black.',

'end scene',

// Bad ending 2: Curiosity killed the cat
],


// Choice - Calm them down -> Strange sound appears continues

'Continue_Story':
[
'show scene FadeIn',
'centered text',

	' {{player.name}} Hey, guys, enough...you are starting to-',

'centered text',
'show characters Bizarr and Rioth in scene',

' Your words get cut off by a strange noise coming from the bushes.',
' Both Rioth and Bizarr turn around to hear it as well.',


	' b Did you guys hear that?',
	' r It is probably nothi-',

'centered text',
'show characters Bizarr and Rioth in scene',

' Bizarr and the Rioth turn to face you, but see a huge Bugbear few meters behind you with a giant axe held in one hand.',
' With a low grumbling noise coming from him, the Bugbear runs towards you.',

	' r Get behind me!',

'Without hesitation, Rioth grabs a hold of the me and Bizarr as she pushes us backwards, putting herself between the Bugbear and you.',

'scene FadeOut',

],

// AI
// Decline Healing Potion - Rest - Declined Healing Potion -  Bad ending 3: Should have taken that potion...

Rest :
[
'show scene FadeIn',
'centered text',

	'{{player.name}} I feel like we could really use a break.',
	'{{player.name}} Lets set up camp for the night and get some rest.',

'show character Rioth in scene',
'centered text',

	' r Agreed.',
	' r No point in trying to push further when we are all tired and out of breath.',


'hide character Rioth',
'show character Bizarr in scene',
'centered text',

	' b Exactly.',
	' b Lets just take it easy for a bit, then continue tomorrow. I can make us a meal and you two can set up the tents and rest.',
	' b That work for everyone?',

'Rioth and you both nod, as you start setting up the camp.',

//Bad ending 3: Should have taken that potion...


' Rioth gathers up some wood from the surrounding area, carefully selecting dried branches and logs before starting to make a pile for you to use as firewood.',
' Bizarr starts heating up a pot of soup, adding various ingredients from his pack to make a hearty meal for you to eat.',
' You set up the bedding to rest for the night, setting up your bedrolls and covering them with blankets for warmth.',

' The night is quiet, but not completely silent.',
' You all can hear the occasional rustle of leaves in the wind, and the distant cry of some nocturnal creatures.',

' After eating the warm, hearty soup that Bizarr had made, each of you make your way to separate tents and settle down for the night.',

' Rioth disappears into her tent quickly, as if eager to get some rest.', 
' Bizarr looks around for a moment before entering his own tent, a slight yawn escaping his mouth as he does.',
' You stand in front of tent for a moment, taking a glance around the campsite before entering and getting into your bedroll',

' You lay there in your bedroll, slowly drifting off to sleep, when suddenly you are awoken by a strange noise.',
' Confused and disoriented, you realize that theres a cloth covering your head, making it impossible to see.',
' Panic starts to set in as mind races to make sense of whats happening.',
' You struggle weakly, trying to free yourself. ',
' But your left arm is still damaged and useless, while right arm is kept pinned down.',
' Your mind is racing, trying to figure out whats happening, when suddenly you feel the sharp pain of a blade piercing through body.',

' Everything goes black as you lie there, slowly losing last bits of consciousness as the pain subsides.',
' The last thing you are aware of is a sound of voice fading away as you slip into darkness.', 
//Bad ending 3

'scene FadeOut black'
],


//Accept Healing Potion
Rest :
[
'show scene FadeIn',
'centered text',

	' {{player.name}} I feel like we could really use a break.',
	' {{player.name}} Lets set up camp for the night and get some rest.',

'show character Rioth in scene',
'centered text',

	' r Agreed.',
	' r No point in trying to push further when we are all tired and out of breath.',


'hide character Rioth',
'show character Bizarr in scene',
'centered text',

	' b Exactly.',
	' b Lets just take it easy for a bit, then continue tomorrow. I can make us a meal and you two can set up the tents and rest.',
	' b That work for everyone?',


' Rioth and you both nod, as you start setting up the camp.',

'centered text',
'show character Rioth and Bizarr in scene',

' You all set up your camp for the night.',
' Rioth starts gathering some firewood, Bizarr is doing soup by the looks of it and you are simply organizing and setting up bedding',

' There is a moment of quiet as you settle into the campsite, and you decide to break the silence by talking to Rioth',

'centered text',
'hide character Bizarr',
'show character Rioth in scene',

	' {{player.name}} Hey. Just wanted to say thanks for basically soloing the bugbear.',

	' r Its no problem.',
	' r I didnt want any of you to get hurt on my watch.',
	' r Too bad I didnt anticipate you two would somehow injure each other or better said Bizarr would injure you.',

' Rioth drops some firewood near the camp.',

	' r Also, Bugbears arent the toughest opponents Ive faced.',

	' {{player.name}} Really? So you ve fought much tougher foes than that bugbear?',

	' r Yeah, Ive gone up against Ogres, Trolls, and even a few Giants before. ',
	' r The giant was probably the toughest of them all, but I still managed to take them down in the end.',
],

Finishing_setting_up_camp : [

	'scene FadeIn',
	'centered text',
	'show character Rioth in scene',

	' As you pinch the last tent, Rioth gets up and wipes the sweat of her head.',

		' r Phew, finally done with that.',
		' r Im gonna get some wood for the fire.',
		' r Hopefully the little guy can cook well, because Im starving.',

'scene FadeOut',
], 

// AI

// 1st option
// Help Rioth (+1 point) - 
Help_Rioth : [
'scene FadeIn',
'show character Rioth in scene',
'centered text',

	' {{player.name}} I will join you.',
	' {{player.name}} That way we can eat sooner. Im starving as well.',
],

// Talk with Rioth (+1 point)
// NOTE : If first time talking to her, the dialogue from before is here instead.
Talk_with_Rioth : [

'scene FadeIn',
'show character Rioth in scene',
'centered text',

' You feel like there is a deeper reason for her adventuring. How would you get her to tell you?',

	' {{player.name}} "Why are you really here? Surely you would have attempted something else before this?',

 	' r Curious, are ya? ',
 	' r Sure, I wll tell you, as long as you keep it between us. You know how I said that my village was never in any kind of conflict?',
 	' r Well, that made us soft. Not me... ',
 	' r I was born a rock. But the village? No real defenses or any kind of protection.',
 	' r Because of this our place, if discovered, is very susceptible to bandit raids. ',
 	' r This one band demanded that we pay a monthly tribute if we want to be left alone, or "protected" as they put it. ',
 	' r I may be strong, but I am the only one who can be considered a combatant in the vilage.',
 	' r Not much that I can do alone, besides earn money my own way to pay for the tribute.',
 	' r This is the quickest way for me to make money and send it home...',

// Talk (+2) / Stay quiet (-1)
], 

//NOTE : If not, the following dialogue takes place.
Compliment_her : [
	//(+2 points)
'scene  FadeIn',
'show character Rioth in scene',
'centered text',

' You had no idea it was something like that.',
' Nice to see someone actually has a selfless motivation here. You guess a compliment is in order!',

	' {{player.name}} Wow, thats pretty cool Rioth!',
	' r ... Thank you, ... {{player.name}}.',
],

//getting together


// 2nd option

Help_Bizarr: [
//(+1 point)
'scene FadeIn',
'show character Bizarr in scene',
'centered text',

	' {{player.name}} I wll go help Bizarr. That way everything is prepared sooner.',
],
//Talk (+1) / Stay quiet (0),
// Talk with Bizarr (+1 point) 
// NOTE: If first time talking to him, the dialogue from before is here instead.

Talk_with_Bizarr : [
//(+1point) 
'scene FadeIn',
'show character Bizarr in scene',
'centered text',

	' {{player.name}} Hey if you dont mind me asking while we prepare stuff together, but what made you become an adventurer?',

	' b Heh, well, to be honest, I had to...',
	' b kind of go where the food was when I was growing up.',
	' b My family were simple poor farmers, so I had to take whatever work I could get and cooking was a not good idea then since I used to suck at cooking.',
	' b To be honest if it was not swords, it would have been bows, or something else.',
	' b Really, I just took up swords because it was the first opportunity I had. ',

// NOTE: If not, the following dialogue takes place.
// (+2 points) Za ovo ne treba special AI voice line , samo je end of convo (didn't know how to end it here)
// Talk (+2) / Stay quiet (-1)
'centered text',
' You nod in understanding as Bizarr speaks, listening intently.',

	' {{player.name}} I see...so it was more of a matter of circumstance then.',

	' b Yeah, pretty much.',
	' b My family was poor and I just had to take whatever odd jobs I could get to make ends meet.',
	' b Swordfighting was the first opportunity that came up,...',
	' b so I went with it..',

	' {{player.name}} That makes sense.',
	' {{player.name}} I can understand having to go with what opportunities come your way.',

 	' b Exactly!',
	' b Sometimes you just got to do what you got to do to get by, ya know?',

'Bizarr and you finish preparing your part of the campsite.',
'scene FadeOut',
],


Getting_together : [

	'show scene FadeIn',
	'centered text',
	'show character Bazarr in scene',

	' As the wood is brought to the campsite, you start the fire.',
	' Bizarr starts with his cooking.',
	' All three of you sit down and talk.', 

	' When the food is done, Bizarr hands everyone a bowl and serves them their meal.',
	
		' b This one is a specialty from where I come from.',
		' b We even have festivals with cooking competitions with this exact recipe.',
		' b I didnt win the last one, but thats cause the other guy cheated. No way in hell would I lose otherwise.',
	
	' He gives you plenty of hope. However, just from a simple glance at your bowl you can tell that something is off.',
	' Taking one spoonfull just confirms it.',
	' ...',
	' It doesnt taste good.',
	
	'show character Rioth in scene',
	'centered text',

		' {{player.name}} Well, umm, its certainly a-',
		' r Is this a joke?',
		' b Beg your pardon?', 

	'hide Bizarr',
	'show character Rioth in scene',
	'centered text',

		' r Listen kid, Im gonna spare you my words.',
		' r Hopefully your people are just insane and its not your awfull cooking skills.',
		' r Thanks for the food..',
		' r Just so you know, with every bite Im gonna be wishing I was eating anything else. ', 
		' r I wll eat it so that I dont die of starvation.', 
	
	' Rioth finishes her serving with one swift strike.',
	' She leaves the bowl and goes to her tent while clenching her stomach.',
	' Its fairly obvious she didnt enjoy what she was eating.', 
	
	'hide Rioth',
	'show character Bizarr in scene',
	'centered text',

		' b I guess I was expecting too much from her.',
		' b No village girl can enjoy this high class food.. What does she know anyway?',
		' b Not like she can do better, right?',
	
		' {{player.name}} Lets leave it at that.',
	
	' You barely finish your food without making a face of disgust. Both you and Bizarr clean up the campfire as you head for your tents.',
	'scene FadeOut',
],

// new character - MuaD'Ib , MuaD'ib = m
// scene in tent
Tent_time: [
	
	'show scene FadeIn',
	'centered text',

	' You fall asleep fairly guickly from exhaustion. As you drift into deep slumber, you start to dream.',
	' You walk around a forest, just like the one you were walking through during the day. Suddenly, he appears.',
	
		' ??? Greetings.',
		' {{player.name}} What the hell are you?',
		' ???: "Do you know what they call the shadow of the second moon?',
	
	'Looking up at the sky, there definetly is a second mooon.',
	'And yes, it somehow has a shadow. Do you know the name?',

	'centered text',
	'show character MuaDib in scene',

		' {{player.name}} Of course I dont.',
		' ??? They call it, MuaDIb.',// MuaD'Ib
	
		' {{player.name}} You are... Muadib?',
	
		' m I am Paul... MuaDib.',
	
		' {{player.name}} Great...',
		' {{player.name}} What are you anyway, Paul?',
	
		' m Well I would tell you, but it seems that someone is entering your tent as we speak.',
	
		' {{player.name}} What tent?',
	
		' m You are dreaming dumdum.',
		' m Go and see for yourself.',
		' m  You will wake up soon anyway. Maybe we can continue our conversation later.',

	'hide charater MuaDib',	
	'centered text',

	'As you exit your dream, you wake up and see',
	'...',
	'nothing?',
	
	' Your arms and legs cant move.',
	' You are slowly running out of breath.',
	' Someone is clenching you down and trying to strangle you by putting something over your head!',
	
	' As you grasp your situation, you calm yourself down.',
	' This is not your first time.',
	' There are a lot of bounties on your head after all.',
	' You quickly do an escape maneuver and swat the other person out of your tent.',
	
	' You run out of the tent, hoping to catch the culprit red handed!',
	'scene FadeOut',

],


// scene = outside of tent
Outside_of_the_tent : [

'scene outside of tent FadeIn',
'show character Rioth and Bizarr in scene',
'centered text',

' As you head out, the only person you see is Bizarr poking his little head out of his tent.',

	' b What was that noise?',
	' {{player.name}} I was...',
	' {{player.name}} attacked.',
	' r You were WHAT?',

'Rioth bursts out of her tent.',

	' r By whom! WHERE ARE THEY!',
	' {{player.name}} Well I expected them to be-',

'Before you can finish your sentence, Rioth falls to her knees and clenches her stomach.',

	' r My god. It still hurts like HELL.', 
	' r Guess I shouldnt have eaten that. How can I even sleep like this? ',
	' r Im sorry, I think Im gonna vomit.',
	' r To spare you the sight I wll do it in the forest.',

' Rioth storms off, leaving you with a still shocked Bizarr.',

'hide Rioth',
'show character Bizarr in scene',
'centered text',

	' {{player.name}}  Did you hear anyobody run away from the camp?',
	' b No, I must have woken up just as they were starting to leave.',

	' {{player.name}} I see...',
	' {{player.name}} Well, whatever.',
	' {{player.name}} I dealt with this stuff before so it aint that big of a deal..',
	' {{player.name}} Just go back to sleep.',

'hide Bizarr',
//'show character {{player.name}}'??

'centered text ',

' Bullshit!',
' .. you say to yourself.',
' One of them wakes up just at the right time so that he can hide in his tent and claim he heard nothing?',
' The other one did not help me, even though she said she couldnt sleep?',
' ..And now she runs off??',

' There is only one logical conclusion from this chain of events.',
' One of those two...',
' is lying!',

'centered text',
' In the morning we need to make a choice if we will go around or directly to orcs. ',
'scene FadeOut',
'End of Chapter1'
],},
],},
],};