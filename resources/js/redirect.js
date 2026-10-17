// 		start_redirect(); // use this function
/*
how to implement...  
copy below div tag... 
and modify as per your requirement.
 ---------------------------------------------------------------
  <div id="redirect-timer" class="timer"> 
    <span id="redirect-message"> </span><br/>
    <span id="redirect-url-path"> </span>
  <button id="t-go" onclick="Redirect_GO()"> go </button>
  <button id="t-stop" onclick="Redirect_STOP()"> stop </button>
  </div>
 ---------------------------------------------------------------
    <script src="../resources/default.js"></script>
    <script src="https://nkg26.github.io/NE/resources/redirect.js"></script>

	<script> 
		Redirect_InsertDefaultHTML(ID);
		Redirect_InitDefaultSetting();		
	    Redirect_setURL("https://www.yahoo.com");
		Redirect_setTime(5*1000);
	    Redirect_START(); 	
    </script>
 ---------------------------------------------------------------

*/

function Redirect_InsertDefaultHTML(ID){
	document.getElementById(ID).innerHTML = Redirect_getDefaultHTML(); 
}

function Redirect_getDefaultHTML(){
	return `<div id="redirect-timer" class="timer">
				<span id="redirect-message"> </span><br/>
				<span id="redirect-url-path"> </span>
				<button id="t-go" onclick="Redirect_GO()"> go </button>
				<button id="t-stop" onclick="Redirect_STOP()"> stop </button>
			</div> `;
}

function Redirect_InitDefaultSetting(){
	// hide stop button..
	document.getElementById("t-stop").style.display="none";
	document.getElementById("redirect-timer").style.display="none";
	//document.getElementById("redirect-timer").style.border="5px solid red";
}

var redirect_URL = "https://nkg26.github.io/NE";
var redirect_time = 60*1000;// 60 seconds
var redirect_Interval_ID = null;
var redirect_cnt_timer=0;
	
// start redirect timer
// this will initiate all functions...
function Redirect_START(){ 
	Redirect_deleteOldInterval(); // delete old Interval id
	// setTimeout(Redirect_GO, redirect_time);  // here you can skip..
	// redirect_Interval_ID = setInterval(Redirect_callInterval,1000);
	Redirect_createInterval();
}

// delete old redirect inverval id
function Redirect_deleteOldInterval() {
	if(redirect_Interval_ID !== null){
		console.log(" << deleting old REDIRECT-INTERVAL-ID = "+ redirect_Interval_ID);
		clearInterval(redirect_Interval_ID);
		redirect_Interval_ID=null;
	}
}

// delete old redirect inverval id
function Redirect_createInterval() {
	Redirect_deleteOldInterval();
	redirect_Interval_ID = setInterval(Redirect_callInterval,1000);
	console.log(" >> create new REDIRECT-INTERVAL-ID = "+ redirect_Interval_ID);
	return redirect_Interval_ID;
}


// increament counter, for internal use only
function Redirect_callInterval() {
	 redirect_cnt_timer += 1;
	 var timeLeft = (redirect_time/1000)-redirect_cnt_timer;
	 
	try{
		Redirect_updateHTML();
	}catch (e){
		console.log("clear Interval ID = "+ redirect_Interval_ID);
		console.log("error = "+ e);
		Redirect_deleteOldInterval();
	} 
	 if (timeLeft<=0){
		Redirect_GO();
	 }
}
	
// for internal use only
function Redirect_updateHTML() {
	 var timeLeft = (redirect_time/1000)-redirect_cnt_timer;
	document.getElementById("t-stop").style.color=((timeLeft%2)===0)?"Red":"green";
	document.getElementById("t-stop").style.display=null;
	document.getElementById("redirect-message").innerHTML = 'You will be redirect in '+timeLeft+"/"+(redirect_time/1000)+' seconds. ';
	document.getElementById("redirect-url-path").innerHTML = redirect_URL;
	if(redirect_cnt_timer>1) document.getElementById("redirect-timer").style.display=null;
}
	
function Redirect_setTime(TIME){ 
	redirect_time = TIME; 
}
function Redirect_setTimeCount(count){ 
	redirect_cnt_timer = count; 
}


function Redirect_setURL(URL){ 
	redirect_URL = URL; 
}

function Redirect_STOP(){ 
	redirect_URL = null; 
	document.getElementById("redirect-timer").innerHTML = ''; 
}

function Redirect_GO(){ 
	if(redirect_URL !== null) {
		clearInterval(redirect_Interval_ID);
		document.getElementById("redirect-timer").innerHTML = 'now you are auto-move to new page...';
		window.location.href = redirect_URL;
	}
}
			  
