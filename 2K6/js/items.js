// var products = [];
//this variable came form products.js

// all products...
function getProducts() {
	return products;
}
// function renderProducts() {
// 	console.log("renderProducts() function is not implemented by script...");
// }

// temp js object
var temp_map = {};
// return array for saved database to speed-up..
function getProducts_Category(category) {
	var out = temp_map.category;
	if(out === null){
		temp_map.category = (out = filterProducts_Category(category));
	}
	return out;
}

// filter items by category exist in database
function filterProducts_Category(category) {
	const filtered = getProducts().filter(p => {
		return (selectedCategory === 'ALL' || p.category === selectedCategory);
	});
	return filtered;
}

// all category exist in database
function getAllCategory() {
	const uniqueCategories = [...new Set(productList.map(item => item.category))];
	return uniqueCategories;
}

function filterItems_byText(itemList, searchVal) {
	if(searchVal === null || searchVal === '' || itemList === null) itemList;
	searchVal = searchVal.toLowerCase();
   	return itemList.filter(p => {
		return (p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal));
	});
}


/*
function getProducts(category, searchVal) {
	searchVal = searchVal===null?"":searchVal;
	// step 1 - get filtered list..
	const filtered = getProducts().filter(p => {
		const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
		const matchSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
		return matchCat && matchSearch;
	});
	return filtered;
}
*/



