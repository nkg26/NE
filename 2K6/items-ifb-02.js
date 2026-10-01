
        function renderProducts() {
            const grid = document.getElementById('productGrid');
            const searchVal = document.getElementById('searchInput').value.toLowerCase();
            grid.innerHTML = '';
            grid.class = null;

            const filtered = getProducts().filter(p => {
                const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
                const matchSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
                return matchCat && matchSearch;
            });

            if(filtered.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500">No appliances found matching your criteria.</div>`;
                return;
            }
			
			var mydata = `<table border=true cellspacing=0 > `;
			mydata += `<tr> <th> Cat</th> <th> Cap</th> <th> name</th> <th> color</th> <th> mrp</th> <th> offer-price</th> <th> advance</th> <th> call</th> </tr>`;
			mydata += `<tbody style="max-height:200px; overflow=auto;">`;
            
			filtered.forEach(p => {
                const waMessage = encodeURIComponent(`Hi, \n\nI want to book ${p.name} (${p.capacity}) at Diwali Deal Price ₹${p.offerPrice.toLocaleString('en-IN')}. \nPlease confirm 30% advance booking procedure.`);
                const waUrl = `https://wa.me/917056715458?text=${waMessage}`;

                mydata += `<tr> 
				<td>${p.category}</td>
				<td>${p.capacity}</td>
				<td>${p.name}</td>
				<td>${p.color}</td>
				<td><del>₹${p.mrp.toLocaleString('en-IN')}</del></td>
				<td>₹${p.offerPrice.toLocaleString('en-IN')}</td>
				<td><strong class="text-slate-900 font-bold">₹${p.advance.toLocaleString('en-IN')}</strong></td>
				<td>
				<a href="${waUrl}" target="_blank" >
                            <i class="fab fa-whatsapp text-lg"></i> Book Now
                        </a>
				</td>
				</tr>
                `;
            });

			mydata += `</tbody></table>`;
			mydata = `<div> ${filtered.length} / ${getProducts().length} record's found.. <br/> ${mydata}</div>`;
			grid.innerHTML = mydata;

			
        }

