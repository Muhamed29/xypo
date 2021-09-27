var navBar = document.getElementById("nav");
var menuBar = document.getElementById("menu");
navBar.style.right ="-350px";
menuBar.onclick = ()=>{
    if (navBar.style.right == "-350px") {
        navBar.style.right ="0";
    } else {
        navBar.style.right="-350px";
    }
}

var links = document.querySelectorAll("ul a");
for (const link of links) {
    link.addEventListener("click",function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
      
        scroll({
          top: offsetTop,
          behavior: "smooth"
        })
    });
    }