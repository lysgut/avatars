function txt() {
    let avatar = ["https://api.minimalavatars.com/avatar/random/png",  "https://api.minimalavatars.com/avatar/random/svg"]
    let img = avatar[Math.floor(Math.random() * avatar.length)] 
    let riverarray= ["https://i.pinimg.com/736x/4b/bd/e6/4bbde6f5cde1ce085f04a264af0e38d4.jpg", "https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-0.png", "https://pre00.deviantart.net/f80f/th/pre/i/2010/250/4/8/escudo_de_river_by_raibom-d2y9803.jpg", "https://mlstaticquic-a.akamaihd.net/escudo-river-plate-argentina-en-3d-45-x-40-cm-D_NQ_NP_736060-MLU31984753367_082019-F.jpg", "http://cdn5.dibujos.net/dibujos/pintados/201703/escudo-atletico-river-plate-deportes-escudos-de-futbol-10914535.jpg", "https://4.bp.blogspot.com/-AvKpcltKlDc/WFN3pKaPQ4I/AAAAAAAACms/OaWw-PqqkCUllgRG00OjSTX6cXLUu_Y-QCLcB/s000/escudo-de-river4.jpg", "https://esteeselfamosoriver.com/wp-content/uploads/2018/11/imagenes-de-river-plate-para-fondos-de-pantalla-wallpaper-de-river-escudo-river-fondo-negro.jpg", "https://www.seekpng.com/png/full/125-1251920_escudo-png.png", "https://i.pinimg.com/originals/ae/a3/f2/aea3f20d73e6ec9a90d08fd17ee0af7c.jpg"]
    let river = riverarray[Math.floor(Math.random() * riverarray.length)];
    let ini = random(8)
    let ages = [random(80) + " años", random(160) + " dias", random(14) + " B. de años", "Infinity", random(500) + " años", random(40) + " siglos", random(800) + " siglos", random(500) + " años", random(10) + " meses"]
    let categoris = ["Humano", "Legum", "Universal", "Dios", "Piórodo", "SpacialRex", "Comedor de Almas", "FEx-9000", "Weruga"]
    let assos = ["SpaceX HumanBeings", "Liitleplot A.S", "Gremio Obrero Galactico", "Ministerio de Deidades", "Ankara, inc.", "Rex Descendent As.", "P.A.I.cor (Programa de Almas Integral de ComedOR", "Lab_2000", "One for All, Middle Universe"]
    let names = [["Juan Cruz", "Julia", "Hector R. García", "Donald Trump", "Hilary", "Ana"], ["Porot", "Soy", "Lent", "Manie", "Garb", "Arb"], ["H2O", "NaCl", "CH3(CH2)16COOH", "CaCO3", "CO2", "C2H6"], ["Zeus", "Poseidon", "Hades", "Demeter", "Hera", "Hestia"], ["Obluf", "Eksab", "Log", "Ielob", "Sese", "Jojo"], ["Stego", "Rexy", "Tricerat", "Vlocir", "Loops", "Lecter"], ["SS Valencia", "Ourang Medan", "Caroll A. Deering", "Baychimo", "Octavius", "Lady Lovibond"], "X-" + random(300), ["Werug", "Wermi", "Apicula", "mWesca", "Aran", "Alan"]]
    let planets = [["Tierra", "Marte"], ["Vegetta", "Willy", "Esternocleido"], "Laburan en las estrellas", "Viven fuera del Universo", ["Kromi", "Lomes", "Atenea"], ["Jurasic Planet", "Triasic Planet", "Cretasic Planet"] ,"Vagan de Planeta en Planeta" , "BckRms("+random(16)+")" ,"Weruga Planet"]
    let descricpiones = []
    let planet;
    if(ini == 0){
        planet = planets[ini][random(1)]
    }
    else if (ini == 1 || ini == 4 || ini == 5){
        planet = planets[ini][random(2)]
    }
    else {
        planet = planets[ini]
    }
    let fulbo = ["River Plate", "River Planet, el mejor hincha"]
    let riverso;
    let nombrex = names[ini][random(5)]
    if(nombrex = "Hector R. García") {
        riverso = fulbo[1]
    }
    else{
        riverso = fulbo[0]
    }
    document.getElementById("imgriver").src = river;
    document.getElementById("imgalien").src = img;
    document.getElementById("TITLENAME").innerHTML = "Nombre:";
    document.getElementById("alien-name").innerHTML = nombrex;
    document.getElementById("TITLEAGE").innerHTML = "Edad:"; 
    document.getElementById("alien-age").innerHTML = ages[ini];
    document.getElementById("TITLEPLANET").innerHTML = "Planeta:";
    document.getElementById("alien-planet").innerHTML = planet;
    document.getElementById("TITLERAZA").innerHTML = "Categoria";
    document.getElementById("category1").innerHTML = categoris[ini];
    document.getElementById("TITLEASSO").innerHTML = "Asociación";
    document.getElementById("asss").innerHTML = assos[ini];
    document.getElementById("TITTLEFUTBOL").innerHTML = "Hincha de";
    document.getElementById("siin").innerHTML = fulbo;
    document.getElementById("deski").innerHTML = "Descripción:"
    document.getElementById("deskiasi").innerHTML = 3

}

function random(x) {
    return Math.floor(Math.random() * (x + 1))
}