class MyItem2 extends MyItem{
	cat_btn_cls_selected   = "cat-btn selected"; // example
	cat_btn_cls_unselected = "cat-btn uns";  // example
	cat_btn_cls = "cat-btn";


	update_textFilter(){
		let text = document.getElementById('searchInput').value;
		if(text !== this.FILTER_TEXT){
			this.FILTER_TEXT = text;
			this.showItemsAuto();
		}
	}

	
	// this function is called by the buttons-click.
	setCategory(cat) {
		// clear category buttons class value, elements having class name "selected_cat_button"
		document.querySelectorAll('.'+this.cat_btn_cls).forEach(btn => {btn.className = this.cat_btn_cls_unselected;});
		try{event.target.className = this.cat_btn_cls_selected; }catch{}  // update seleced class
		super.setCategory(cat);
		console.log(" ALL_ITEMS.length = "+this.ALL_ITEMS.length);
		console.log("\t CATEGORY_NAME = "+this.CATEGORY_NAME);
		console.log("\t CATEGORY_ITEMS.length = "+this.CATEGORY_ITEMS.length);
	}	

// this will show items in html..
	showItems_onPage(ITEMS) {
		ITEMS = (ITEMS !== null && ITEMS !== undefined)? ITEMS : [];
		const grid = document.getElementById('productGrid');
		if(grid === null) console.log(" no item show area found of id 'productGrid'.");
	
		if(grid !== null){
			const srch = document.getElementById("search-msg");
			let text = " searching.. in " + ITEMS.length + " items.";
	
			if(srch !== null) srch.innerHTML = text;
			grid.innerHTML = text;
			grid.innerHTML = (ITEMS.length === 0) 
							? '<div class="col-span-full text-center py-10 text-slate-500">No appliances found matching your criteria.</div> ITEMS.length = ' + ITEMS.length
							: this.generate_all_items_HTML_VIEW(ITEMS);
			
	 	 	console.log(" >> grid.innerHTML \n "+grid.innerHTML);
	 	 	console.log(" >> ---------------------------------------- << ");
			if(srch !== null) srch.innerHTML = (" "+ ITEMS.length +" items found.");
		}
	}
	
	// if we want to show items as an simple table we should override this function...
	generate_all_items_HTML_VIEW(itemList) {
		//message_generating_all_items_HTML_VIEW(itemList);
		var output_html = "";
		itemList.forEach(p => { output_html += this.generate_one_item_HTML_VIEW(p);});
		return output_html;
	}
	
	// most comman use to generate single item view.
	generate_one_item_HTML_VIEW(p){
	  console.log(` >> createHTML_of_item(${p}) is not override... show_item_style-00.js`);
	  return `<div class='product_html'> no html defined... [show_items_style-00]<br/> ${p}, name = ${p.name},  category = ${p.category}</div>`;
	}
}
