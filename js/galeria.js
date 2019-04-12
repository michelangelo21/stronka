var obrazki = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"];
var nr = 0;

function next() {
  var galeria = document.getElementById("galeria");
  nr ++;
  if (nr>=obrazki.length)
    {
      nr = 0;
    }
    galeria.src = "images/" + obrazki[nr];
}

function prev()
{
var galeria = document.getElementById("galeria");
nr--;
if (nr < 0)
	{
		nr = obrazki.length - 1;
	}
galeria.src = "images/" + obrazki[nr];
}

function automat() {
  next();
  setTimeout("automat()",3000)
}

//automat()
