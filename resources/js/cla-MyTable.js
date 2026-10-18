class MyTable{

		function findIndex(ARRAY, FIND){
		  try{
			  if(FIND !== null && FIND !== '' && ARRAY !== null && ARRAY !== undefined&& FIND !== undefined){
				for(var i=0;i<ARRAY.length;i++){
				  if(FIND === ARRAY[i]) return i;
				}
			  }
		  }catch(e){console.log(e);}
		  return -1;
		}

		function findHeaderIndex(TABLE, FIND){
		  try{
			  return findIndex(TABLE[0],FIND);
		  }catch(e){console.log(e);}
		  return -1;
		}

		// convert text into 2D array
		function splitToTable(content, trim=false){
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
 
		// create simplest html table data.
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
		function toKeyMapObjectList(TABULAR_DATA){
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
		/* data MAIN_LIST me add hoga.. */
		function merge_KeyMapObjects(MAIN_LIST, ADD_DATA, KEY_NAME){
		  if(KEY_NAME===null || KEY_NAME===undefined){
			console.log(' undefined or null merge key...');
			return;
		  }
		  const A = MAIN_LIST;
		  const B = ADD_DATA;
			for(var i=0; i<A.length; i++){
				var VAL = A[i][KEY_NAME];
				for(var j=0; j<B.length; j++){
					if(VAL === B[j][KEY_NAME]){
						Object.assign(A[i], B[j]); // merge both data and assign to A.
						break;
					}
				}
			}
		}

}
