function txt() {
    let a = ["Juan Cruz", "Oye", "QUe? ", "コングンプリマ", "ヴォヤサリル", "PRpr", "ImCrazy_09",'Jojo', "Sese", "Cosmik", "Loreq", "Loops", "Lecter", "Pollic", "Arjona", "Tre", "Kilosu", "voyaRoxy", "Manhathan", "Tihuá", "Kuetzel", "Werna", "Triceps", "Turco", "Bueeno", "Win", "Badrosti", "Redflag", "Greenflag", "Kiros0", "Reallity", "8cho", "Triline", "Longie", "Freud", "River", "GitHub", "There"];
    let b = Math.floor(Math.random() * a.length);
    let c = "Nombre:    " + a[b];
    let ñ = ["https://api.minimalavatars.com/avatar/random/png",  "https://api.minimalavatars.com/avatar/random/svg"]
    let h = ñ[Math.floor(Math.random() * ñ.length)]
    let g = "Edad:    "+ Math.floor(Math.random() * 800) 
    let d = ["Franda", "TCGCDF_ñoño", "NaN", "SISISISISI", "Qatar",'Esternon', "Kromic","Esternocleido", "Lomes","Atenea","Vegetta", "Patito", "Oniichan", "Gay", "Osito.peru", "sale4", "23478JJJ", "TVCJ89ki", "elTeleanDO", "CKP-84", "Musimundo", "Saturno", "Mexico", "HGF357AFB", "Pluton", "Venus", "Riction", "Gigantion", "Eureka", "Euland", "Maricia", "Origin", "In The Middle", "Here", "Venus", "Marte", "Manombre","Abeir.toril", "Aerelon", "Apokolips", "Asteroide M","Caprica", "Cybertron" , "Darkover", "Darwin IV", "Galaxity", "Gallifrey"];
    let e = Math.floor(Math.random() * d.length);
    let f = "Planeta:    " + d[e];
    let r= ["https://i.pinimg.com/736x/4b/bd/e6/4bbde6f5cde1ce085f04a264af0e38d4.jpg", "https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-0.png", "https://pre00.deviantart.net/f80f/th/pre/i/2010/250/4/8/escudo_de_river_by_raibom-d2y9803.jpg", "https://mlstaticquic-a.akamaihd.net/escudo-river-plate-argentina-en-3d-45-x-40-cm-D_NQ_NP_736060-MLU31984753367_082019-F.jpg", "http://cdn5.dibujos.net/dibujos/pintados/201703/escudo-atletico-river-plate-deportes-escudos-de-futbol-10914535.jpg", "https://4.bp.blogspot.com/-AvKpcltKlDc/WFN3pKaPQ4I/AAAAAAAACms/OaWw-PqqkCUllgRG00OjSTX6cXLUu_Y-QCLcB/s000/escudo-de-river4.jpg", "https://esteeselfamosoriver.com/wp-content/uploads/2018/11/imagenes-de-river-plate-para-fondos-de-pantalla-wallpaper-de-river-escudo-river-fondo-negro.jpg", "https://www.seekpng.com/png/full/125-1251920_escudo-png.png", "https://i.pinimg.com/originals/ae/a3/f2/aea3f20d73e6ec9a90d08fd17ee0af7c.jpg"]
    let v = r[Math.floor(Math.random() * r.length)];
    let m = ["Me gusta el futbol y suelo ser un peligro para la sociedad cuando juego, ya que me enojo muchisimo, perdon", "esto es alienboo? ahhg pense que era mejor, pero bueno, que otra cosa pero que otro día de mier", "porfavor saquen a los directivos de este colegio, nada mas que agregar"]
    let n = m[Math.floor(Math.random() * m.length)]
    document.getElementById("imgriver").src = v;
    document.getElementById("imgalien").src = h;
    document.getElementById("alien-name").innerHTML = f; 
    document.getElementById("alien-age").innerHTML = g;
    document.getElementById("alien-planet").innerHTML = c; 
    document.getElementById("siin").innerHTML = "Hincha de: River Plate"
    document.getElementById("deski").innerHTML = "Descripción:"
    document.getElementById("deskiasi").innerHTML = n

}
