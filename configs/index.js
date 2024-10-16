(function () {
    const list = document.querySelectorAll(".control");
    function activeLink() {
      list.forEach((button) => {
        button.classList.remove("active-btn");
        this.classList.add("active-btn");
      });
    }
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
  
    [...document.querySelectorAll(".control")].forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    // Make the DIV element draggable:
    dragElement(document.getElementById("dragable"));
  
    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "Content")) {
        // if present, the Content is where you move the DIV from:
        document.getElementById(elmnt.id + "Content").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }
  
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  })();
  
  // Toast Message JS
  function toastMessage(response) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    if (response === "success") {
      x.innerText = "Thank you, your message successfully sended";
      x.className = "show";
    } else if (response === "failed") {
      x.innerText = "Sorry, Something is wrong at the moment";
      x.className = "show alert";
    }
    // Add the "show" class to DIV
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className = "";
    }, 2900);
  }
  
  // text loop effect by continuously shifting the first character of a text to the end
  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("looping-text");
    const originalText = textElement.textContent;
    let currentText = originalText;
  
    setInterval(() => {
      substring = currentText.slice(0, 20);
      currentText = currentText.slice(20) + substring;
      textElement.textContent = currentText;
    }, 200); // Change this value to adjust the speed of the loop
  });