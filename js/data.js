function myWeekday() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Niedziela";
  weekday[1] = "Poniedziałek";
  weekday[2] = "Wtorek";
  weekday[3] = "Środa";
  weekday[4] = "Czwartek";
  weekday[5] = "Piątek";
  weekday[6] = "Sobota";

  var n = weekday[d.getDay()];
  return n;
}

function myMonth() {
  var d = new Date();
  var month = new Array(12);
  month[0] = "stycznia";
  month[1] = "lutego";
  month[2] = "marca";
  month[3] = "kwietnia";
  month[4] = "maja";
  month[5] = "czerwca";
  month[6] = "lipca";
  month[7] = "sierpnia";
  month[8] = "września";
  month[9] = "października";
  month[10] = "listopada";
  month[11] = "grudnia";

  var n = month[d.getMonth()];
  return n;
}

function powitanie() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
      greeting = 'Dobry wieczór!';
  } else if (hourNow > 12) {
      greeting = 'Miłego popołudnia!';
  } else if (hourNow > 0) {
      greeting = 'Dzień dobry!';
  } else {
      greeting = 'Witaj!';
  }

  document.getElementById('greeting').innerHTML = greeting + ' Dzisiaj ' + myWeekday() + ', ' + today.getDate()+" "+myMonth()+", to idealny dzień aby zdobyć samochód swoich marzeń!";
}
