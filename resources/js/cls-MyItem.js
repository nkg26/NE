class MyItem{
	FX_TABLE = new MyTable();
	FX_REGX = new MyRegx();
	FX_FILE = new MyFile();
	FX_IMG = new MyImgs();

	ALL_ITEMS = [];
	CATEGORY_ITEMS = null;
	CATEGORY_NAME = null;
	FILTER_TEXT = null; // dynamic value may change every time...
	BOOL_AUTO_UPDATE_ON_CAT = true;

	// this function is called by the buttons-click.
	setCategory(cat) {
		this.CATEGORY_NAME = cat===null?"ALL":cat; // set default value...
		this.CATEGORY_NAME = cat===''?"ALL":cat; // set default value...
		this.CATEGORY_ITEMS = this.filter_itemByCategory(this.ALL_ITEMS, this.CATEGORY_NAME); 
		if(this.BOOL_AUTO_UPDATE_ON_CAT === true) this.showItems();
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
		console.log(" ALL_ITEMS_COUNT     len="+this.ALL_ITEMS.length);
		
		let items = (this.CATEGORY_ITEMS === null)?this.ALL_ITEMS : this.CATEGORY_ITEMS;
		items = (items===null || items===undefined)? [] : items;
		
		console.log("\t selected Category     len="+items.length);
		
		items = (this.FILTER_TEXT===null || this.FILTER_TEXT === '')? items : this.filter_itemByText(items, this.FILTER_TEXT);
		
		console.log("\t filterd FILTER_TEXT="+ this.FILTER_TEXT+", len="+items.length);
		
		this.showItems(items);
	}
	
	showItemsAuto() {
		this.showItems(this.getFinalFilteredItems());
	}

	showItems(ITEMS) {
		this.showItems_onPage(ITEMS);
	}
	
	
		// this will show items in html..
	showItems_onPage(ITEMS) {
		console.log('no function overrided...   showItems_onPage(ITEMS).   to show output in browser.');
	}

}


