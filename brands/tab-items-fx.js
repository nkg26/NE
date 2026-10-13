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

/* convert tableuler data into array of [{h1:v1, h2:v2, ...}, {...}, ...]*/
function convertTableToScriptArrayObject(data){
    var out = [];
    for(var i=1;i<data.length;i++) out.push(Object.fromEntries(data[0].map((key, j) => [key, data[i][j]])));
    return out;
}


