// var products = [];
//this variable came form products.js

// all products...
function getItemsAll() {
	return products;
}

/*only image path*/
function getItemImage(p) {return null;}
/*only image path*/
function getItemImages(p) {return null;}
function getItemRemark(p) {return p.remark;}
function getItemColors(p) {return p.color;}
function getItemFinish(p) {return getItemColors(p);}
function getItemVarient(p) {return null;}
function getItemFeatures(p) {return null;}

function getItemBrandName(p) {return p.brandName;}
function getItemBrandSegment(p) {return p.brandSegment;}
function getItemBrandSapCode(p) {return p.sapcode;}
function getItemStarRating(p) {return p.starRaiting;}
function getItemCapicity(p) {return p.capicity;}

function getItemBrandCategory(p) {return p.category;}


function getItemCategory(p) {return p.category;}
function getItemBuyCondition(p) {return null;}
function getItemSapCode(p) {return getItemBrandSapCode(p);}
function getItemCategory(p) {return getItemBrandCategory(p);}

function getItemName(p) {return p.nane;}
function getItemMRP(p) {return p.mrp;}
function getItemPrice(p) {return p.price;}

function getItemOfferName(p) {return null;}
function getItemOfferPrice(p) {return p.offerPrice;}
function getItemOfferAdvance(p) {return p.advance;}
function getItemOfferRemark(p) {return null;}


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

function safeVal(value, defaultValue='') {
	return (value!==null && value !== undefined)?value:defaultValue;
	//     return value ?? defaultValue; // shorter expression..
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


