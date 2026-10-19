class MyItem{
  FX_TABLE = new MyTable();
  FX_REGX = new MyRegx();
  FX_FILE = new MyFile();


cat_btn_cls_selected   = "cat-btn selected"; // example
cat_btn_cls_unselected = "cat-btn uns";  // example
cat_btn_cls = "cat-btn uns";
	
	ALL_ITEMS = [];
	CATEGORY_ITEMS = null;
	CATEGORY_NAME = null;
	FILTER_TEXT = null;
	
	BOOL_AUTO_UPDATE_ON_CAT = true;

	// this function is called by the buttons-click.
	function setCategory(cat) {
		// clear category buttons class value, elements having class name "selected_cat_button"
		document.querySelectorAll('.'+cat_btn_cls).forEach(btn => {btn.className = cat_btn_cls_unselected;});
		try{event.target.className = cat_btn_cls_selected; }catch{}  // update seleced class
		
		var ALL_ITEMS = this.ALL_ITEMS; // from another js
		CATEGORY_NAME = cat===null?"ALL":cat; // set default value...
		CATEGORY_NAME = cat===''?"ALL":cat; // set default value...
		
		console.log(" ALL_ITEMS_COUNT = "+ALL_ITEMS.length);
		console.log("\t selected Category = "+CATEGORY_SELECTED);
		
		CATEGORY_ITEMS = filterItemsByCategory(ALL_ITEMS, CATEGORY_NAME); // from another js
		console.log(" CATEGORY_ITEMS len = "+CATEGORY_ITEMS.length);
		
		if(BOOL_AUTO_UPDATE_ON_CAT === true) showItems();
	}

	getFinalFilteredItems(){
		let items = (CATEGORY_ITEMS === null)?this.ALL_ITEMS : CATEGORY_ITEMS;
		items = (FILTER_TEXT !== null)?filterItems_byText(items, FILTER_TEXT):items;
		items = (items !== null)?items:[];
	}

	showItems() {
		let items = this.getFinalFilteredItems();
		this.showItems_onPage(items);
	}
	

	// this will show items in html..
showItems_onPage(ITEMS) {
  //console.log(" >> show_filtered_products is not implemented... show_item_style-00.js");
	const grid = document.getElementById('productGrid');
	if(grid === null) console.log(" no item show area found of id 'productGrid'.");

	if(grid !== null){
		const srch = document.getElementById("search-msg");
		const filtered = ITEMS;
		var text = " searching.. in " + filtered.length + " items.";

		if(srch !== null) srch.innerHTML = text;
		grid.innerHTML = text;
		grid.innerHTML = (filtered.length === 0) 
						? `<div class="col-span-full text-center py-10 text-slate-500">No appliances found matching your criteria.</div>`
						: generate_all_items_HTML_VIEW(filtered);
		
		if(srch !== null) srch.innerHTML = (" "+ filtered.length +" items found.");
	}
}

// if we want to show items as an simple table we should override this function...
function generate_all_items_HTML_VIEW(itemList) {
	message_generating_all_items_HTML_VIEW(itemList);
	var output_html = "";
	itemList.forEach(p => { output_html += generate_one_item_HTML_VIEW(p);});
	return output_html;
}

// most comman use to generate single item view.
function generate_one_item_HTML_VIEW(p){
  console.log(` >> createHTML_of_item(${p}) is not override... show_item_style-00.js`);
  return `<div class='product_html'> no html defined... [show_items_style-00]<br/> ${p}, name = ${p.name},  category = ${p.category}</div>`;
}







	
}


