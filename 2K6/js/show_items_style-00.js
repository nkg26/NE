// this is interface...
/*
getUniqueCategory(getItemsAll());

*/

var this_selectedCategory = null;
var this_filteredProduct = null;

var cat_btn_cls_selected   = "cat-btn px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 text-white whitespace-nowrap";
var cat_btn_cls_unselected = "cat-btn px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap";
var cat_btn_cls = cat_btn_cls_unselected;

  
function getProducts() {
  console.log(" >> getProducts is not implemented... show_item_style-00.js");
}

function show_filtered_products() {
  console.log(" >> show_filtered_products is not implemented... show_item_style-00.js");
}

function render_and_show_items() {
  console.log(" >> show_filtered_products is not implemented... show_item_style-00.js");
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
  event.target.className = cat_btn_cls_selected; // update seleced class
    
  var ALL_ITEMS = getItemsAll(); // from another js
  this_selectedCategory = cat===null?"ALL":cat; // set default value...
    
  console.log(" ALL_ITEMS_COUNT = "+ALL_ITEMS.length);
  console.log("\t selected Category = "+this_selectedCategory);
    
  this_filteredProduct = filterItemsByCategory(ALL_ITEMS, this_selectedCategory); // from another js
  console.log(" this_filteredProduct = "+this_filteredProduct.length);
    
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
