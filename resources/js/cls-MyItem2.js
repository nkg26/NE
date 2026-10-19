class MyItem2 extends MyItem{

	update_textFilter(){
		let text = document.getElementById('searchInput').value;
		if(text !== this.FILTER_TEXT){
			this.FILTER_TEXT = text;
			this.showItemsAuto();
		}
	}

	
	// this function is called by the buttons-click.
	function setCategory(cat) {
		// clear category buttons class value, elements having class name "selected_cat_button"
		document.querySelectorAll('.'+cat_btn_cls).forEach(btn => {btn.className = cat_btn_cls_unselected;});
		try{event.target.className = cat_btn_cls_selected; }catch{}  // update seleced class
		super.setCategory(cat);
		console.log(" ALL_ITEMS_COUNT = "+ALL_ITEMS.length);
		console.log("\t selected Category = "+CATEGORY_SELECTED);
		console.log(" CATEGORY_ITEMS len = "+CATEGORY_ITEMS.length);
	}	

// this will show items in html..
	showItems_onPage(ITEMS) {
		ITEMS = (ITEMS !== null)?ITEMS:[];
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
							: this.generate_all_items_HTML_VIEW(filtered);
			
			if(srch !== null) srch.innerHTML = (" "+ filtered.length +" items found.");
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
