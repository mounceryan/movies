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
    }
}

                      

if (boxes[i].style.display[0] = "inline-block") {
            boxes[i].parentElement.style.width = "20vw";
          
        } else {
            boxes[i].parentElement.style.width = "100vw";

        }

    var boxes;
    boxes = document.getElementsByClassName("movie-box");
    
      for (i = 0; i < boxes.length; i++) {
            if (boxes[i].style.display[0] = "inline-block") {
            boxes[i].parentElement.previousElementSibling.style.display = "none";
          
        } else {
            boxes[i].parentElement.previousElementSibling.style.display = "none";

        }
  }
    