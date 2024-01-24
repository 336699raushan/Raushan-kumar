var i = 1;
setInterval(function() {
	if (i == 100) clearInterval(this);
	else document.getElementById("job").innerHTML = i++;
}, 2000);

var a = 1;
setInterval(function() {
	if (a == 100) clearInterval(this);
	else document.getElementById("Placement").innerHTML=a++;
},900);

var j = 1;
setInterval(function() {
	if (j == 1000) clearInterval(this);
	else document.getElementById("Student").innerHTML = j++;
},100);




// function Show() {
//     document.getElementById("test").style.display = 'block';
// }

// function Hide() {
//     document.getElementById("test").style.display = 'none';
// }

function showHide() {
  var x = document.getElementById("test");
  var button = document.getElementById("btn");
  if (x.style.display === "none") { // div jiska id = test hai wska display none hai
	x.style.display = "block";
	button.innerText = "Hide";
  } else {
	x.style.display = "none";
	button.innerText = "Show";
  }
}






