

// ---------------------------TIME UTILS -------------------------------------

function getCurrentDate() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let finalDate: string = "";
    if (dd < 10) {
      finalDate += '0' + dd;
    }else{
      finalDate +=  dd;

    }
    finalDate += '/'
    if (mm < 10) {
      finalDate += '0' + mm;
    }else{
      finalDate += mm;
    }
    finalDate += ('/'+yyyy)
    return finalDate;
  }

  export {getCurrentDate}