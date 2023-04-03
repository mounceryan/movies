//Function for showing film player for hard drive films

function showfilminplayer(links){
    document.getElementById('player-box-container').style.display = "block";
    document.getElementById('player-box').style.display = "inline-block";
    document.getElementById('player-box-youtube').style.display = "none";
    document.getElementById('video').setAttribute("src", window[links][0]);
    document.getElementById('video').load();
    document.getElementById('video').play();
    document.getElementById('player-poster').setAttribute("src", window[links][1]);
}

//Variables for above function

var stepslink = [
    "full-films/the-39-steps.mp4", // Film Link
    "posters/steps.jpg", // Film Poster Link
];

var odysseylink = [
    "full-films/2001-a-space-odyssey.mp4", // Film Link
    "posters/2001.jpg", // Film Poster Link
];

//Function for closing film player for hard drive and YouTube films

function closeplayer(){
    document.getElementById('player-box-container').style.display = "none";
    document.getElementById('player-box').style.display = "none";
    document.getElementById('player-box-youtube').style.display = "none";
    document.getElementById('youtube-video').setAttribute("src", "");
    document.getElementById('video').pause();
}

//Function for showing film player for YouTube films

function showyoutubeinplayer(youtubelinks){
    document.getElementById('player-box-container').style.display = "block";
    document.getElementById('player-box').style.display = "none";
    document.getElementById('player-box-youtube').style.display = "inline-block";
    document.getElementById('youtube-video').setAttribute("src", window[youtubelinks][0]);
    document.getElementById('player-poster').setAttribute("src", window[youtubelinks][1]);
}

//Variables for above function

var catchmeyoutubelink = [
    "https://www.youtube.com/embed/p1Fbf358i7I", // Film Link
    "posters/catchme.jpg", // Film Poster Link
];

var fast1youtubelink = [
    "https://www.youtube.com/embed/MeSnSyYOHdE", // Film Link
    "posters/fast1.jpg", // Film Poster Link
];

var budapestyoutubelink = [   
    "https://www.youtube.com/embed/6NbVijUb7cA", // Film Link
    "posters/budapest.jpg", // Film Poster Link
];

var gravityyoutubelink = [
    "https://www.youtube.com/embed/vqLInEywivE", // Film Link
    "posters/gravity.jpg", // Film Poster Link
];

var handmaidenyoutubelink = [
    "https://www.youtube.com/embed/GAlMC-gcfqU", // Film Link
    "posters/handmaiden.jpg", // Film Poster Link
];

var legobatmanyoutubelink = [
    "https://www.youtube.com/embed/OQN6Xb5EYQ0", // Film Link
    "posters/legobatman.jpg", // Film Poster Link
];

var mazeyoutubelink = [
    "https://www.youtube.com/embed/XMV3xsQwx5o", // Film Link
    "posters/maze.jpg", // Film Poster Link
];

var museumyoutubelink = [
    "https://www.youtube.com/embed/Zi6Cb75eH6Y", // Film Link
    "posters/museum.jpg", // Film Poster Link
];

var pianistyoutubelink = [   
    "https://www.youtube.com/embed/oBllNQ90atk", // Film Link
    "posters/pianist.jpg", // Film Poster Link
];

var pulpyoutubelink = [
    "https://www.youtube.com/embed/l37CMUicZFM", // Film Link
    "posters/pulp.jpg", // Film Poster Link
];

var rememoryyoutubelink = [
    "https://www.youtube.com/embed/rsV9kJRIluM", // Film Link
    "posters/rememory.jpg", // Film Poster Link
];

var rogueyoutubelink = [
    "https://www.youtube.com/embed/ACIQaOLoPPQ", // Film Link
    "posters/rogue.jpg", // Film Poster Link
];

var holmesyoutubelink = [
    "https://www.youtube.com/embed/Iw_TK5N4bu8", // Film Link
    "posters/holmes.jpg", // Film Poster Link
];

var solarisyoutubelink = [
    "https://www.youtube.com/embed/mIVh8C7kkU4", // Film Link
    "posters/solaris.jpg", // Film Poster Link
];

var stalkeryoutubelink = [
    "https://www.youtube.com/embed/9nm8wrcWh0Y", // Film Link
    "posters/stalker.jpg", // Film Poster Link
];

var bloodyoutubelink = [
    "https://www.youtube.com/embed/XcdvukPJcW8", // Film Link
    "posters/blood.jpg", // Film Poster Link
];

//Functions for colouring 'Prime' blue in the Amazon Prime Video button on hover

function showamazonprimevideospan(){
    document.getElementById("ownership-amazonprimevideo-span").style.color = "#00A8E1";  
}

function showamazonprimevideospanout(){
    document.getElementById("ownership-amazonprimevideo-span").style.color = "#000000";  
}

//Function for decreasing film information box size

function sizedown(){
        var boxes = document.getElementsByClassName("film-box");
        var actors = document.getElementsByClassName("film-actors");
        var genre = document.getElementsByClassName("film-genre");
            for (var i = 0, len = boxes.length; i < len; ++i) { 
                boxes[i].style.width = "16vw";
}
            for (var i = 0, len = actors.length; i < len; ++i) { 
                actors[i].style.display = "none";
}
    
            for (var i = 0, len = genre.length; i < len; ++i) { 
                genre[i].style.display = "none";
}
        document.getElementById("size-up").style.cursor = "pointer";  
        document.getElementById("size-down").style.cursor = "not-allowed";  
}

//Function for increasing film information box size

function sizeup(){
        var boxes= document.getElementsByClassName("film-box");
        var actors = document.getElementsByClassName("film-actors");
        var genre = document.getElementsByClassName("film-genre");
            for (var i = 0, len = boxes.length; i < len; ++i) { 
                boxes[i].style.width = "20.5vw";
}
            for (var i = 0, len = actors.length; i < len; ++i) { 
                actors[i].style.display = "block";
}
    
                for (var i = 0, len = genre.length; i < len; ++i) { 
                genre[i].style.display = "block";
}
        document.getElementById("size-up").style.cursor = "not-allowed";  
        document.getElementById("size-down").style.cursor = "pointer"; 
}

//Function for showing advanced search options

function showadvanced(){
 var x = document.getElementById('advanced-options');
x.style.display = x.style.display == "block" ? "none" : "block";
}

//Function for showing all films

function showall() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";   
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}  
                                
    if(divs[i].innerHTML.indexOf("Both Discs") !== -1) {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}    
                  
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";  
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "inline-block";
}
    
}
       
}

//Function for showing Amazon Prime Video films

function showamazonprimevideo() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";   
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "none";
}
    
}
       
}

//Function for showing Blu-Ray films

function showbluray() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";   
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "inline-block";
}
    
}
       
}

//Function for showing DVD films
        
function showdvd() {
    
        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";  
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "inline-block";
}
    
}
       
}
//Function for showing hard drive films

function showharddrive() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";  
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "none";
}
    
}
       
}

//Function for showing Rakuten TV films

function showrakutenttv() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";  
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "none";
}
    
}
       
}


//Function for showing YouTube films

function showyoutube() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "icons/prime.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";  
}
                
    if(divs[i].getAttribute("src") == "icons/blu-ray.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}      
                
    if(divs[i].getAttribute("src") == "icons/dvd.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/hard-drive.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
                
    if(divs[i].getAttribute("src") == "icons/rakuten.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "none";
}
    
    if(divs[i].getAttribute("src") == "icons/youtube.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
}

}
                
        var brdvds= document.getElementsByClassName("brdvd");
            for (var i = 0, len = brdvds.length; i < len; ++i) {
                
       if(brdvds[i].innerHTML !== "Both Discs") {
        brdvds[i].parentNode.parentNode.style.display = "none";
}
    
}
       
}

//Function for searching by film

function search() {
    var input, filter, boxes, p, i, txtValue;
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName("film-box");
    for (i = 0; i < boxes.length; i++) {
        p = boxes[i].getElementsByTagName("p")[1];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

//Function for searching by actor

function actorsearch() {
    var input, filter, boxes, p, i, txtValue;
    input = document.getElementById("search3");
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName("film-box");
    for (i = 0; i < boxes.length; i++) {
        p = boxes[i].getElementsByTagName("p")[5];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

//Function for searching by director

function directorsearch() {
    var input, filter, boxes, p, i, txtValue;
    input = document.getElementById("search2");
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName("film-box");
    for (i = 0; i < boxes.length; i++) {
        p = boxes[i].getElementsByTagName("p")[2];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

//Functions for Blu-Ray and DVD films #5

function showbluraydvdin(film) {  
 const icondiv = document.createElement('icondiv');
  icondiv.innerHTML = window[film][2];
  document.getElementById(window[film][1]).appendChild(icondiv);
}

function showbluraydvdout(elementId) {
    var element1 = document.getElementById("brdvdid1");
    element1.parentNode.removeChild(element1);
      
    var element2 = document.getElementById("brdvdid2");
    element2.parentNode.removeChild(element2);
    
    var element3 = document.getElementById("brdvdid3");
    element3.parentNode.removeChild(element3);
    
    var element4 = document.getElementById("brdvdid4");
    element4.parentNode.removeChild(element4);
}

//Function to show film information boxes

function showinfoboxnew(film) {
    var e = document.getElementById(window[film][0]);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

//Films variables #77 next one is 78
    
var twelve =  [
    "fib11", // Film Information Box ID
];

var steps = [
    "fib61", // Film Information Box ID
];

var odyssey = [
    "fib1", // Film Information Box ID
];

var apocalypse = [
    "fib12", // Film Information Box ID
];

var arrival = [
    "fib13", // Film Information Box ID
];

var avatar = [
    "fib16", // Film Information Box ID
];

var blue = [
    "fib17", // Film Information Box ID
];

var casino = [
    "fib18", // Film Information Box ID
];

var catchme = [
    "fib75", // Film Information Box ID
];

var clockwork = [
    "fib70", // Film Information Box ID
];

var vinci = [
    "fib21", // Film Information Box ID
];

var rises = [
    "fib22", // Film Information Box ID
];

var stalin = [
    "fib14", // Film Information Box ID
];

var despicable2 = [
    "fib23", // Film Information Box ID
];

var district = [
    "fib24", // Film Information Box ID
];

var strangelove = [
    "fib15", // Film Information Box ID
];

var fast1 = [
    "fib69", // Film Information Box ID
];

var gladiator = [
    "fib2", // Film Information Box ID
];

var budapest = [
    "fib76", // Film Information Box ID
];

var gravity = [
    "fib25", // Film Information Box ID
];

var handmaiden = [
    "fib62", // Film Information Box ID
];

var hp1 = [
    "fib37", // Film Information Box ID
];

var hp2 = [
    "fib38", // Film Information Box ID
];

var hp3 = [
    "fib39", // Film Information Box ID
];

var hp4 = [
    "fib40", // Film Information Box ID
];

var hp5 = [
    "fib41", // Film Information Box ID
];

var hp6 = [
    "fib42", // Film Information Box ID
];

var hp7 = [
    "fib43", // Film Information Box ID
];

var hp8 = [
    "fib44", // Film Information Box ID 
    "brdvd1",
    "<div class='film-ownership dvd' id='brdvdid1'><img src='icons/dvd.png' class='film-ownership-icon'></div><div class='film-ownership blu-ray' id='brdvdid2'><img src='icons/blu-ray.png' class='film-ownership-icon'></div><div class='film-ownership twelve' id='brdvdid3'><img src='ratings/12.png' class='film-ownership-icon'></div><div class='film-score seven' id='brdvdid4'><p class='film-score-text'>7/10 </div>",//src for blu-ray plus src for dvd plus src for rating
    "Both Discs",
];

var howls = [
    "fib10", // Film Information Box ID
    "brdvd2",
    "<div class='film-ownership dvd' id='brdvdid1'><img src='icons/dvd.png' class='film-ownership-icon'></div><div class='film-ownership blu-ray' id='brdvdid2'><img src='icons/blu-ray.png' class='film-ownership-icon'></div><div class='film-ownership u' id='brdvdid3'><img src='ratings/u.png' class='film-ownership-icon'></div><div class='film-score nine' id='brdvdid4'><p class='film-score-text'>9/10 </div>",//src for blu-ray plus src for dvd plus src for rating
    "Both Discs",
];

var ice = [
    "fib26", // Film Information Box ID
];

var interstellar = [
    "fib27", // Film Information Box ID
];

var arabia = [
    "fib74", // Film Information Box ID
];

var legobatman = [
    "fib28", // Film Information Box ID
];

var lego = [
    "fib29", // Film Information Box ID
];

var fellowship = [
    "fib30", // Film Information Box ID
];

var twotowers = [
    "fib31", // Film Information Box ID
];

var returnking = [
    "fib32", // Film Information Box ID
];

var maze = [
    "fib33", // Film Information Box ID
];

var mibthree = [
    "fib34", // Film Information Box ID
];

var mulholland = [
    "fib3", // Film Information Box ID
];

var totoro = [
    "fib4", // Film Information Box ID
    "brdvd3",
    "<div class='film-ownership dvd' id='brdvdid1'><img src='icons/dvd.png' class='film-ownership-icon'></div><div class='film-ownership blu-ray' id='brdvdid2'><img src='icons/blu-ray.png' class='film-ownership-icon'></div><div class='film-ownership u' id='brdvdid3'><img src='ratings/u.png' class='film-ownership-icon'></div><div class='film-score nine' id='brdvdid4'><p class='film-score-text'>9/10 </div>",//src for blu-ray plus src for dvd plus src for rating
    "Both Discs",
];

var narnia = [
    "fib19", // Film Information Box ID
];

var caspian = [
    "fib20", // Film Information Box ID
];

var museum = [
    "fib35", // Film Information Box ID
];

var nightcrawler = [
    "fib36", // Film Information Box ID
];

var pans = [
    "fib5", // Film Information Box ID
];

var pianist = [
    "fib77", // Film Information Box ID
];

var chest = [
    "fib51", // Film Information Box ID
];

var worlds = [
    "fib50", // Film Information Box ID
];

var mononoke = [
    "fib6", // Film Information Box ID
    "brdvd4",
    "<div class='film-ownership dvd' id='brdvdid1'><img src='icons/dvd.png' class='film-ownership-icon'></div><div class='film-ownership blu-ray' id='brdvdid2'><img src='icons/blu-ray.png' class='film-ownership-icon'></div><div class='film-ownership pg' id='brdvdid3'><img src='ratings/pg.png' class='film-ownership-icon'></div><div class='film-score nine' id='brdvdid4'><p class='film-score-text'>9/10 </div>",//src for blu-ray plus src for dvd plus src for rating
    "Both Discs",
];

var pulp = [
    "fib9", // Film Information Box ID
];

var rememory = [
    "fib52", // Film Information Box ID
];

var rogue = [
    "fib53", // Film Information Box ID
];

var searching = [
    "fib7", // Film Information Box ID
];

var water = [
    "fib54", // Film Information Box ID
];

var shawshank = [
    "fib58", // Film Information Box ID
];

var holmes = [
    "fib55", // Film Information Box ID
];

var shining = [
    "fib73", // Film Information Box ID
];

var shutter = [
    "fib56", // Film Information Box ID
];

var solaris = [
    "fib71", // Film Information Box ID
];

var spectre = [
    "fib57", // Film Information Box ID
];

var spirited = [
    "fib8", // Film Information Box ID
    "brdvd5",
    "<div class='film-ownership dvd' id='brdvdid1'><img src='icons/dvd.png' class='film-ownership-icon'></div><div class='film-ownership blu-ray' id='brdvdid2'><img src='icons/blu-ray.png' class='film-ownership-icon'></div><div class='film-ownership pg' id='brdvdid3'><img src='ratings/pg.png' class='film-ownership-icon'></div><div class='film-score ten' id='brdvdid4'><p class='film-score-text'>10/10 </div>",//src for blu-ray plus src for dvd plus src for rating
    "Both Discs",
];

var stalker = [
    "fib72", // Film Information Box ID
];

var sw1 = [
    "fib63", // Film Information Box ID
];

var sw2 = [
    "fib64", // Film Information Box ID
];

var sw3 = [
    "fib65", // Film Information Box ID
];

var sw4 = [
    "fib66", // Film Information Box ID
];

var sw5 = [
    "fib67", // Film Information Box ID
];

var sw6 = [
    "fib68", // Film Information Box ID
];

var blood = [
    "fib60", // Film Information Box ID
];

var treasure = [
    "fib59", // Film Information Box ID
];

var tw1 = [
    "fib45", // Film Information Box ID
];

var tw2 = [
    "fib46", // Film Information Box ID
];

var tw3 = [
    "fib47", // Film Information Box ID
];

var tw4 = [
    "fib48", // Film Information Box ID
];

var tw5 = [
    "fib49", // Film Information Box ID
];



//Function for showing U films

function showu() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/u.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
         document.getElementById("brdvd2").parentNode.parentNode.style.display = "inline-block";
         document.getElementById("brdvd3").parentNode.parentNode.style.display = "inline-block";
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
                }
            }    
}

function showpg() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/pg.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block";
        document.getElementById("brdvd4").parentNode.parentNode.style.display = "inline-block";
         document.getElementById("brdvd5").parentNode.parentNode.style.display = "inline-block";
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";
                   document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                }
            }    
}

function showtwelvea() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/12a.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showtwelve() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/12.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
        
        document.getElementById("brdvd1").parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showfifteen() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/15.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showeighteen() {

        var divs= document.getElementsByClassName("film-ownership-icon");
            for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].getAttribute("src") == "ratings/18.png") {
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showfive() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "5/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showsix() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "6/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showseven() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "7/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
           
document.getElementById("brdvd1").parentNode.parentNode.style.display = "inline-block"; 
           
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showeight() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "8/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
           
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";      
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function shownine() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "9/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
           document.getElementById("brdvd2").parentNode.parentNode.style.display = "inline-block"; 
           
           document.getElementById("brdvd3").parentNode.parentNode.style.  display = "inline-block"; 
           document.getElementById("brdvd4").parentNode.parentNode.style.display = "inline-block"; 
           
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";      
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd5").parentNode.parentNode.style.display = "none";
               
                }
            }    
}

function showten() {

        var divs= document.getElementsByClassName("film-score-text");
            for (var i = 0, len = divs.length; i < len; ++i) {
                          
       if(divs[i].innerHTML == "10/10"){
        divs[i].parentNode.parentNode.parentNode.style.display = "inline-block"; 
           
           document.getElementById("brdvd5").parentNode.parentNode.style.display = "inline-block"; 
           
           
}            
               else
                {                 divs[i].parentNode.parentNode.parentNode.style.display = "none";  
                 
                 document.getElementById("brdvd1").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd2").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd3").parentNode.parentNode.style.display = "none";
                 document.getElementById("brdvd4").parentNode.parentNode.style.display = "none";
               
                }
            }    
}