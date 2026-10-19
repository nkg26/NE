class MyItem_table extends MyItem {
	cat_btn_cls_selected   = "cat-btn selected"; // example
	cat_btn_cls_unselected = "cat-btn uns";  // example
	cat_btn_cls = "cat-btn";


	update_textFilter(){
		let text = document.getElementById('searchInput').value;
		if(text !== this.FILTER_TEXT){
			console.log('\t filter text updated.. >>'+this.FILTER_TEXT+"<<  to  >>"+text+"<<");
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
	}	

// this will show items in html..
	showItems_onPage(ITEMS) {
    ITEMS = (ITEMS !== null && ITEMS !== undefined)? ITEMS : [];
		const grid = document.getElementById('productGrid');
		if(grid === null) console.log(" no item show area found of id 'productGrid'.");
	
		if(grid !== null){
  		var css = `<style> 
  			div.items-div table.items_table td{
  				border:1px solid gray; padding:3px;
  			}
  			tbody tr:nth-child(odd) { background-color: #fff2f25; }
  			tbody tr:nth-child(even) { background-color: #fff7; }
  			div.items-div table.items_table thead tr th{
  				  position: sticky;   top: 0; background:pink;			padding:3px;
  			}
  			div.items-div{
  				max-height: 85vh; /* viewport ki height ka 50% */ 
  				overflow:auto; border:1px solid seagreen;
  			}
  		</style>	`;
  		
  		var mydata = ""+css;			
  		mydata += `<div class="items-div">`;
  		mydata += `<table border=true cellspacing=0 class="items_table" > <thead>`;
  		mydata += `<tr> <th>#</th> <th>Brand</th> <th>Cat</th> <th>Size/Cap</th> <th>Name</th> <th>Color</th> <th>MRP</th> <th>Offer-Price</th> <th>Advance</th> </tr>`;
  		mydata += `</thead> <tbody>`;
  		// ₹
  		var cnt = 0;
  		ITEMS.forEach(p => {
  			mydata += `<tr> 
  			<td class='col0'>${++cnt}</td>
  			<td class='col1'>${safeVal(p.brand)}</td>
  			<td class='col1'>${safeVal(p.category)}</td>
  			<td class='col2'>${safeVal(p.capacity)}</td>
  			<td class='col3'>${safeVal(p.name)}</td>
  			<td class='col4'>${safeVal(p.color)}</td>
  			<td class='col5'>${safeLocaleString(p.mrp)}</td>
  			<td class='col6'>${safeLocaleString(p.offerPrice)}</td>
  			<td class='col7'>${safeLocaleString(p.advance)}</td>
  			</tr>`;
  		});
      mydata += `</tbody></table> </div>`;
      grid.innerHTML = mydata;
    }
}




