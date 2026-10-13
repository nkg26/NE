function getProductImage(p){
	var cat = p.category;
	var path = 'https://nkg26.github.io/NE/product-images/';
	var name = '';
  
	if(cat === "WM") cat="WM-SEMI";
  
	if(cat === "REF") path = "Refrigerator";
	if(cat === "OVEN") path = "Microwave Oven";
	if(cat === "LED") path = "LED TV";
	if(cat === "CD") path = "Cloth Dryer";
  
	if(cat === "WM-WDR") name = "wm-wdr.webp";
	if(cat === "WM-TL") return "wm-tl.webp";
	if(cat === "WM-FL") return "wm-fl.webp";
	if(cat === "WM-SEMI") return "wm-semi.webp";
  
	return `<img src='${path}${name}' alt='${name}' />`;
}	
