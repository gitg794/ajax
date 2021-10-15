var array= [
    {"usuario": "maria", "contraseña": "1122"},
    {"usuario": "jose", "contraseña": "1122"},
    {"usuario": "ana", "contraseña": "1122"}
];

function entrar(){
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('pass').value;
    x = false; //variable retorno
    
    for(var i=0 in array){ //recorrer array
        if(usuario == array[i]["usuario"] && contraseña == array[i]["contraseña"]){ //valido el usuario y la contraseña
            // alert('exito');
            let captch = prompt('2x3 ?');

            if(captcha(captch)){
                x= true;
                break; //termino el siclo
            }else{
                x= false;
            }
            
        }else{
            console.log(array[i]["usuario"] );
            x= false;
        }
    }

    if(x == true){
        alert('muy bien');
    }else{
        alert('hay algo malo');
    }
    return x;
}


function captcha(res){
    if(res == 6){
        return true;
    }else{
        return false;
    }
}