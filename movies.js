
//Search

function search1() {
    var input, filter, boxes, titlep, i, titlevalue, directorp, directorvalue, actorp, actorvalue;
    
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName("movie-box");
    
    for (i = 0; i < boxes.length; i++) {
        titlep = boxes[i].getElementsByClassName("movie-title")[0];
        
        titlevalue = titlep.textContent || titlep.innerText;
        
        directorp = boxes[i].getElementsByClassName("movie-detail")[0];
        
        directorvalue = directorp.textContent || directorp.innerText;
        
        actorp = boxes[i].getElementsByClassName("movie-detail-hidden")[0];
        
        actorvalue = actorp.textContent || actorp.innerText;
        
        if (titlevalue.toUpperCase().indexOf(filter) > -1 || directorvalue.toUpperCase().indexOf(filter) > -1 || actorvalue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "inline-block";
          
        } else {
            boxes[i].style.display = "none";

        }

        if (document.getElementById("search1").value.length == 0) {
            boxes[i].parentElement.previousElementSibling.style.display = "inline-block";
            boxes[i].parentElement.style.float = "none";
            boxes[i].parentElement.style.marginRight = "0";
            boxes[i].parentElement.style.overflow = "auto";
            document.getElementById("search-results").style.display = "none";  
            document.getElementById("content").style.display = "block";
            document.getElementById("content").style.overflow = "initial";
            document.getElementById("banner-link").style.display = "block";  
            document.getElementById("block").style.display = "none";  
            document.getElementById("button-box").style.display = "block";  
        } else {
            boxes[i].parentElement.previousElementSibling.style.display = "none";
            boxes[i].parentElement.style.float = "left";
            boxes[i].parentElement.style.marginRight = "-2vw";
            boxes[i].parentElement.style.overflow = "initial";
            document.getElementById("search-results").style.display = "block";
            document.getElementById("content").style.display = "flex";
            document.getElementById("content").style.overflow = "auto";
            document.getElementById("banner-link").style.display = "none";  
            document.getElementById("block").style.display = "block"; 
            document.getElementById("button-box").style.display = "none";  
        }
    }
}

//View All

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("content");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByClassName("movie-title");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
      
    if (shouldSwitch) {
      b[i].parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(b[i + 1].parentNode.parentNode.parentNode.parentNode, b[i].parentNode.parentNode.parentNode.parentNode);
      switching = true;
        
        document.getElementById("banner-link").style.display = "none";  
            document.getElementById("block").style.display = "block"; 
        b[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.whiteSpace = "normal";
        b[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.textAlign = "center";
        b[i].parentElement.parentElement.parentElement.parentElement.style.marginBottom = "1vw";

        var buttonunfocus = document.getElementById('view-genres');
        buttonunfocus.focus();
        
        document.getElementById("view-all").style.backgroundColor = "white";
        document.getElementById("view-all").style.color = "black";
        
        var divsToHide = document.getElementsByClassName("content-title");
       for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }
       
    }
  }
}

//Banner

window.addEventListener("load", bannerimages, false);

function bannerimages(){
    
var links = [
  "https://www.youtube.com/embed/rwBkQnps-x8",
  "https://www.youtube.com/embed/l37CMUicZFM",
  "https://1drv.ms/v/s!AguK73hSjArpjapY41tPJSIw1iPypg?e=dMWLCm"
]
    
var images = [
  "banners/once.jpeg",
  "banners/pulp.jpg",
  "banners/odyssey.jpg"
]

var titles = [
  "<span style='color:#f1af1d; font-size:3vw;'>Once Upon A Time in... </span><br>Hollywood",
  "<span style='color:#f2da01; font-size:6.3vw; letter-spacing: -4px; text-shadow: -1px 1px #000000; transform:scale(0.6,1); display: inline-block;'>PULP FICTION</span>",
  "2OO1: A SPACE ODYSSEY"
]

var fonts = [
  "hollywood-hills",
  "aachen-bold",
  "gill-sans-light"
]

var link = document.getElementById("banner-link");
var banner = document.getElementById("banner");
var title = document.getElementById("banner-title");
var i = 0;

setInterval(function() {
      link.href = links[i];
      title.innerHTML = titles[i];
      title.style.fontFamily = fonts[i];
      banner.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 5000);
}



