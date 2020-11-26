function UpdateOrder(){

    document.getElementById("tea_manufacturer_display").value = document.getElementById("TeaManufacturer").value;
    document.getElementById("packaging_display").value = document.getElementById("Packaging").value;
    document.getElementById("size_display").value = document.getElementById("size").value;
    document.getElementById("extras_display").value = document.getElementById("extras").value;
    

    let tea = document.getElementById("TeaManufacturer");
    tea= tea.value;
    
    let teaval=0;

    switch(tea){
        case "Dilma":
            teaval=1000;
            break;
        case "Jones":
            teaval= 1500;
            break;
        case "George Steuart":
            teaval=1000;
            break;
        case "Malwatte valley plantations":
            teaval=2000;
            break;
        case "Prestige Ceylon teas":
            teaval=1000;
            break;
         case "Empire teas":
            teaval=2000;
            break;    
        default:
            alert("wrong input!")
    }

    let Packaging = document.getElementById("Packaging");
    Packaging = Packaging.value;

    let Packagingval=0;

    switch(Packaging){
        case "Paper pouches":
            Packagingval=1000;
            break;
        case "Tins(default)":
            Packagingval=5000;
            break;
        case "Bags":
            Packagingval=2500;
            break;
        default:
            alert("wrong input");
    }

    let size = document.getElementById("size");
    size = size.value;

    let sizeval=0;

    switch(Size){
        case "Small":
            sizeval=1000;
            break;
        case "Medium":
            sizeval=2500;
            break;
        case "large":
            sizeval=5000;
            break;
        default:
            alert("wrong input");
    }

    let extra = document.getElementById("extras");
    extra = extra.value;

    let extraval=0;

    switch(extras){
        case "mug":
            extraval=500;
            break;
        case "silver pin":
            extraval=1000;
            break;
        case "Wooden souvenir":
            extraval=1500;
            break;
        default:
            alert("wrong input");
    }



   



    document.getElementById("currentcost").value = teaval + Packagingval + sizeval + extraval;

 }