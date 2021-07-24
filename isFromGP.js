function isFromGauteng(regNumber){

    if(!regNumber){

        return "Please enter correct prefix"
    }
  
    return regNumber.endsWith('GP');
  }