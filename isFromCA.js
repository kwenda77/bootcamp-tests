function isFromCapeTown(regNumber){
  
    if(!regNumber){

        return "Please enter correct prefix"
    }
    return regNumber.startsWith('CA');
  }