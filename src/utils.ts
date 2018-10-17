

// ---------------------------TIME UTILS -------------------------------------

function getCurrentDate() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const hh = today.getHours();
    const MM = today.getMinutes();
    const ss = today.getSeconds();

    let finalDateTime: string = "";
    if (dd < 10) {
      finalDateTime += '0' + dd;
    }else{
      finalDateTime +=  dd;

    }
    finalDateTime += '/'
    if (mm < 10) {
      finalDateTime += '0' + mm;
    }else{
      finalDateTime += mm;
    }
    finalDateTime += ('/'+yyyy+' ')


    if (hh < 10) {
      finalDateTime += '0' + hh;
    }else{
      finalDateTime += hh;
    }
    finalDateTime += ':'
    if (MM < 10) {
      finalDateTime += '0' + MM;
    }else{
      finalDateTime += MM;
    }
    finalDateTime += ':'
    if (ss < 10) {
      finalDateTime += '0' + ss;
    }else{
      finalDateTime += ss;
    }

    return finalDateTime;
  }


  export {getCurrentDate}