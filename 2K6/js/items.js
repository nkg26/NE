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


// override for tabular format...

function getnerateSimpleTable(filtered) {
	if(filtered === null) {
		return `<div> null data lisr....</div>`;
	}
	
	if(filtered.length === 0) {
		return `<div>No appliances found matching your criteria.</div>`;
	}
	
	var css = `<style> 
	.productGrid table{
		border:2px dotted cyan;
	}
	.productGrid table tr{
		border:1px solid red;
		padding:3px;
	}
	</style>`;
	
	var mydata = ""+css;			
	mydata += `<table border=true cellspacing=0 class="items_table" > <theader>`;
	mydata += `<tr> <th>Category</th> <th>Capicity</th> <th>Name</th> <th>Color</th> <th>MRP</th> <th>Offer-Price</th> <th>Advance</th> </tr>`;
	mydata += `</theader> <tbody>`;
	// ₹
	filtered.forEach(p => {
		//const waMessage = encodeURIComponent(`Hi, \n\nI want to book ${p.name} (${p.capacity}) at Diwali Deal Price ₹${p.offerPrice.toLocaleString('en-IN')}. \nPlease confirm 30% advance booking procedure.`);
		//const waUrl = `https://wa.me/917056715458?text=${waMessage}`;

		mydata += `<tr> 
		<td class='col1'>${p.category}</td>
		<td class='col2'>${p.capacity}</td>
		<td class='col3'>${p.name}</td>
		<td class='col4'>${p.color}</td>
		<td class='col5'>${p.mrp.toLocaleString('en-IN')}</td>
		<td class='col6'>${p.offerPrice.toLocaleString('en-IN')}</td>
		<td class='col7'>${p.advance.toLocaleString('en-IN')}</td>
		</tr>`;
	});

	mydata += `</tbody></table>`;
	mydata = `<div> ${filtered.length} / ${getProducts().length} record's found.. <br/> ${mydata}</div>`;
	return mydata;
}

