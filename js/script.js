window.onbeforeunload = function() {window.scrollTo(0,0);}


function hashFollower() {
  var link = window.location.hash;
  if(link == "") {
   //als je op de homepage bent
   loadPage("about.html");
  } else {
    // als je ergens anders bent
    link = link.replace("#" , "");
    link += ".html";
    loadPage(link);
    window.location.href.split('#')[0]
  }
}


//laad de pagina's

function loadPage(location) {
  console.log(location);
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", location, true);
    xhttp.send();
}

function callBack(result) {
  $("content").innerHTML = result.responseText;
}

//bij refresh staat pagina zoals het hoort


//datum voor in footer
var datumNu = new Date();
var jaar = datumNu.getFullYear();
document.getElementById("Datum").innerHTML = " " + jaar;
