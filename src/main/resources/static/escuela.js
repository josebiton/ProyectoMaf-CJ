$(document).ready(function (){
    listar();
});
function listar(){
   $.ajax({
        url: "/escuela/all",
        type: 'GET',
        success: function (x) {
            $("#table tbody tr").remove();
            x.forEach((item,index,array)=>{
                $("#table").append(
                        "<tr>\n\
                            <td>" + (index + 1) + "</td>\n\
                            <td>" + item.Escuela + "</td>\n\
                            <td>" + item.F + "</td>\n\
                            <td style='text-align: center'>\n\
                             <a href='#' onclick='editar("+ item.idEscu + ")'><i class='fa-solid fa-pen-to-square yelow'></i></a>\n\
                            </td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='eliminar(" + item.idEscu + ")'><i class='fa-solid fa-trash-can red'></i></a>\n\
                            </td>\n\
                        </tr>");
                
            });
    }
   }); 
}
function editar(id) {
    $.ajax({
        url: "/escuela/" + id,
        type: 'GET',
        success: function (w) {
            $("#edit_id").val(w.idEscu),
            $("#edit_escuela").val(w.Escuela);
            $("#edit_facultad").val(w.Facultad);
        }
    });
    $("#editarModal").modal('show');
}

function eliminar(id) {
    bootbox.confirm({
        message: "Realmente desea Eliminar?",
        buttons: {
            confirm: {
                label: 'SI',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    url: "/escuela/" + id,
                    type: 'DELETE',
                    success: function (w) {
                        bootbox.alert({
                            message: "Registro eliminado correctamente...!",
                            callback: function () {
                                console.log('This was logged in the callback!');
                            }
                        });
                        listar();
                    }
                });
            } else {
                bootbox.alert({
                    message: "Registro no eliminado!",
                    size: 'small'
                });
            }
        }
    });
}
$("#guardar").click(function () {
    $.ajax({
        url: "/escuela/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({'nombres': nombre, 'apellidos': apellido, 'estado':true}),
        data: JSON.stringify({
            Escuela: $("#escuela").val(),
            Facultad: $("#facultad").val(), 
            Estado:true
        }),
        cache: false,
        success: function (w) {
            bootbox.alert({
                message: "Registro guardado correctamente...!",
                callback: function () {
                    console.log('This was logged in the callback!');
                }
            });
            /*bootbox.dialog({
                message: '<p class="text-center mb-0"><i class="fa fa-spin fa-cog"></i> Registro guardado correctamente</p>',
                closeButton: false,
            });*/
            // do something in the background
            // dialog.modal('hide');
            limpiar();
            listar();
        }
    });
    $("#exampleModal").modal('hide');
});
function limpiar() {
    $("#escuela").val();
    $("#facultad").val();
}

$("#modificar").click(function () {
    var escuela = $("#editar_escuela").val();
    var facultad = $("#editar_facultad").val();
    var id = $("#editar_id").val();
    bootbox.confirm({
        message: "Realmente desea Modificar?",
        buttons: {
            confirm: {
                label: 'SI',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    url: "/escuela/update",
                    type: 'PUT',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        idEscu: $("#edit_id").val(),
                        Escuela: $("#edit_escuela").val(),
                        Facultad: $("#edit_facultad").val()
                    }),
                    // data: JSON.stringify({'id': id, 'nombres': nombres, 'apellidos': apellidos}),
                    cache: false,
                    success: function (w) {
                        bootbox.alert({
                            message: "Registro Modificado correctamente...!",
                            /*callback: function () {
                                console.log('This was logged in the callback!');
                            }*/
                        });
                        limpiar();
                        listar();
                    }
                });
                $("#editarModal").modal('hide');
            } else {
                bootbox.alert({
                    message: "Registro no Modificado!",
                    size: 'small'
                });
            }
        }
    });
});
