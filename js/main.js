


    var user=   $.trim($('#user').val());
    var pass=   $.trim($('#pass').val());

    //alert(user);
    function entrar(){
    $.ajax({
        url: "php/consultas.php",
        type: "POST",
        dataType: "json",
        data: {opc: '1' ,usuario: user, contraseña: pass},
        success: function(data){
            alert('esta bien');
        },
        error: function(r){
            alert('algo esta mal');
        }
    });
    // .done(()=>{
    //     alert('todo esta bien');
    // })

    // .fail(()=>{
    //     alert('algo anda mal');
    // })
}

//////////////////////////Registro////////////////////////////7

function registro(){
    var direccion = $.trim($('#direccion').val);
    var cel       = $.trim($('#cel').val);
    var f_n       = $.trim($('#f_n').val);

    $.ajax({
        url: 'php/consultas.php',
        type: 'POST',
        dataType: 'json',
        data: {opc: '2', usuario: user, contraseña: pass, dereccion: direccion, cel: cel, f_n: f_n},
        success: function(data){
            alert('exito');
        },
        error: function(r){
            alert('error: '+ r);
        }
    });
}