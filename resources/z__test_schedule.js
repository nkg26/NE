
// Date Schedule List
const dynamic_page_schedule = {
  "2026-10-15": "navratri-day1.html",
  "2026-10-24": "dussehra-offer.html",
  "2026-11-08": "diwali-mega-sale.html"
};

function getDynamicPage(){
    const todayStr = new Date().toISOString().split('T')[0];
    return (dynamic_page_schedule[todayStr]);
  }




