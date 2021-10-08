
function entrar(){

    var user=   $.trim($('#user').val());
    var pass=   $.trim($('#pass').val());

    //alert(user);

    $.ajax({
        url: "php/consultas.php",
        type: "POST",
        dataType: "json",
        data: {usuario: user, contraseña: pass},
        success: function(data){
            alert('esta bien');
        },
        error: function(r){
            alert('algo esta mal');
        }
    })
    // .done(()=>{
    //     alert('todo esta bien');
    // })

    // .fail(()=>{
    //     alert('algo anda mal');
    // })
}