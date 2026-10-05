// var products = [];
//this variable came form products.js

// all products...
function getItemsAll() {
	return products;
}
function get_final_filtered_items() {
	return getItemsAll();
}

// all category in items
function getUniqueCategory(itemsList) {
	const uniqueCategories = [...new Set(itemsList.map(item => item.category))];
	return uniqueCategories;
}

// working fine...
function getUnique(itemsList, cat) {
	const uniqueCategories = [...new Set(itemsList.map(item => item[cat]))];
	return uniqueCategories;
}


// filter items by category 
function filterItemsByCategory(itemsList, ofCategory) {
	const filtered = itemsList.filter(p => {
		return (ofCategory === 'ALL' || p.category === ofCategory);
	});
	return filtered;
}

function filterItems_byText(itemList, searchVal) {
	if(searchVal === null || searchVal === '' || itemList === null) itemList;
	searchVal = searchVal.toLowerCase();
   	return itemList.filter(p => {
		return (p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal));
	});
}

function safeLocaleString(value, defaultValue='') {
	if(value!==null){ try{return value.toLocaleString('en-IN');}catch{}	}
	return defaultValue;
}

function safeNumber(value, defaultValue=0) {
	if(value!==null){ try{return value*1;}catch{}	}
	return defaultValue;
}

// रनटाइम सर्च फंक्शन
function dynamicFilterString(list, searchKey, searchValue) {
	var search__Test = searchValue.toLowerCase;
    return list.filter(item => {
        // यह चेक करता है कि ऑब्जेक्ट में वह 'key' मौजूद है या नहीं
        if (item[searchKey] !== undefined) {
            // केस-सेंसिटिविटी की समस्या से बचने के लिए दोनों को Lowercase में बदल कर मैच करते हैं
            return item[searchKey].toLowerCase().includes(search__Test);
        }
        return false;
    });
}

// रनटाइम सर्च फंक्शन
function dynamicFilterNumber(list, searchKey, searchValue) {
    return list.filter(item => {
        if (item[searchKey] !== undefined) 
            return item[searchKey] === searchValue;
        return false;
    });
}
function dynamicFilterNumberRange(list, searchKey, value_1, value_2) {
    return list.filter(item => {
        if (item[searchKey] !== undefined) 
            return (item[searchKey] > value_1)||(item[searchKey] < value_2);
        return false;
    });
}
function dynamicFilterNumberBelow(list, searchKey, value) {
    return list.filter(item => {
        if (item[searchKey] !== undefined) 
            return (item[searchKey] < value);
        return false;
    });
}
function dynamicFilterNumberAbove(list, searchKey, value) {
    return list.filter(item => {
        if (item[searchKey] !== undefined) 
            return (item[searchKey] > value);
        return false;
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
	return mydata;
}

