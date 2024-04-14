function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
   function mouseMoveEnd() {
  cursor.style.marginLeft = `calc(${cursorinner.style.left} - ${radiusOfCursor}px)`;
  cursor.style.marginTop = `calc(${cursorinner.style.top} - ${radiusOfCursor}px)`;
}

var x;
document.addEventListener('mousemove', function() { 
    if (x) clearTimeout(x); 
    x = setTimeout(mouseMoveEnd, 10); 
}, false);
