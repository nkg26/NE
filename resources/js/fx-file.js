/* 
  ye 1 handler function hai, 
  jab bhi file read krenge to 1 uid pass krenge and is function me wo uid se file k bare me pta lgega..
*/
async function handler_FileReadDone(uid, fileContent) {
  console.log("handler_FileReadDone - uid = "+uid);
}

// Text file ya HTML read karna
async function readFileFromURL(uid, url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("File nahi mili");
      const data = await response.text(); // HTML/text ke liye
      // const data = await response.json(); // agar JSON hai to
      // const data = await response.blob(); // agar image/pdf hai to
      console.log("readFileFromURL - "+uid);
      handler_FileReadDone(uid, data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
}

// currently getting some error...
async function readFileContent(uid, filePath) {
    // 2. Fetch API ka use karke file ko load karein
    fetch(filePath).then(response => {
        // Agar file nahi mili ya koi error aaya
        if (!response.ok) throw new Error("File nahi mili ya network issue hai.");
        console.log("readFileContent - "+uid);
        handler_FileReadDone(uid, response.text());// File ko text format mein convert karein
      }).catch(error => {
        // Agar koi error aata hai toh yahan handle hoga
        console.error("Error loading file:", error);
      });
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
  for(var i=0;i<lines.length;i++){
    TABLE = TABLE.concat([lines[i].split(delimiter)]);
  }
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
	





/*   


*/

