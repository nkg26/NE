
var URL_HTML_ALL_PRODUCTS = FULL_URL("/2K26/all-products.html");  /* from com.js*/
var URL_HTML_HEADER = FULL_URL("/resources/header.html"); 
var URL_HTML_FOOTER = FULL_URL("/resources/footer.html"); 
var URL_HTML_LOCATION_NE = FULL_URL("/resources/location-ne.html"); 
var URL_HTML_BAJAJ_FINANCE = FULL_URL("/resources/bajaj-finance.html"); 
var URL_HTML_HOME = FULL_URL("/"); 




function loadHeaderHTML(){
  try{
  read_and_insert_html('header-placeholder', URL_HTML_HEADER);
  }catch(e){console.log(" error in loading header data.."+e);}
}

function loadFooterHTML(){
  try{
  read_and_insert_html('footer-placeholder', URL_HTML_FOOTER);
  }catch(e){console.log(" error in loading header data.."+e);}
}

function read_and_insert_html(ID, FILE_PATH){
  document.getElementById(ID).innerHTML = readHTML(FILE_PATH);
}

