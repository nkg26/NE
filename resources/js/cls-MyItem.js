class MyItem{
  FX_TABLE = new MyTable();
  FX_REGX = new MyRegx();
  FX_FILE = new MyFile();
  FX_IMG = new MyImgs();


cat_btn_cls_selected   = "cat-btn selected"; // example
cat_btn_cls_unselected = "cat-btn uns";  // example
cat_btn_cls = "cat-btn uns";

ALL_ITEMS = [];
CATEGORY_ITEMS = null;
CATEGORY_NAME = null;
FILTER_TEXT = null; // dynamic value may change every time...
BOOL_AUTO_UPDATE_ON_CAT = true;

	// this function is called by the buttons-click.
	function setCategory(cat) {
		var ALL_ITEMS = this.ALL_ITEMS; // from another js
		CATEGORY_NAME = cat===null?"ALL":cat; // set default value...
		CATEGORY_NAME = cat===''?"ALL":cat; // set default value...
		CATEGORY_ITEMS = this.filter_itemByCategory(ALL_ITEMS, CATEGORY_NAME); 
		if(BOOL_AUTO_UPDATE_ON_CAT === true) showItems();
	}
	
	filter_itemByCategory(ITEMS, CATEGORY_NAME){
		return ITEMS.filter(p => {
			return (CATEGORY_NAME === 'ALL' || p.category === CATEGORY_NAME);
		});
	}

	boolHas(VAL, TXT){
		return (VAL!==null && TXT!==null && VAL !== undefined && TXT !== undefined)
		? VAL.includes(TXT) : false;
	}
	
	filter_itemByText(ITEMS, TEXT){
		return ITEMS.filter(p => {
			return (this.boolHas(p.category,TEXT) || this.boolHas(p.name,TEXT));
		});
	}
	

	getFinalFilteredItems(){
		let items = (CATEGORY_ITEMS === null)?this.ALL_ITEMS : CATEGORY_ITEMS;
		items = (items===null)? [] : items;
		items = (FILTER_TEXT===null || FILTER_TEXT === '')? items : this.filter_itemByText(items,FILTER_TEXT);
		this.showItems(items);
	}
	
	showItemsAuto() {
		this.showItems(getFinalFilteredItems());
	}

	showItems(ITEMS) {
		this.showItems_onPage(ITEMS);
	}
	
	
		// this will show items in html..
	showItems_onPage(ITEMS) {
		console.log('no function overrided...   showItems_onPage(ITEMS).   to show output in browser.');
	}

}


