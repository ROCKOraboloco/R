/* 
========== Table of Content ============
-> MENU
-> PROJECTS
-> QUESTION
=========================================
*/

/*--------------------*/
/*         MENU       */
/*--------------------*/

// Used to toggle the menu on small screens when clicking on the menu button
function btnMenu() {
  var x = document.getElementById("menu");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    document.getElementById("iconMenu").innerHTML = "close";
  } else { 
    x.className = x.className.replace("w3-show", "");
    document.getElementById("iconMenu").innerHTML = "menu";
  }
}

/*--------------------*/
/*       PROPOSAL     */
/*--------------------*/

// move boton
function yes(){
    alert('Ahora ya somos novios <3')
}
function moveBtn(){
    width = window.innerWidth;
    height = window.innerHeight;
    newWidth = (Math.random() * width);
    newHeigh = (Math.random() * height);
    document.getElementById("btnNo").style.position = "absolute";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.top = newHeight + "px";
}

/*--------------------*/
/*      QUESTION      */
/*--------------------*/

// according to questions
function according(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}