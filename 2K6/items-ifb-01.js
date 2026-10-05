//  delete........................


var products = [
	{ category: "Cloth Dryer", name: "TURBO DRY", capacity: "5.5", mrp: 27790, offerPrice: 21658, advance: 8337, color: "White"}, 
	{ category: "Top Load", name: "TL100IN3SWID", capacity: "10 Kg/L", mrp: 43290, offerPrice: 31858, advance: 12987, color: "Inox"}, 
	{ category: "WDR", name: "WDR EXECUTIVE ZMN 9/6/3 CMS", capacity: "9/6/3", mrp: 69490, offerPrice: 50595, advance: 20847, color: "Mocha"}, 
	{ category: "WDR", name: "EXECUTIVE ZBN 9/6/3 CMS", capacity: "9/6/3", mrp: 70690, offerPrice: 51506, advance: 21207, color: "Black PCM Hairline"}, 
	{ category: "WDR", name: "EXECUTIVE PLUS ZBG 11/7/3", capacity: "11/7/3", mrp: 84690, offerPrice: 61693, advance: 25407, color: "Black Hairline"}
];

        let selectedCategory = 'ALL';

        function getProducts() {
			return products;
		}

        function renderProducts() {
            const grid = document.getElementById('productGrid');
			if(grid === null){
				console.log("null element having id productGrid");
				return;
			}
            var searchVal = '';
			try{
				var el = document.getElementById('searchInput');
				searchVal = el===null?'':el.value.toLowerCase();
			}catch(e){
				console.log(e);
			}
            grid.innerHTML = '';

            const filtered = getProducts().filter(p => {
                const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
                const matchSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
                return matchCat && matchSearch;
            });

            if(filtered.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500">No appliances found matching your criteria.</div>`;
                return;
            }

            filtered.forEach(p => {
                const waMessage = encodeURIComponent(`Hi, \n\nI want to book ${p.name} (${p.capacity}) at Diwali Deal Price ₹${p.offerPrice.toLocaleString('en-IN')}. \nPlease confirm 30% advance booking procedure.`);
                const waUrl = `https://wa.me/917056715458?text=${waMessage}`;

                grid.innerHTML += `
                    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 border border-slate-100 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-2">
                                <span class="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">${p.category}</span>
                                <span class="text-xs text-slate-400 font-medium">${p.capacity}</span>
                            </div>
                            <h3 class="font-bold text-slate-800 text-lg mb-1">${p.name}</h3>
                            <p class="text-xs text-slate-500 mb-4">Color: ${p.color}</p>
                            
                            <div class="bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                                <div class="flex justify-between text-xs text-slate-500 mb-1">
                                    <span>MRP: <del>₹${p.mrp.toLocaleString('en-IN')}</del></span>
                                    <span class="text-emerald-600 font-semibold">Special Diwali Pass</span>
                                </div>
                                <div class="text-2xl font-extrabold text-amber-600">
                                    ₹${p.offerPrice.toLocaleString('en-IN')}
                                </div>
                                <div class="mt-2 text-xs text-slate-600 pt-2 border-t border-slate-200 flex justify-between">
                                    <span>30% Advance Booking:</span>
                                    <strong class="text-slate-900 font-bold">₹${p.advance.toLocaleString('en-IN')}</strong>
                                </div>
                            </div>
                        </div>

                        <a href="${waUrl}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-center text-sm flex items-center justify-center gap-2 transition">
                            <i class="fab fa-whatsapp text-lg"></i> Book Now at 30% Advance
                        </a>
                    </div>
                `;
            });
        }

        function setCategory(cat) {
            selectedCategory = cat;
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.className = "cat-btn px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap";
            });
            event.target.className = "cat-btn px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 text-white whitespace-nowrap";
            renderProducts();
        }

        function filterProducts() {
            renderProducts();
        }
