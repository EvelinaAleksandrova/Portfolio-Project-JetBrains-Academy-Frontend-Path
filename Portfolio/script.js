let flagForOpen = true;


function openForm() {
    document.getElementById('myForm').style.display = 'block';
    document.getElementById("body").classList.add("active");
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById("body").classList.remove("active");

}

function openForm2() {
    document.getElementById('myForm2').style.display = 'block';
    document.getElementById("myForm2").classList.add("active");
}

function closeForm2() {
    document.getElementById('myForm2').style.display = 'none';
    document.getElementById("myForm2").classList.remove("active");


}

function menuOpenAndClose() {
    if (flagForOpen === true) {
        document.getElementById('menu-hamburger').style.visibility = 'visible';
        document.getElementById("hamburger").style.height = "355px";
        document.getElementById("menu-hamburger").style.textAlign = "center";
        document.getElementById("menu-hamburger").style.padding = "25px";
        document.getElementById('menuImg').style.alignItems = "center";
        document.getElementById("menu-hamburger").style.fontSize = "20px";
        document.getElementById('name').style.top = "450px";
        flagForOpen = false;
    }
    else{
        document.getElementById('menu-hamburger').style.display = 'hidden';
        document.getElementById("hamburger").style.height = "50px";
        document.getElementById('name').style.top = "140px";
        flagForOpen = true;
    }
}


