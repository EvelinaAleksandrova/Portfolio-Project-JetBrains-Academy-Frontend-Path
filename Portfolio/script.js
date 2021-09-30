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
    document.getElementById("overlay2").classList.add("active");
}
function closeForm2() {
    document.getElementById('myForm2').style.display = 'none';
    document.getElementById("myForm2").classList.remove("active");
    document.getElementById("overlay2").classList.remove("active");

}
