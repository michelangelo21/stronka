function cena() {
  var price = 49900;
  var ids = ["e1", "e2", "e3", "e4", "q1", "q2", "q3", "q4",]

  for (var i=0; i<ids.length; i++)
  {
    if (document.getElementById(ids[i]).checked)
    {
      price += Number(document.getElementById(ids[i]).value);
    }
  }

  document.getElementById("cena").innerHTML = "Cena wynosi: " + price + " PLN";
}
