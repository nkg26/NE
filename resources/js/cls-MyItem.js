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
		
		if(BOOL_AUTO_UPDATE_ON_CAT === true) render_and_show_items();
	}
}
