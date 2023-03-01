alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчера
alert( formatDate(new Date(new Date - 24 * 60 * 60 * 1000)) );


function formatDate(date) {
  let dateNow = new Date();
  let d = dateNow - date;
  if (d < 1000) {
    return "прямо сейчас";
  } else if (d < 60000) {
    return `${Math.round(d/1000)} сек. назад`;
  } else if (d < 3600000) {
    return `${Math.round(d/1000/60)} мин. назад`;
  } else {
    let dd = ( date.getDate() < 10 ) ? '0'+date.getDate() : date.getDate();
    let mm = ( (date.getMonth()+1) < 10 ) ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    let yy = date.getFullYear() % 100;
    let h = ( date.getHours() < 10 ) ? '0'+date.getHours() : date.getHours();
    let m = ( date.getMinutes() < 10 ) ? '0'+date.getMinutes() : date.getMinutes();
    return `${dd}.${mm}.${yy} ${h}:${m}`;
  }
}