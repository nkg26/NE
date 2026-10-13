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
