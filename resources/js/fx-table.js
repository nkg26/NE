function findHeaderIndex(TABLE, FIND){
  try{
  if(FIND !== null && TABLE !== null && TABLE[0] !== null){
    for(var i=0;i<TABLE[0].length;i++){
      if(FIND === TABLE[0][i]) return i;
    }
  }
  }catch(e){console.log(e);}
  return -1;
}




// convert text into 2D array
function splitTextToTable(content, trim=false){
	//console.log('   ---   convertToTableObject(content)');
	const lines = content.split('\n').filter(line => line.trim() !== '');
	// अगर कोई line नहीं तो बाहर निकलो
	if (lines.length === 0)   return null;
	// पहली line header मान लो (अगर comma separated है)
	const delimiter = detectDelimiter(lines[0]); // कॉमा, टैब, या पाइप
	//const headers = lines[0].split(delimiter).map(h => h.trim());
	var TABLE = [];
	if(trim) 
		for(var i=0;i<lines.length;i++)	TABLE = TABLE.concat([lines[i].split(delimiter).map(h => h.trim())]);
	else 
		for(var i=0;i<lines.length;i++)	TABLE = TABLE.concat([lines[i].split(delimiter)]);
	return TABLE;
}
	
// Delimiter पहचानने का सरल तरीका
function detectDelimiter(firstLine) {
  // पहले टैब (	) चेक करो, फिर कॉमा, फिर पाइप (|)
  if (firstLine.includes('	')) return '	';
  if (firstLine.includes('|')) return '|';
  return ','; // डिफ़ॉल्ट कॉमा
}
	
function generateBasicHtmlTable(TABULAR_DATA){
  var TABLE = TABULAR_DATA;
  var html = '';
  html +="<table>";
    for(var r=0; r<TABLE.length; r++){
      var row = '';
      for(var c=0; c<TABLE[r].length; c++) row += ('<td>'+TABLE[r][c]+'</td>');
      html += row=='' ? '' : ("<tr>"+row+"</tr>");
    }
  html +="</table>";
  return html;
}







/* convert tabuler data into array of [{h1:v1, h2:v2, ...}, {...}, ...]*/
function convertTableToScriptArrayObject(data){
	const [headers, ...rows] = data;
	  if (!headers) return [];
	  return rows.map(row => Object.fromEntries(headers.map((header, i) => [header, row[i]])));
}

/* convert tabuler data into array of [{h1:v1, h2:v2, ...}, {...}, ...]*/
function convertTableToScriptArrayObject_old(data){
    var out = [];
    for(var i=1;i<data.length;i++) out.push(Object.fromEntries(data[0].map((key, j) => [key, data[i][j]])));
    return out;
}


/* 2 map-array objects ke data ko kisi attribute-key ki condition se merge karna..*/
/* data MAIN_DATA me add hoga.. */
function merge_data_map_array(MAIN_DATA, ADD_DATA, KEY_NAME){
  if(KEY_NAME===null || KEY_NAME===undefined){
    console.log(' undefined or null merge key...');
    return;
  }
	for(var i=0; i<MAIN_DATA.length; i++){
		var VAL = MAIN_DATA[i][KEY_NAME];
		for(var j=0; j<ADD_DATA.length; j++){
			if(VAL === ADD_DATA[j][KEY_NAME]){
				Object.assign(MAIN_DATA[i], ADD_DATA[j]);
				break;
			}
		}
	}
}
