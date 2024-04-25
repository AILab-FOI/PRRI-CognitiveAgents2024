var DONT = false;
var FIRST = true;
var STOP = false;

$(window).on( 'load', function(){
    counter = 0;
    
    if (navigator.userAgent.indexOf('Firefox') > -1) {
	document.getElementById('notSupported').style.display = 'block';
	document.getElementById('startupute').style.display = 'none';
	document.getElementById('questions').style.display = 'none';
	document.getElementById('output').style.display = 'none';
	document.querySelector('.video-container').style.display = 'none';
    } else {
	const output = document.getElementById('output');
	const button = document.getElementById('start');
	const record = document.getElementById('record');
	window.output = output;
	
	const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	
	
	
	
	var init = function()
	{
	    recognition = new SpeechRecognition();
	    
	    window.recognition = recognition;
	    
	    recognition.lang = 'hr-HR'; // Croatian
	    recognition.continuous = true;
	    recognition.interimResults = false;
	    
	    recognition.onresult = (event) => {
		const current = event.resultIndex;
		const transcript = event.results[current][0].transcript;
		
		window.recognition.stop();
		STOP = true;
		output.innerHTML = transcript + ' ';
		window.ws.send( transcript );
	    };
	    
	    recognition.onspeechend = () => {
		window.recognition.stop();
		//setTimeout(function(){ recognition.start(); }, 400);
	    };
	    
	    recognition.onerror = (event) => {
		window.recognition.stop();
		//setTimeout(function(){ recognition.start(); }, 400);
	    };
	}
	init();
	
	button.onclick = () => {
	    if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
		document.documentElement.mozRequestFullScreen();
	    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
		document.documentElement.webkitRequestFullscreen();
	    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
		document.documentElement.msRequestFullscreen();
	    }
	    document.querySelector('.video-container').style.display = 'block';
	    if( !isMobileBrowser() )
	    	recognition.start();
	    document.getElementById('startupute').style.display = 'none';
	    document.getElementById('questions').style.display = 'block';
	    play_part( 'tisina' );
	    question( 'bok' );
	    if( isMobileBrowser() )
	    {
		document.getElementById('record').style.display = 'block';
	    }
	};
    }

    record.onclick = () => {
	window.recognition.start();
    }

    $( '#agent' )[0].ontimeupdate = function(){
	var agent = $( '#agent' )[0];
	var the_time = agent.currentTime;
	if( the_time >= END )
	{
	    agent.pause();
	    play_part( 'tisina' );
	    if( !FIRST )
		DONT = true;
	}
	else
	{
	    DONT = false;
	}
    }
    $( '#agent' )[0].loadedmetadata = function(){
	DONT = false;
	play_part( 'tisina' );
    }
});


function connect() {
    ws = new WebSocket( 'ws://0.0.0.0:8009' );
    window.ws = ws;
    ws.onopen = function() {
	ws.send( 'connect' );
	DONT = false;
	play_part( 'tisina' );
    };
    
    
    
    ws.onmessage = function( msg ) {
	console.log( msg.data );
	console.log( msg.data.toString() );
	play_part( msg.data.toString() );
	
    };
    
    ws.onclose = function(e) {
	console.log( 'Socket is closed. Reconnect will be attempted in 1 second.', e.reason );
	setTimeout(function() {
	    connect();
	}, 1000);
    };
    
    ws.onerror = function(err) {
	console.error( 'Socket encountered error: ', err.message, 'Closing socket' );
	ws.close();
    };
}

connect();

right = { 
    'text-align': 'right',
    'width': '1000px',
    'margin-right': '-400px auto'
};

LAST_PART = ''
CUR_PART = 'tisina';
END = 278;

function play_part( part )
{
    LAST_PART = CUR_PART;
    CUR_PART = part;
    var agent = $( '#agent' )[ 0 ];
    var end = 0;
    
    agent.play()
    
    DONT = (part !== 'tisina')? true : false;
    if( part === 'tisina' ) FIRST = !FIRST
    
    recognition.stop();
    switch( part )
    {
	case '01':
	    agent.currentTime = 0;
	    end = 3.6;
	    break;
	case '02':
	    agent.currentTime = 3.6;
	    end = 11.6;
	    break;
	case '03':
	    agent.currentTime = 11.6;
	    end = 16.7;
	    break;
	case '04':
	    agent.currentTime = 16.7;
	    end = 22.6;
	    break;
	case '05':
	    agent.currentTime = 22.6;
	    end = 27.2;
	    break;
	case '06':
	    agent.currentTime = 27.2;
	    end = 34.2;
	    break;
	case '07':
	    agent.currentTime = 34.2;
	    end = 40.9;
	    break;
	case '08':
	    agent.currentTime = 40.9;
	    end = 44.6;
	    break;
	case '09':
	    agent.currentTime = 44.6;
	    end = 48.7;
	    break;
	case '10':
	    agent.currentTime = 48.7;
	    end = 53;
	    break;
	case '11':
	    agent.currentTime = 53;
	    end = 58.8;
	    break;
	case '12':
	    agent.currentTime = 58.8;
	    end = 67.3;
	    break;
	case '13':
	    agent.currentTime = 67.3;
	    end = 72;
	    break;
	case '14':
	    agent.currentTime = 72;
	    end = 77.9;
	    break;
	case '15':
	    agent.currentTime = 77.9;
	    end = 82.7;
	    break;
	case '16':
	    agent.currentTime = 82.7;
	    end = 87.5;
	    break;
	case '17':
	    agent.currentTime = 87.5;
	    end = 92.4;
	    break;
	case '18':
	    agent.currentTime = 92.4;
	    end = 100.2;
	    break;
	case '19':
	    agent.currentTime = 100.2;
	    end = 103.3;
	    break;
	case '20':
	    agent.currentTime = 103.3;
	    end = 111.2;
	    break;
	case '21':
	    agent.currentTime = 111.2;
	    end = 116;
	    break;
        case 'dobro':
            agent.currentTime = 116;
            end = 118.7;
            break;
        case 'hvala':
            agent.currentTime = 118.7;
            end = 120.6;
            break;
	case 'izvoli':
	    agent.currentTime = 120.6;
	    end = 122;
	    break;
        case 'lijepo':
            agent.currentTime = 122;
            end = 124.4;
            break;
	case 'ponovi':
	    agent.currentTime = 124.4;
	    end = 129;
	    break;
	case 'predstavljanje-dugo':
	    agent.currentTime = 129;
	    end = 142.8;
	    break;
	case 'predstavljanje-kratko':
	    agent.currentTime = 142.8;
	    end = 145.2;
	    break;
	default: // 'tisina'
	    agent.currentTime = 145.2;
	    end = 165;
	    try
	    {
		if( !isMobileBrowser() )
			window.recognition.start();
	    }
	    catch( e ){}
	    break;
    }
    
    END = end;
}


function question( q ) {
    window.recognition.stop();
    window.output.innerHTML = q + ' ';
    window.ws.send( q );
}


function isMobileBrowser() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

