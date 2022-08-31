function txt() {
    let a = ["Juan Cruz", "Oye", "QUe? ", "コングンプリマ", "ヴォヤサリル", "PRpr", "ImCrazy_09",'Jojo', "Sese", "Cosmik", "Loreq", "Loops", "Lecter", "Pollic"];
    let b = Math.floor(Math.random() * a.length);
    let c = "Nombre:    " + a[b];
    let h = "https://api.minimalavatars.com/avatar/random/png"
    let g = "Edad:    "+ Math.floor(Math.random() * 800) 
    let d = ["Franda", "TCGCDF_ñoño", "NaN", "SISISISISI", "Qatar",'Esternon', "Kromic","Esternocleido", "Lomes","Atenea","Vegetta", "Patito", "Oniichan", "Gay", "Osito.peru", "sale4", "23478JJJ", "TVCJ89ki", "elTeleanDO", "CKP-84", "Musimundo", "Saturno", "Mexico", "HGF357AFB", "Pluton", "Venus", "Riction", "Gigantion", "Eureka", "Euland", "Maricia", "Origin", "In The Middle", "Here", "Venus", "Marte", "Manombre","Abeir.toril", "Aerelon", "Apokolips", "Asteroide M","Caprica", "Cybertron" , "Darkover", "Darwin IV", "Galaxity", "Gallifrey"];
    let e = Math.floor(Math.random() * d.length);
    let f = "Planeta:    " + d[e];
    document.getElementById("alien-name").innerHTML = f; 
    document.getElementById("alien-age").innerHTML = g;
    document.getElementById("imgalien").src = h;
    document.getElementById("alien-planet").innerHTML = c; 
}
