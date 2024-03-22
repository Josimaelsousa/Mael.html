//alert ('olá!') 
function carregar(){
    var msg= window.document.getElementById('msg')
    var imagem= window.document.getElementById('imagem')
    var data= new Date
   // var hora= data.getHours()
   var hora= 22
   
    msg.innerHTML= `agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        imagem.src= 'manha.png'
        document.body.style.background = '  rgb(241, 173, 146)'
    } else if( hora >= 12 && hora <18) {
    // boa tarde 
    imagem.src = 'tarde.png'  
   
   
    document.body.style.background= 'rgb(231, 100, 48)'
    
} else {
    // boa noite
    imagem.src= 'noite.png'
    document.body.style.background= 'rgb(8, 0, 93)'
    
}
}


           
