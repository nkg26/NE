        const products = [
				{ category: "Refrigerator", name: "ECO-COOL IFBFF-383BIKSTM", capacity: "331 L", mrp: 57100, offerPrice: 33313, advance: 17130, color: "Standard Finish"}, 
				{ category: "Refrigerator", name: "ECO-COOL IFBFF-383BIKGTM", capacity: "331 L", mrp: 58400, offerPrice: 35486, advance: 17520, color: "Standard Finish"}, 
				{ category: "Refrigerator", name: "Expert-Cool IFBFF-383BIKSTU", capacity: "331 L", mrp: 61500, offerPrice: 35486, advance: 18450, color: "Standard Finish"}, 
				{ category: "Refrigerator", name: "Expert-Cool IFBFF-383CIBSTU", capacity: "331 L", mrp: 64300, offerPrice: 37803, advance: 19290, color: "Standard Finish"}, 
				{ category: "Top Load", name: "TL800CB1SID", capacity: "8 Kg/L", mrp: 32990, offerPrice: 24247, advance: 9897, color: "Cobalt Blue"}, 
				{ category: "Top Load", name: "TL-9000G2SWID", capacity: "9 Kg/L", mrp: 37290, offerPrice: 27426, advance: 11187, color: "Onyx Grey (Sparkle)"}, 
				{ category: "WDR", name: "EXECUTIVE ZBN 9/6/3 CMS", capacity: "9/6/3", mrp: 70690, offerPrice: 51506, advance: 21207, color: "Black PCM Hairline"}, 
				{ category: "WDR", name: "EXECUTIVE PLUS ZBG 11/7/3", capacity: "11/7/3", mrp: 84690, offerPrice: 61693, advance: 25407, color: "Black Hairline"}
        ];

    function getProducts() {
			return products;
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
      return [];
		}

    function filterItems_byText(itemList, searchVal) {
      if(searchVal === null || searchVal === '' || itemList === null) itemList;
      
       return itemList.filter(p => {
            return (p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal));
        });
		}



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




