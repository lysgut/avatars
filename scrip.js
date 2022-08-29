function txt() {
    let a = ['Jojo', "Sese", "Cosmik", "Loreq", "Loops", "Lecter", "Pollic"];
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    let d = document.getElementById("alien-planet").innerHTML = c; 
}

function txt2() {
    let a = ['esternon', "kromic","esternocleido junior", "lomes","Atenea","Vegetta"];
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    let d = document.getElementById("alien-name").innerHTML = c; 
}
function txt3() {
    let b = Math.floor(Math.random() * 800);
    let d = document.getElementById("alien-age").innerHTML = b; 
}

