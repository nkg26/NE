// 		start_redirect(); // use this function
/*
how to implement...  
copy below div tag... 
and modify as per your requirement.
 ---------------------------------------------------------------
  <div id="redirect-timer" class="timer"> 
    <span id="redirect-message"> </span><br/>
    <span id="redirect-url-path"> </span>
  <button id="t-go" onclick="goRedirect()"> go </button>
  <button id="t-stop" onclick="stopRedirect()"> stop </button>
  </div>
 ---------------------------------------------------------------
    <script src="../resources/default.js"></script>
    <script src="https://nkg26.github.io/NE/resources/redirect.js"></script>

	<script> 
      setRedirectURL("https://www.yahoo.com");
	  setRedirectTime(5*1000);
      start_redirect(); 	
    </script>
 ---------------------------------------------------------------

*/


var redirectUrl = "https://nkg26.github.io/NE";
		var redirect_time = 60*1000;// 60 seconds
		
		// hide stop button..
		document.getElementById("t-stop").style.display="none";
		document.getElementById("redirect-timer").style.display="none";
		document.getElementById("redirect-timer").style.border="5px solid red";
		
		var redirect_Interval_ID = null;
		var redirect_cnt_timer=0;
		
		// start redirect timer
		// this will initiate all functions...
		function start_redirect(){ 
			deleteRedirectInterval(); // delete old Interval id
			// setTimeout(goRedirect, redirect_time);  // here you can skip..
			redirect_Interval_ID = setInterval(callRedirectInterval,1000);
		}
		
		// delete old redirect id
		function deleteRedirectInterval() {
			if(redirect_Interval_ID !== null){
				clearInterval(redirect_Interval_ID);
				redirect_Interval_ID=null;
			}
		}
		
		// increament counter, for internal use only
		function callRedirectInterval() {
			 redirect_cnt_timer += 1;
			 var timeLeft = (redirect_time/1000)-redirect_cnt_timer;
			 
			try{
			updateRedirect_htmlData();
			}catch (e){
				console.log("clear Interval ID = "+ redirect_Interval_ID);
				console.log("error = "+ e);
				deleteRedirectInterval();
			} 
			 if (timeLeft<=0){
				goRedirect();
			 }
		}
			
		// for internal use only
		function updateRedirect_htmlData() {
		
			 var timeLeft = (redirect_time/1000)-redirect_cnt_timer;
			document.getElementById("t-stop").style.color=((timeLeft%2)===0)?"Red":"green";
			document.getElementById("t-stop").style.display=null;
			document.getElementById("redirect-message").innerHTML = 'You will be redirect in '+timeLeft+"/"+(time/1000)+' seconds. ';
			document.getElementById("redirect-url-path").innerHTML = redirectUrl;
			if(redirect_cnt_timer>1) document.getElementById("redirect-timer").style.display=null;
		}
			
		function setRedirectTime(TIME){ 
			redirect_time = TIME; 
		}
		function setRedirectTimeCount(count){ 
			redirect_cnt_timer = count; 
		}
		
		
		function setRedirectURL(URL){ 
			redirectUrl = URL; 
		}
		
		function stopRedirect(){ 
			redirectUrl = null; 
			document.getElementById("redirect-timer").innerHTML = ''; 
		}
		
		function goRedirect(){ 
			if(redirectUrl !== null) {
				clearInterval(redirect_Interval_ID);
				document.getElementById("redirect-timer").innerHTML = 'now you are auto-move to new page...';
				window.location.href = redirectUrl;
			}
		}
			  
