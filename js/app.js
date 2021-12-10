function mobileNav() {
    let x = document.getElementById("topNav");
    if (x.className === "nav-menu") {
        x.className += " mobile";
    } else {
        x.className = "nav-menu";
    }
}