var gmap_ne= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.11660193039052!2d75.94578385236622!3d28.513690161384265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912f1f0e7ead553%3A0x595360ffe3a49837!2sNitin%20Enterprises!5e0!3m2!1sen!2sin!4v1791447337649!5m2!1sen!2sin";
var gmap_ne_ifb="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.885322660781!2d75.94255987546455!3d28.513097775730152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912f10f5c811001%3A0x8e2642e1e77c753b!2sIFB%20Point%20-%20Krantikari%20Chowk%2C%20Badhra!5e0!3m2!1sen!2sin!4v1791430886611!5m2!1sen!2sin";
var shop_img_ne="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkl8TkuMdyM1wAMzNcE4a6aDsJb108WHfisCit7gZ6TGv3hfyhP4bfOGqmylJE8ou5lnwVBnwZ_BVUC4QqXdw_gxe8YgL4fFIROSVJkRksvsHKhLABt5Y9gtGeP_9YV7LpIiDwiG7A_AXS-=w408-h356-k-no";
var shop_img_ne_01=shop_img_ne;



const WEB_HOME = "https://nkg26.github.io/NE";
function FULL_URL(path){
  if(path.startsWith(WEB_HOME)) return path;

  var pre_key = "https://github.com/nkg26/NE";
  var _key = pre_key+"/blob/main";
  if(path.startsWith(_key)) {
    var post = path.substring(_key.length, path.length-(_key.length));
    return WEB_HOME+post;
  }
  _key = pre_key+"/edit/main";
  if(path.startsWith(_key)) {
    var post = path.substring(_key.length, path.length-(_key.length));
    return WEB_HOME+post;
  }
  if(path.startsWith("https://")) return path;
  if(path.startsWith("http://")) return path;
  if(path.startsWith("/")) return WEB_HOME+path;

  //https://github.com/nkg26/NE/blob/main/resources/bajaj-finanace.html


}


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




