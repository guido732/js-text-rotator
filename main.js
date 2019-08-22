const wordDb = [
	"titán",
	"locura",
	"mostro",
	"capo",
	"mago",
	"crack",
	"campeón",
	"genio",
	"astro",
	"máquina",
	"fiera",
	"jefe",
	"mastodonte",
	"toro",
	"ciclón",
	"fenómeno",
	"lince",
	"maremoto",
	"furia",
	"ídolo",
	"champion",
	"bestia",
	"brontosaurio",
	"vikingo"
];
const time = 400;
let i = 0;

function changeText() {
	document.getElementById("wordContainer").innerHTML = wordDb[i];
	if (i < wordDb.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeText()", time);
}

window.onload = changeText();
