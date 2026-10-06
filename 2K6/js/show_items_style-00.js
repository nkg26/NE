// this is interface...
/*
getUniqueCategory(getItemsAll());

*/

var this_selectedCategory = null;
var this_filter_text = null;
var this_filtered_items_cat = null;

var cat_btn_cls_selected   = "cat-btn selected"; // example
var cat_btn_cls_unselected = "cat-btn uns";  // example
var cat_btn_cls = cat_btn_cls_unselected;

/*  
function getProducts() {
  console.log(" >> getProducts() is not implemented... show_item_style-00.js");
}
*/

// help in initializing data...
function init_item_style_script(){
}

// invoked by text field on keyup...
function show_filtered_products() {
  //console.log(" >> show_filtered_products() is not implemented... show_item_style-00.js");
	var box = document.getElementById('searchInput');
	if(box !== null){
		this_filter_text = box.value.toLowerCase();
		render_and_show_items();
	} else 
		console.log(" no input search box found having id 'searchInput'.");
}

// return final showing items list.
function get_final_filtered_items() {
  //console.log(" >> get_final_filtered_items() is not implemented... show_item_style-00.js");
	if(this_filtered_items_cat === null){ setCategory(null); }	
	var filtered = this_filtered_items_cat;
	if(this_filter_text !== null)
		filtered = filterItems_byText(filtered, this_filter_text);
	return filtered;
}

function render_and_show_items() {
  //console.log(" >> show_filtered_products is not implemented... show_item_style-00.js");
	const grid = document.getElementById('productGrid');
	if(grid === null) console.log(" no item show area found of id 'productGrid'.");

	if(grid !== null){
		const srch = document.getElementById("search-msg");
		var filtered = get_final_filtered_items();

		var text = " searching.. in " + filtered.length + " items.";

		if(srch !== null) srch.innerHTML = text;
		grid.innerHTML = text;
		grid.innerHTML = (filtered.length === 0) 
						? `<div class="col-span-full text-center py-10 text-slate-500">No appliances found matching your criteria.</div>`
						: __generate_HTML_VIEW_OF_ITEMs(filtered);
		
		if(srch !== null) srch.innerHTML = (" "+ filtered.length +" items found.");
	}
}

// if we want to show items as an simple table we should override this function...
function __generate_HTML_VIEW_OF_ITEMs(itemList) {
	var output_html = "";
	itemList.forEach(p => { output_html += create_HTML_VIEW_OF_ITEM(p);});
	return output_html;
}

// most comman use to generate single item view.
function create_HTML_VIEW_OF_ITEM(p){
  console.log(` >> createHTML_of_item(${p}) is not override... show_item_style-00.js`);
  return `<div class='product_html'> no html defined... [show_items_style-00]<br/> ${p}, name = ${p.name},  category = ${p.category}</div>`;
}









function setItemFilter(filterName, filterValue) {
  console.log(` >> function invoked setItemFilter(${filterName} = ${filterValue})...`);
  if("category".includes(filterName)){
    console.log(` \t >> invoking setCategory(${filterValue})...`);
    setCategory(filterValue);
  }else{
    console.log(` >> no suitable action found...`);
  }    
}

// this function is called by the buttons-click.
function setCategory(cat) {
  // no need to override this function...
   console.log(` >> invoke setCategory(${cat})... in -- show_item_style-00.js`);
  
  // clear category buttons class value, elements having class name "selected_cat_button"
  document.querySelectorAll('.'+cat_btn_cls).forEach(btn => {btn.className = cat_btn_cls_unselected;});
  try{event.target.className = cat_btn_cls_selected; }catch{}  // update seleced class
    
  var ALL_ITEMS = getItemsAll(); // from another js
  this_selectedCategory = cat===null?"ALL":cat; // set default value...
    
  console.log(" ALL_ITEMS_COUNT = "+ALL_ITEMS.length);
  console.log("\t selected Category = "+this_selectedCategory);
    
  this_filtered_items_cat = filterItemsByCategory(ALL_ITEMS, this_selectedCategory); // from another js
  console.log(" this_filtered_items_cat = "+this_filtered_items_cat.length);
    
  // show items...
  render_and_show_items();
}



function showError(e, time=1000) {
	var err = document.getElementById("error_message");
    if(err!=null){
  		err.innerHTML = e;
  		err.style.display = "visible";
  		setTimeout(function(){document.getElementById("error_message").style.display = "none";},time); 
    }
}

// most comman use 
function createHTML_CategoryButtons(){
  // extract unique categories ...
  var uniqueCategories = getUniqueCategory(getItemsAll());
  var _buttonsHtml = '';
  _buttonsHtml = `<button class='cat-btn' onclick="setCategory('ALL')">All</button> `;
  uniqueCategories.forEach(item =>{ _buttonsHtml += ` <button class='cat-btn' onclick="setCategory('${item}')">${item}</button> `;});
  return _buttonsHtml;
}

