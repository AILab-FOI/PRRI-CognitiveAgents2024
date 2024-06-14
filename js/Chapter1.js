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
			' Sounds of animals echo through the forest, the only sound besides the wind gently swaying the tree branches above us.',
			' We are taking careful steps as we move over the uneven terrain.',
			' The path is filled with various hazards, from loose rocks to small animals scurrying around.',
			' The thick foliage makes it hard to see further ahead, but I catch glimpses of Rioth and Bizarr walking ahead of me.',
			' My gaze keeps shifting between the two of them, wondering if I should perhaps try and talk to at least one of my teammates.',
		
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
			' Should I talk with Rioth or Bizarr?'
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

	' Maybe I should just ask him why he even became a swordsman in the first place?',
	
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

	'Huh?',
	'I guess I could tell him the truth and that it was curiosity that drew me into this line of work or I could..',
	'I could simply try and not answer and look around.',

	{ 
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

{

'Continue_Story': [

		'centered text',
		'show scene #f7f6f6 with fadeIn',
		'show character {{player.name}}',
		
		'{{player.name}}  I guess thats as good a reason as any.', // bold text
		'{{player.name}}  For me, I would say curiosity drew me into this line of work.', // bold text

		'centered text',

	' I have been fascinated with the unknown and the fantastical for as long as I can remember,',
	' so this feels like a great way to explore that.',
	' And sword...',
	' yeah I simply cant use bow to save my life.',

    'show scene with fadeOut',
],

// razgovori

Bizarr_joins_the_talk: [

    // Scene: Forest ,

    'Scene Forest',

    'centered text',
	'show scene #... with fadeIn', //firest 
	'show character Bizarr',

'Bizarr, who had been listening nearby, steps in and interjects the conversation between us two.',

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

    'Rioth, who had been listening nearby, steps in and interjects the conversation between us two.',

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

    Choosing, 'Listen to them argue'  [

        ' I continue to listen to their pointless arguing and think why am I stuck with this two people.',
        ' I start to rethink my life choices as I hold my head'
    ],

'centered text',   

    Choosing, 'Calm them down': [
     
    ' {{player.name}} Hey, guys, listen up. ',
    ' {{player.name}} There is no need to start arguing about which plan is better...',
    ' {{player.name}} Its obvious that both have their merits, but the important thing right now is that-',
    ],
    
    
'centered text',

        ' Rioth and Bizarr both ignore me and continue their back-and-forth',

        
        ' r Theres nothing to discuss. We are going the usual route which is fast and simple, thats all there is to it.',
        ' b And Im saying that my way is better.',
        ' b Just trust me on this.',
        ' b We cant risk wasting any more time than we already have.'
],

//Outcomes (1.granjanje): Listen to them argue -> Strange sound appears

'centered text',

    ' As the pair argue, I notice an odd and curious sound coming from somewhere in the bushes nearby.',
    ' I take note of the sound, thinking about whether to investigate it or stay focused on their current conversation.',


' Should I investigate this noise, or keep listening to them argue?',
' It might be nothing, but it could also be something important...',
	},
],}
],}
];
