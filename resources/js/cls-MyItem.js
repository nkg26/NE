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
		console.log("\t function invoked... setCategory(cat)...cat="+cat);
		
		cat = (cat===null || cat===undefined || cat.trim()==='')?"ALL":cat; 
		
		this.CATEGORY_NAME = cat;
		this.CATEGORY_ITEMS = this.filter_itemByCategory(this.ALL_ITEMS, this.CATEGORY_NAME); 
		if(this.BOOL_AUTO_UPDATE_ON_CAT === true) this.showItemsAuto();
	}
	
	filter_itemByCategory(ITEMS, CATEGORY_NAME){
		console.log("\t function invoked... filter_itemByCategory(ITEMS, CATEGORY_NAME)...CATEGORY_NAME="+CATEGORY_NAME);
		return ITEMS.filter(p => {
			return (CATEGORY_NAME === 'ALL' || p.category === CATEGORY_NAME);
		});
	}

	boolHas(VAL, TXT){
		return (VAL!==null && TXT!==null && VAL !== undefined && TXT !== undefined)
		? VAL.includes(TXT) : false;
	}
	
	filter_itemByText(ITEMS, TEXT){
		console.log("\t function invoked... filter_itemByText(ITEMS, TEXT)... TEXT="+TEXT);
		return ITEMS.filter(p => {
			return (this.boolHas(p.category,TEXT) || this.boolHas(p.name,TEXT));
		});
	}
	
	
	showItemsAuto() {
		console.log("\t function invoked... showItemsAuto()...");
		this.showItems(this.getFinalFilteredItems());
	}
	
	getFinalFilteredItems(){
		console.log("\t function invoked... getFinalFilteredItems()...");

		console.log(" ALL_ITEMS_COUNT     len="+this.ALL_ITEMS.length);
		
		let items = (this.CATEGORY_ITEMS === null || this.CATEGORY_ITEMS === undefined)?this.ALL_ITEMS : this.CATEGORY_ITEMS;
		items = (items===null || items===undefined)? [] : items;
		
		console.log("\t selected Category     len="+items.length);
		
		items = (this.FILTER_TEXT===null || this.FILTER_TEXT === '')? items : this.filter_itemByText(items, this.FILTER_TEXT);
		
		console.log("\t filterd FILTER_TEXT="+ this.FILTER_TEXT+", len="+items.length);
		
		this.showItems(items);
	}


	showItems(ITEMS) {
		console.log("\t function invoked... showItems(ITEMS)...");
		console.log("\t     here... ....................................");
		console.log("\t     here... ALL_ITEMS.length = "+this.ALL_ITEMS.length);
		console.log("\t     here... CATEGORY_NAME = "+this.CATEGORY_NAME);
		console.log("\t     here... CATEGORY_ITEMS.length = "+this.CATEGORY_ITEMS.length);
		console.log("\t     here... FILTER_TEXT = "+this.FILTER_TEXT);
		console.log("\t     here... this ITEMS.length = "+ITEMS.length);


		
		this.showItems_onPage(ITEMS);
	}
	
	
		// this will show items in html..
	showItems_onPage(ITEMS) {
		console.log('no function overrided...   showItems_onPage(ITEMS).   to show output in browser.');
	}

}


