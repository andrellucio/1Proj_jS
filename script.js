
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

function carregar(){
 //var hora = 15
//msg.innerHTML = `são ${hora} horas. `
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom Dia! Agora são ${hora}:${min}`
        }
            else if(hora >= 12 && hora < 18){
            //BOA TARDE
            img.src = "tarde.png"
            document.body.style.background = '#CAAA81'
            msg.innerHTML = `Boa Tarde! Agora são ${hora}:${min}`
             }  
                    else {
                    //BOA NOITE
                    img.src = "noite.png"
                    document.body.style.background = "#05416E"
                    msg.innerHTML = `Boa Noite! Agora são ${hora}:${min}`
                    }

}



