
function getnerateSimpleTable(filtered) {
  return create_basic_ItemTable(filtered);
}

function create_basic_ItemTable(ITEM_MAP_ARRAY) {
	if(ITEM_MAP_ARRAY === null) {
		return `<div> null data lisr....</div>`;
	}
	
	if(ITEM_MAP_ARRAY.length === 0) {
		return `<div>No appliances found matching your criteria.</div>`;
	}
	
	var css = `<style> 
	table.items_table thead tr{
		position: sticky; top: 0;
		background-color: #333; color: white; padding: 10px;
	}
	</style>`;
	
	var mydata = css;			
	mydata += `<table border=true cellspacing=0 class="items_table" > <thead>`;
	mydata += `<tr> <th>Category</th> <th>Capicity</th> <th>Name</th> <th>Color</th> <th>MRP</th> <th>Offer-Price</th> <th>Advance</th> </tr>`;
	mydata += `</thead> <tbody>`;
	// ₹
	ITEM_MAP_ARRAY.forEach(p => {
		mydata += `
    <tr> 
      <td class='col1'>${safeVal(p.category)}</td>
      <td class='col2'>${safeVal(p.capacity)}</td>
      <td class='col3'>${safeVal(p.name)}</td>
      <td class='col4'>${safeVal(p.color)}</td>
      <td class='col5'>${safeLocaleString(p.mrp)}</td>
      <td class='col6'>${safeLocaleString(p.offerPrice)}</td>
      <td class='col7'>${safeLocaleString(p.advance)}</td>
    </tr>
    `;
	});

	mydata += `</tbody></table>`;
	return mydata;
}

