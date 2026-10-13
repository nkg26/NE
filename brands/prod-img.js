/* this will be deleted.. use*/
function getProductImage(p){
	console.log('use function get_item_img_tag(p)... instead of getProductImage(p).');
	return get_item_img_tag(p);
}


function get_item_img_tag(p){
	var cat = p.category;
	var path = 'https://nkg26.github.io/NE/product-images/';
	var name = '';
	
	var STR = p.name;
	STR = (STR===undefined)?null:STR;
	STR = (STR===null)?'':STR.trim().toUpperCase();
	
	cat = ((cat === "MIX")||(cat===null)||(cat===undefined))?(p['n-category']):cat;
	cat = ((cat === "MIX")||(cat===null)||(cat===undefined))?(p['brand-category']):cat;
	cat = ((cat === "MIX")||(cat===null)||(cat===undefined))?(p['category']):cat; // initial value..
	
	cat = ((cat===null)||(cat===undefined))?'':cat.toUpperCase(); 
	
	if(cat === "CD") name = "cd.webp";
	else if(cat === "DW") name = "dw.webp";
	else if(cat === "AC") name = "ac-split.webp";
	
	else if(cat === "OVEN") name = "oven.webp";
	else if(cat === "LED TV") name = "led-tv.webp";
  
	else if(cat === "GEYSER-STORAGE") name = "gyser-electric.webp";
	else if(cat === "GEYSER-GAS") name = "gyser-gas.webp";
	else if(cat === "GEYSER-INSTANT") name = "gyser-instant.webp";
  
	else if((cat === "MG") && STR.includes("JUICER MIXER")) name="mg.webp";
	else if((cat === "MG")) name = "mg.webp";
	else if((cat === "JMG") && STR.includes("JMG")) name="jmg.webp";
	else if((cat === "JMG") && STR.includes("SUJATA")) name="jmg-sujata.webp";
	
	else if((cat === "LED") || (cat === "LED-TV")) name="led-tv.webp";
	
		else if(cat === "WDR") name="wm-wdr.webp";
		else if(cat === "FL") name="wm-fl.webp";
		else if(cat === "TL") name="wm-tl.webp";
		else if(cat === "WM-FL") name="wm-fl.webp";
		else if(cat === "WM-TL") name="wm-tl.webp";
		else if(cat === "WM-SEMI") name="wm-semi.webp";

		else if((cat === "WM") && STR.includes("EXECUTIVE")) name="wm-fl.webp";
		else if((cat === "WM") && STR.includes("SENATOR")) name="wm-fl.webp";
		else if((cat === "WM") && STR.includes("SERENA")) name="wm-fl.webp";
		else if((cat === "WM") && STR.includes("11/7/3")) name="wm-wdr.webp";
		else if((cat === "WM") && STR.includes("10/7/3")) name="wm-wdr.webp";
		else if((cat === "WM") && STR.includes("9/6/3")) name="wm-wdr.webp";
		else if((cat === "WM") && STR.startsWith("TL")) name="wm-tl.webp";
		else if((cat === "WM")) name="wm-semi.webp";
  
		else if(cat === "REF") {
			if(STR.includes("IFBDC")) name="ref-1d.webp";
			else if(STR.includes("IFB-DC")) name="ref-1d.webp";
			else if(STR.includes("IFBFF")) name="ref-2d.webp";
			else if(STR.includes("IFB-FF")) name="ref-2d.webp";
		}
  		
		if(STR.includes("ELECTRIC KETTAL")) name = "kettle-electric.webp";// wrong name
		if(STR.includes("ELECTRIC KETTLE")) name = "kettle-electric.webp";
		
		if(STR.includes(" RO")) name = "ro.webp";
		if(STR.includes("LED TV")) name = "led-tv.webp";
		if(STR.includes("INFRARED")) name = "infrared.webp";
		if(STR.includes("INDUCTION")) name = "induction.webp";
		if(STR.includes("VIC")) name = "induction.webp";

		if(STR.includes("GAS GYSER")) name = "gyser-gas.webp";
		if(STR.includes("ELECTRIC GYSER")) name = "gyser-electric.webp";

		if(STR.includes("AIRFRER")) name = "air-fryer.webp";
		if(STR.includes("AIRFRYER")) name = "air-fryer.webp";
		if(STR.includes("AIR-FRYER")) name = "air-fryer.webp";

		
		if(STR.includes("FAN")) name="fan-ceiling.webp";
		if(STR.includes("FAN") && STR.includes("BLDC") ) name="fan-ceiling-bldc.webp";
		if(STR.includes("WALL-FAN") ) name="fan-wall.webp";
		

	
	return `<img src='${path}${name}' alt='${name.replace(".webp","")}' />`;
}	


/*       */


/*       */
