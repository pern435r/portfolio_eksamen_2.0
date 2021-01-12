window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#web").classList.add("hide");
    document.querySelector("#grundlaeggende_ux").classList.add("hide");
    document.querySelector("#animation").classList.add("hide");
    document.querySelector("#grundlaeggende_indhold").classList.add("hide");
}

function myFunction() {
    var element = document.getElementById("web");
    element.classList.toggle("show");
}

function myFunction2() {
    var element = document.getElementById("grundlaeggende_ux");
    element.classList.toggle("show");
}

function myFunction3() {
    var element = document.getElementById("animation");
    element.classList.toggle("show");
}

function myFunction4() {
    var element = document.getElementById("grundlaeggende_indhold");
    element.classList.toggle("show");
}
