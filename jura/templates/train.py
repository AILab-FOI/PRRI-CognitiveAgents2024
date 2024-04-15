from chatterbot.trainers import ListTrainer

LOGIC_ADAPTER = [
        {
            'import_path': 'chatterbot.logic.BestMatch'
        },
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.66,
            'default_response': 'ponovi'
        }
    ]

def train(bot):
    bot.set_trainer(ListTrainer)
    chatbot = bot

	chatbot.train([
		'What are your skills?',
		'01'
	])
	chatbot.train([
		'Could you tell me about your abilities?',
		'01'
	])
	 
	chatbot.train([
		'What talents do you possess?',
		'01'
	])
	 
	chatbot.train([
		'What are you good at?',
		'01'
	])
	 
	chatbot.train([
		'Can you list your competencies?',
		'01'
	])
	 
	chatbot.train([
		'What skills do you bring to the table?',
		'01'
	])
	 
	chatbot.train([
		'What expertise do you have?',
		'01'
	])
	 
	chatbot.train([
		'Describe your skill set, please.',
		'01'
	])
	 
	chatbot.train([
		'What proficiencies do you have to offer?',
		'01'
	])
	 
	chatbot.train([
		'What strengths do you possess?',
		'01'
	])
	 
	chatbot.train([
		'What are your areas of expertise?',
		'01'
	])
	chatbot.train([
		"What is so special about you?",
		"01"
	])
	 
	chatbot.train([
		"What sets you apart from others?",
		"01"
	])
	 
	chatbot.train([
		"What makes you unique?",
		"01"
	])
	 
	chatbot.train([
		"What distinguishes you from the rest?",
		"01"
	])
	 
	chatbot.train([
		"What makes you stand out?",
		"01"
	])
	 
	chatbot.train([
		"What is exceptional about you?",
		"01"
	])
	 
	chatbot.train([
		"In what ways are you different from others?",
		"01"
	])
	 
	chatbot.train([
		"What do you bring to the table that is unique?",
		"01"
	])
	 
	chatbot.train([
		"What makes you extraordinary?",
		"01"
	])
	 
	chatbot.train([
		"What makes you particularly special?",
		"01"
	])
	 
	chatbot.train([
		"What makes you one-of-a-kind?",
		"01"
	])
	chatbot.train([
		"Are you strong?",
		"01"
	])
	 
	chatbot.train([
		"Do you possess strength?",
		"01"
	])
	 
	chatbot.train([
		"Are you powerful?",
		"01"
	])
	 
	chatbot.train([
		"Do you have great physical strength?",
		"01"
	])
	 
	chatbot.train([
		"Are you capable of handling challenges?",
		"01"
	])
	 
	chatbot.train([
		"Do you have a strong character?",
		"01"
	])
	 
	chatbot.train([
		"Are you resilient?",
		"01"
	])
	 
	chatbot.train([
		"Do you exhibit strength in adversity?",
		"01"
	])
	 
	chatbot.train([
		"Are you mentally tough?",
		"01"
	])
	 
	chatbot.train([
		"Do you have strong willpower?",
		"01"
	])
	 
	chatbot.train([
		"Are you formidable?",
		"01"
	])
	chatbot.train([
		"Can you fight?",
		"01"
	])
	 
	chatbot.train([
		"Are you capable of engaging in combat?",
		"01"
	])
	 
	chatbot.train([
		"Do you know how to defend yourself?",
		"01"
	])
	 
	chatbot.train([
		"Are you skilled in martial arts?",
		"01"
	])
	 
	chatbot.train([
		"Can you handle yourself in a physical altercation?",
		"01"
	])
	 
	chatbot.train([
		"Are you prepared for a confrontation?",
		"01"
	])
	 
	chatbot.train([
		"Do you have combat abilities?",
		"01"
	])
	 
	chatbot.train([
		"Are you trained in self-defense?",
		"01"
	])
	 
	chatbot.train([
		"Can you hold your own in a fight?",
		"01"
	])
	 
	chatbot.train([
		"Do you possess fighting skills?",
		"01"
	])
	 
	chatbot.train([
		"Are you able to defend yourself if necessary?",
		"01"
	])
	chatbot.train([
			'Is this your first mission?',
			'02'
		])
	 
	chatbot.train([
		'Have you embarked on any missions prior to this one?',
		'02'
	])
	 
	chatbot.train([
		'Is this your inaugural mission?',
		'02'
	])
	 
	chatbot.train([
		'Have you been on missions before?',
		'02'
	])
	 
	chatbot.train([
		'Is this your initial mission?',
		'02'
	])
	 
	chatbot.train([
		'Have you undertaken missions previously?',
		'02'
	])
	 
	chatbot.train([
		'Is this the first mission you have been assigned to?',
		'02'
	])
	 
	chatbot.train([
		'Have you ever participated in a mission like this before?',
		'02'
	])
	 
	chatbot.train([
		'Is this your first time on a mission?',
		'02'
	])
	 
	chatbot.train([
		'Have you had any prior mission experience?',
		'02'
	])
	 
	chatbot.train([
		'Is this the first mission you have been involved in?',
		'02'
	])
	chatbot.train([
			'How did your last mission go?',
			'02'
		])
	chatbot.train([
		'Can you share the outcome of your latest mission?',
		'02'
	])
	 
	chatbot.train([
		'What was the result of your most recent mission?',
		'02'
	])
	 
	chatbot.train([
		'How did things turn out on your last mission?',
		'02'
	])
	 
	chatbot.train([
		'Did your last mission go according to plan?',
		'02'
	])
	 
	chatbot.train([
		'What happened during your latest mission?',
		'02'
	])
	 
	chatbot.train([
		'Were there any significant events during your last mission?',
		'02'
	])
	 
	chatbot.train([
		'Can you provide an update on your last mission?',
		'02'
	])
	 
	chatbot.train([
		'What were the outcomes of your recent mission?',
		'02'
	])
	 
	chatbot.train([
		'How did things unfold during your last mission?',
		'02'
	])
	 
	chatbot.train([
		'Could you give me a summary of your last mission?',
		'02'
	])
	 
	chatbot.train([
			'What happend on your last mission?',
			'02'
		])
	 
	chatbot.train([
		'Can you tell me about your latest mission?',
		'02'
	])
	 
	chatbot.train([
		'What occurred during your most recent mission?',
		'02'
	])
	 
	chatbot.train([
		'Could you recount the events of your last mission?',
		'02'
	])
	 
	chatbot.train([
		'What transpired during your last assignment?',
		'02'
	])
	 
	chatbot.train([
		'What took place on your most recent mission?',
		'02'
	])
	 
	chatbot.train([
		'Describe what happened during your last mission.',
		'02'
	])
	 
	chatbot.train([
		'Can you give me an overview of your latest mission?',
		'02'
	])
	 
	chatbot.train([
		'What was the outcome of your last mission?',
		'02'
	])
	 
	chatbot.train([
		'What happened during your recent mission?',
		'02'
	])
	 
	chatbot.train([
		'Could you share the details of your last mission?',
		'02'
	])
	 
	chatbot.train([
			'What is your next mission in plan?',
			'02'
		])
	 
	chatbot.train([
		'What is your upcoming mission?',
		'02'
	])
	 
	chatbot.train([
		'What mission do you have planned next?',
		'02'
	])
	 
	chatbot.train([
		'What is on the agenda for your next mission?',
		'02'
	])
	 
	chatbot.train([
		'What is the next mission you have in store?',
		'02'
	])
	 
	chatbot.train([
		'What is your plan for the next mission?',
		'02'
	])
	 
	chatbot.train([
		'What is in store for your next mission?',
		'02'
	])
	 
	chatbot.train([
		'What is your next move on the mission front?',
		'02'
	])
	 
	chatbot.train([
		'What mission are you aiming for next?',
		'02'
	])
	 
	chatbot.train([
		'What is your upcoming objective in terms of missions?',
		'02'
	])
	 
	chatbot.train([
		'What is your next step in your mission plan?',
		'02'
	])
	 
	chatbot.train([
		'Approximately how many missions have you participated in with the guild?',
		'02'
	])
	 
	chatbot.train([
		'Can you estimate the number of missions you have undertaken with the guild?',
		'02'
	])
	 
	chatbot.train([
		'How many quests do you think you have completed alongside the guild?',
		'02'
	])
	 
	chatbot.train([
		'What is your estimate on the number of missions you have completed with the guild?',
		'02'
	])
	 
	chatbot.train([
		'About how many missions have you been part of with the guild?',
		'02'
	])
	 
	chatbot.train([
		'Do you have an approximate count of the missions you have joined with the guild?',
		'02'
	])
	 
	chatbot.train([
		'How many tasks have you undertaken with the guild?',
		'02'
	])
	 
	chatbot.train([
		'Can you give an estimate of the number of missions you have participated in with the guild?',
		'02'
	])
	 
	chatbot.train([
			'How many missions would you say you have been on with the guild?',
			'02'
		])
	 
	chatbot.train([
		'Roughly, how many missions have you completed with the guild?',
		'02'
	])
	 
	chatbot.train([
		'What is your estimation of the number of missions you have been on with the guild?',
		'02'
	])
	 
	chatbot.train([
			'Do you know what your next mission is going to be?',
			'02'
		])
	 
	chatbot.train([
		'Are you aware of your upcoming mission?',
		'02'
	])
	 
	chatbot.train([
		'Do you have any idea about your next mission?',
		'02'
	])
	 
	chatbot.train([
		'Have you been informed about your next mission?',
		'02'
	])
	 
	chatbot.train([
		'Do you know what task awaits you next?',
		'02'
	])
	 
	chatbot.train([
		'Are you aware of the details of your next mission?',
		'02'
	])
	 
	chatbot.train([
		'Do you know what assignment you will have next?',
		'02'
	])
	 
	chatbot.train([
		'Have you received any information about your upcoming mission?',
		'02'
	])
	 
	chatbot.train([
		'Do you know what is in store for you for your next mission?',
		'02'
	])
	 
	chatbot.train([
		'Are you prepared for your next mission?',
		'02'
	])
	 
	chatbot.train([
		'Do you have any knowledge about your upcoming task?',
		'02'
	])
	chatbot.train([
		"What is your emotional response to joining a team for the first time?",
		"03"
	])
	 
	chatbot.train([
		"Describe your feelings about embarking on your inaugural team experience.",
		"03"
	])
	 
	chatbot.train([
		"How do you perceive your sense of belonging in this new team setting?",
		"03"
	])
	 
	chatbot.train([
		"What emotions arise as you integrate into a team environment for the first time?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on your initial impressions as you begin your journey within a team framework.",
		"03"
	])
	 
	chatbot.train([
		"What thoughts come to mind regarding your inaugural team participation?",
		"03"
	])
	 
	chatbot.train([
		"Can you articulate the significance of your first team experience?",
		"03"
	])
	 
	chatbot.train([
		"How do you envision your role within the team now that you're a part of it?",
		"03"
	])
	 
	chatbot.train([
		"What expectations do you have about collaborating with others within this team context?",
		"03"
	])
	 
	chatbot.train([
		"Describe the anticipation you feel as you navigate your first team dynamic.",
		"03"
	])
	chatbot.train([
		"What have your previous collaborations been like?",
		"03"
	])
	 
	chatbot.train([
		"Could you recount your interactions with teammates in prior projects?",
		"03"
	])
	 
	chatbot.train([
		"How would you characterize your past experiences collaborating with others?",
		"03"
	])
	 
	chatbot.train([
		"Can you detail your involvement in team efforts prior to this project?",
		"03"
	])
	 
	chatbot.train([
		"What was your role like when working with others before this project?",
		"03"
	])
	 
	chatbot.train([
		"Describe the dynamics of your previous teamwork experiences.",
		"03"
	])
	 
	chatbot.train([
		"How did you navigate teamwork in previous endeavors?",
		"03"
	])
	 
	chatbot.train([
		"Reflecting on your past collaborations, what were some notable aspects?",
		"03"
	])
	 
	chatbot.train([
		"In what ways did you contribute to team efforts in your previous experiences?",
		"03"
	])
	 
	chatbot.train([
		"What lessons did you learn from your interactions with others in prior projects?",
		"03"
	])
	 
	chatbot.train([
		"How do you feel about the idea that others perceive you as intimidating?",
		"03"
	])
	 
	chatbot.train([
		"How do you react to the perception that you come across as intimidating?",
		"03"
	])
	 
	chatbot.train([
		"What is your perspective on the belief that some people find you intimidating?",
		"03"
	])
	 
	chatbot.train([
		"How does it affect you knowing that others might see you as intimidating?",
		"03"
	])
	 
	chatbot.train([
		"What is your take on the perception that you can be intimidating to others?",
		"03"
	])
	 
	chatbot.train([
		"How do you interpret the notion that some people find you intimidating?",
		"03"
	])
	 
	chatbot.train([
		"What thoughts come to mind when considering the perception that you're intimidating to some?",
		"03"
	])
	 
	chatbot.train([
		"How do you internalize the idea that people might perceive you as intimidating?",
		"03"
	])
	 
	chatbot.train([
		"What reflections do you have regarding the perception of your intimidating demeanor?",
		"03"
	])
	 
	chatbot.train([
		"How do you process the perception that others find you intimidating?",
		"03"
	])
	 
	chatbot.train([
		"In what ways do you think your personality influences team dynamics?",
		'03'
	])
	 
	chatbot.train([
		"How do you perceive the impact of your demeanor on the team is overall dynamic?",
		'03'
	])
	 
	chatbot.train([
		"What effects do you believe your behavior has on the way the team functions?",
		'03'
	])
	 
	chatbot.train([
		"How do you think your demeanor contributes to the group is interactions and productivity?",
		'03'
	])
	 
	chatbot.train([
		"What do you think is the relationship between your demeanor and the atmosphere within the team?",
		'03'
	])
	 
	chatbot.train([
		"How do you imagine your demeanor shapes the team is communication and collaboration?",
		'03'
	])
	 
	chatbot.train([
		"What do you believe are the consequences of your demeanor for the team is cohesion and effectiveness?",
		'03'
	])
	 
	chatbot.train([
		"How do you assess the influence of your personality on team morale and motivation?",
		'03'
	])
	 
	chatbot.train([
		"In what ways do you think your demeanor sets the tone for the team is interactions and decision-making processes?",
		'03'
	])
	 
	chatbot.train([
		"How do you perceive your demeanor impacting the team is ability to innovate and problem-solve?",
		'03'
	])
	 
	chatbot.train([
		"What factors do you believe contribute to how others perceive you as intimidating?",
		'03'
	])
	 
	chatbot.train([
		"In your opinion, what aspects of your demeanor might lead others to find you intimidating?",
		'03'
	])
	 
	chatbot.train([
		"Why do you think people might view you as intimidating?",
		'03'
	])
	 
	chatbot.train([
		"What do you think causes the perception of intimidation from others towards you?",
		'03'
	])
	 
	chatbot.train([
		"From your perspective, what leads others to perceive you as intimidating?",
		'03'
	])
	 
	chatbot.train([
		"What factors do you attribute to the perception of intimidation that others have towards you?",
		'03'
	])
	 
	chatbot.train([
		"What aspects of your behavior or personality do you think contribute to the perception of intimidation?",
		'03'
	])
	 
	chatbot.train([
		"In your view, what might be the underlying reasons for others seeing you as intimidating?",
		'03'
	])
	 
	chatbot.train([
		"What do you believe are the main reasons for others finding you intimidating?",
		'03'
	])
	 
	chatbot.train([
		"From your standpoint, what factors contribute to the perception of intimidation that others have of you?",
		'03'
	])
	 
	chatbot.train([
		"How does it feel to finally have someone who doesn't mind working with you as a teammate?",
		"03"
	])
	 
	chatbot.train([
		"What is your emotional response to having a teammate who is willing to work with you?",
		"03"
	])
	 
	chatbot.train([
		"Describe your feelings about having a teammate who doesn't mind collaborating with you.",
		"03"
	])
	 
	chatbot.train([
		"How do you perceive the presence of a teammate who is accepting of working with you?",
		"03"
	])
	 
	chatbot.train([
		"What emotions arise when you consider having someone who doesn't mind being your teammate?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on the significance of having a teammate who is comfortable working with you.",
		"03"
	])
	 
	chatbot.train([
		"What are your thoughts on finally having someone who is willing to work alongside you as a teammate?",
		"03"
	])
	 
	chatbot.train([
		"Can you articulate how it feels to have a teammate who doesn't mind collaborating with you?",
		"03"
	])
	 
	chatbot.train([
		"How do you interpret the experience of having someone who doesn't mind being your teammate?",
		"03"
	])
	 
	chatbot.train([
		"What is your perspective on having a teammate who is accepting of working with you?",
		"03"
	])
	 
	chatbot.train([
		"Can you share any specific instances where your intimidating demeanor affected teamwork?",
		"03"
	])
	 
	chatbot.train([
		"Describe a situation where your intimidating demeanor had an impact on teamwork.",
		"03"
	])
	 
	chatbot.train([
		"In what specific instances did your intimidating demeanor influence teamwork?",
		"03"
	])
	 
	chatbot.train([
		"Share a particular experience where your intimidating demeanor affected team dynamics.",
		"03"
	])
	 
	chatbot.train([
		"Have there been any instances where your intimidating demeanor impacted teamwork? If so, could you elaborate?",
		"03"
	])
	 
	chatbot.train([
		"Could you recount a time when your intimidating demeanor played a role in teamwork?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on any instances where your intimidating demeanor affected collaborative efforts within a team.",
		"03"
	])
	 
	chatbot.train([
		"Can you provide examples of how your intimidating demeanor has influenced teamwork in the past?",
		"03"
	])
	 
	chatbot.train([
		"How has your intimidating demeanor affected teamwork in specific situations?",
		"03"
	])
	 
	chatbot.train([
		"Share any experiences where your intimidating demeanor posed challenges to teamwork.",
		"03"
	])
	 
	chatbot.train([
		"How do you plan to navigate your perceived intimidation in future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"What strategies do you intend to use to address your perceived intimidation in future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"Describe your approach to managing your perceived intimidation in future team interactions.",
		"03"
	])
	 
	chatbot.train([
		"In what ways do you plan to handle your perceived intimidation during future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"Share your thoughts on managing your perceived intimidation in future team interactions.",
		"03"
	])
	 
	chatbot.train([
		"How do you envision addressing your perceived intimidation when interacting with future teams?",
		"03"
	])
	 
	chatbot.train([
		"Can you outline your strategies for dealing with your perceived intimidation in future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"What steps do you plan to take to mitigate your perceived intimidation in future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on your approach to managing your perceived intimidation in future team interactions.",
		"03"
	])
	 
	chatbot.train([
		"How will you navigate your perceived intimidation in future team interactions?",
		"03"
	])
	 
	chatbot.train([
		"What are your initial impressions of your teammate 'Bizarr'?",
		"03"
	])
	 
	chatbot.train([
		"Describe your first impressions of your teammate 'Bizarr'.",
		"03"
	])
	 
	chatbot.train([
		"What are your thoughts about your teammate 'Bizarr' based on your initial interactions?",
		"03"
	])
	 
	chatbot.train([
		"Share your initial thoughts and impressions about your teammate 'Bizarr'.",
		"03"
	])
	 
	chatbot.train([
		"Can you provide insights into your initial impressions of your teammate 'Bizarr'?",
		"03"
	])
	 
	chatbot.train([
		"How do you perceive your teammate 'Bizarr' after your initial interactions?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on your initial impressions of your teammate 'Bizarr'.",
		"03"
	])
	 
	chatbot.train([
		"What are your initial feelings towards your teammate 'Bizarr'?",
		"03"
	])
	 
	chatbot.train([
		"What were your first thoughts upon meeting your teammate 'Bizarr'?",
		"03"
	])
	 
	chatbot.train([
		"Share any initial observations or feelings you have about your teammate 'Bizarr'.",
		"03"
	])
	 
	chatbot.train([
		"How do you anticipate your interactions with 'Bizarr' will influence the team is dynamics?",
		"03"
	])
	 
	chatbot.train([
		"What impact do you foresee your interactions with 'Bizarr' having on the team is dynamics?",
		"03"
	])
	 
	chatbot.train([
		"In what ways do you expect your interactions with 'Bizarr' to shape the team is dynamics?",
		"03"
	])
	 
	chatbot.train([
		"Share your predictions on how your interactions with 'Bizarr' will affect the team is dynamics.",
		"03"
	])
	 
	chatbot.train([
		"Can you provide insights into how you think your interactions with 'Bizarr' will influence the team is dynamics?",
		"03"
	])
	 
	chatbot.train([
		"How do you envision your interactions with 'Bizarr' impacting the dynamics of the team?",
		"03"
	])
	 
	chatbot.train([
		"Reflect on the potential influence of your interactions with 'Bizarr' on the team is dynamics.",
		"03"
	])
	 
	chatbot.train([
		"What do you anticipate regarding the impact of your interactions with 'Bizarr' on the team?",
		"03"
	])
	 
	chatbot.train([
		"Share your thoughts on how your interactions with 'Bizarr' might shape the team is dynamics.",
		"03"
	])
	 
	chatbot.train([
		"What are your expectations regarding the influence of your interactions with 'Bizarr' on the team is dynamics?",
		"03"
	])
	chatbot.train([
		"What are some hobbies you enjoy doing in your free time?",
		"04"
	])
	chatbot.train([
		"What are some activities or hobbies you enjoy in your free time?",
		"04"
	])
	 
	chatbot.train([
		"Could you tell me about some of your favorite pastimes or hobbies?",
		"04"
	])
	 
	chatbot.train([
		"What do you like to do for fun or relaxation?",
		"04"
	])
	 
	chatbot.train([
		"Are there any specific hobbies or interests that you find yourself frequently engaged in?",
		"04"
	])
	 
	chatbot.train([
		"Can you share some of the activities or hobbies that bring you joy during your leisure time?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any particular passions or hobbies that you indulge in?",
		"04"
	])
	 
	chatbot.train([
		"What sorts of things do you enjoy doing outside of work?",
		"04"
	])
	 
	chatbot.train([
		"Are there any activities or hobbies you're particularly fond of?",
		"04"
	])
	 
	chatbot.train([
		"Could you talk a bit about the things you enjoy doing when you have free time?",
		"04"
	])
	 
	chatbot.train([
		"What hobbies or pastimes do you pursue to relax and unwind?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any particular interests or pastimes that you're passionate about?",
		"04"
	])
	 
	chatbot.train([
		"Are there any specific interests or hobbies that you feel particularly passionate about?",
		"04"
	])
	 
	chatbot.train([
		"Do you find yourself deeply passionate about any specific interests or pastimes?",
		"04"
	])
	 
	chatbot.train([
		"Are there any hobbies or interests that really ignite your passion?",
		"04"
	])
	 
	chatbot.train([
		"Could you share some of your passions when it comes to hobbies or interests?",
		"04"
	])
	 
	chatbot.train([
		"What hobbies or interests do you hold close to your heart with a strong sense of passion?",
		"04"
	])
	 
	chatbot.train([
		"Are there any specific pastimes or interests that you feel deeply passionate about?",
		"04"
	])
	 
	chatbot.train([
		"Can you tell me about any hobbies or interests that you're truly passionate about?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any hobbies or interests that you're particularly enthusiastic or passionate about?",
		"04"
	])
	 
	chatbot.train([
		"What interests or pastimes really light a fire in you with passion?",
		"04"
	])
	 
	chatbot.train([
		"Are there any hobbies or interests that you're really passionate about?",
		"04"
	])
	 
	chatbot.train([
		"Are there any unique or unusual hobbies you have pursued that you'd like to talk about?",
		"04"
	])
	 
	chatbot.train([
		"What do you typically enjoy doing during your downtime?",
		"04"
	])
	 
	chatbot.train([
		"Is there a particular activity or hobby you find yourself consistently drawn to?",
		"04"
	])
	 
	chatbot.train([
		"Have you delved into any unconventional or quirky hobbies that you'd like to share about?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any out-of-the-ordinary hobbies or interests that you're keen to talk about?",
		"04"
	])
	 
	chatbot.train([
		"Have you tried your hand at any offbeat or uncommon hobbies that you'd like to mention?",
		"04"
	])
	 
	chatbot.train([
		"Are there any peculiar or distinctive hobbies you have pursued that you're open to discussing?",
		"04"
	])
	 
	chatbot.train([
		"Have you dabbled in any unique or peculiar hobbies that you'd be willing to share?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any interesting or eccentric hobbies you have explored that you'd like to tell me about?",
		"04"
	])
	 
	chatbot.train([
		"Have you engaged in any peculiar or unconventional hobbies that you'd like to talk about?",
		"04"
	])
	 
	chatbot.train([
		"Are there any unusual or quirky hobbies you have taken up that you'd be interested in discussing?",
		"04"
	])
	 
	chatbot.train([
		"Have you pursued any hobbies that might be considered out of the ordinary and would you like to discuss them?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any hobbies that are a bit off the beaten path that you'd be open to sharing?",
		"04"
	])
	 
	chatbot.train([
		"What hobbies do you enjoy?",
		"04"
	])
	 
	chatbot.train([
		"Your passions?",
		"04"
	])
	 
	chatbot.train([
		"Any unique hobbies?",
		"04"
	])
	 
	chatbot.train([
		"Your interests?",
		"04"
	])
	 
	chatbot.train([
		"Your favorite pastimes?",
		"04"
	])
	 
	chatbot.train([
		"Your hobbies?",
		"04"
	])
	 
	chatbot.train([
		"What you love doing?",
		"04"
	])
	 
	chatbot.train([
		"Your hobbies?",
		"04"
	])
	 
	chatbot.train([
		"Any hobbies you enjoy?",
		"04"
	])
	 
	chatbot.train([
		"What is your passion?",
		"04"
	])
	 
	chatbot.train([
		"Your hobbies?",
		"04"
	])
	 
	chatbot.train([
		"Passions?",
		"04"
	])
	 
	chatbot.train([
		"Unique hobbies?",
		"04"
	])
	 
	chatbot.train([
		"What are your main interests?",
		"04"
	])
	 
	chatbot.train([
		"Could you share your hobbies?",
		"04"
	])
	 
	chatbot.train([
		"What are your passions?",
		"04"
	])
	 
	chatbot.train([
		"What activities do you enjoy?",
		"04"
	])
	 
	chatbot.train([
		"Do you have any particularly unique hobbies?",
		"04"
	])
	 
	chatbot.train([
		"Can you tell me about your favorite pastimes?",
		"04"
	])
	 
	chatbot.train([
		"What is your main area of interest?",
		"04"
	])
	 
	chatbot.train([
		"Could you list some of your hobbies?",
		"04"
	])
	 
	chatbot.train([
		"Are there any specific interests you have?",
		"04"
	])

 

