class NE{
	TMP = {};
	ObjMap = {};
	URL_MAP = null;
	root = "https://nkg26.github.io/NE";

	constructor(){
		// jab bhi page load hoga url me jo bhi key value pair honge save ho jayenge.
		//window.addEventListener('DOMContentLoaded', () => {URL_MAP = new URLSearchParams(window.location.search);});
		try{URL_MAP = new URLSearchParams(window.location.search); }catch(e){console.log("error in loading url key values. "+e);}

		
		var gmap_ne= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.11660193039052!2d75.94578385236622!3d28.513690161384265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912f1f0e7ead553%3A0x595360ffe3a49837!2sNitin%20Enterprises!5e0!3m2!1sen!2sin!4v1791447337649!5m2!1sen!2sin";
		var gmap_ne_ifb="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.885322660781!2d75.94255987546455!3d28.513097775730152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912f10f5c811001%3A0x8e2642e1e77c753b!2sIFB%20Point%20-%20Krantikari%20Chowk%2C%20Badhra!5e0!3m2!1sen!2sin!4v1791430886611!5m2!1sen!2sin";
		
		
		ObjMap['gmap_ne'] = gmap_ne;
		ObjMap['gmap_ne_ifb'] = gmap_ne_ifb;
		
		
		ObjMap['header.html'] = this.root+("/resources/header.html"); 
		ObjMap['footer.html'] = this.root+("/resources/footer.html"); 
		ObjMap['location.html'] = this.root+("/resources/location-ne.html"); 
		ObjMap['finance.html'] = this.root+("/resources/bajaj-finance.html"); 
	}
	
	getUrlValue(KEY){
		return this.URL_MAP===null ? null : this.URL_MAP.get(KEY);
	}
		
	/* agar key ko modify karnaho to */
	normalizeKey(KEY){
		return KEY;
	}
	
	getValue(KEY){
		return this.ObjMap[KEY];
	}
	
	/* to find key is exist in map or not*/
	existKey(MAP, KEY){
	}
	
	getPKeys(pList){
		return Object.keys(pList);
	}
	
	/* load multiple scripts in document...*/
	loadScripts(list){
		if(list){
			for(let 1=0; i<list.length; i++){
				if(list[i] && list[i] !== ''){
					const script = document.createElement('script');
					script.src = list[i]; //'https://example.com';
					script.type = 'text/javascript';
					script.async = true; // Page loading block na ho isliye async true rakhein
	//				script.onload = function() { console.log('Script successfully load ho gayi!');};
	//				script.onerror = function() {console.error('Script load hone me error aaya.');};
					document.head.appendChild(script);
				}
			}
		}
	}

	loadDefaultScripts(){
	  var root = "https://nkg26.github.io/NE";
	  let list = [
		root+ "/resources/default.js",
		root+ "/resources/redirect.js",
		root+ "/2K6/js/fx-items.js",	
		root+ "/2K6/js/products.js",	
		root+ "/2K6/js/show_items_style-00.js",
		root+ "/brands/tab-items-fx.js",	
		root+ "/brands/items_ifb.js",	
		root+ "/brands/items_mix.js",	
		root+ "/brands/items_oth.js",	
		root+ "/brands/itm-prs.js"	
	  ];
	  this.loadScripts(list);
	  
	}

}



function deleteAllCookies() {
  // Current document ki sabhi cookies ko get karke array banayein
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    // Domain aur Path ke sath delete karein
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";
  }
  console.log("Saari cookies delete ho gayi hain! - "+window.location.hostname);
}


function deleteCookie(cookieName) {
  //const cookieName = "userToken"; // Yahan apni cookie ka naam likhein

  // 1. Current page ki cookie delete karein
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";

	const iframes = document.getElementsByTagName("iframe");
	for (let i = 0; i < iframes.length; i++) {
		var frame = iframes[i];
	  try {
		 if (frame && frame.contentWindow && frame.contentWindow.document) {
		      frame.contentWindow.document.cookie = cookieName + "=; Max-Age=0; path=/;";
		    }	  
	  } catch (e) {
	    // Agar koi iframe cross-domain hoga to baki code crash nahi hoga
	    console.warn(`Frame ${i} access blocked: Cross-origin or iframe restriction:`, e.message);
	  }
	}	
  // User ko confirm karne ke liye message
  console.log("Cookie successfully delete ho gayi hai!");
  // Optionally, page ko reload karne ke liye:
  // location.reload();
}

/*
	window.frames Array ka Use Karein
	Browser aapke page par maujood sabhi frames/iframes ka ek array-like object window.frames mein rakhta hai:
	
	JavaScript
	// Pehle iframe ke window object ko access karein (index 0)
	if (window.frames.length > 0) {
	  try {
	    window.frames[0].document.cookie = "userToken=; Max-Age=0; path=/;";
	  } catch (e) {
	    console.warn("Cross-origin blocked:", e.message);
	  }
	}

⚠️ Dhyan Rakhne Yogya Baat:
Same-Origin Policy yahan bhi lagu hoti hai. Iframe chahe id se select ho ya bina id ke, agar iframe kisi alag domain ka hai, to JavaScript security restrictions ki wajah se aap uske document.cookie ko edit nahi kar payenge.

*/
