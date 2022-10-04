$(document).ready(function () {
    listar();
    listarTipoPersonas();
    listarEscuelas();

    // No usar
    $("#btn_consultar_dni").click(function () {
        consultarDni();
    });

    $("#btn_guardar").click(function (e) {
        let id = $("#id").val();
       
        if (id == null || id == '') {
            guardar(e);
        }else{
            editar(e);
        }
        
    });

    $('#btn_nuevo').click(function () {
        $("#titulo_modal").text("Agregar nueva persona")
        limpiar();
        listarTipoPersonas();
        listarEscuelas();
    });

});

function listar() {
    $.ajax({
        url: "/api/personas",
        type: 'GET',
        success: function (data) {
            $("#table tbody tr").remove();
            // let html = ;

            data.forEach((item, index, array) => {
                $("#table").append(
                    `<tr>
                        <td>${(index+1)}</td>
                        <td>${(item.dni)}</td>
                        <td>${(item.nombres)} ${item.apellido_paterno} ${item.apellido_materno}</td>
                        <td>${(item.tipo_persona.nombre)}</td>
                        <td>${(item.escuela.nombre)}</td>
                        <td>${(item.ciclo ? item.ciclo : '-')}</td>
                        <td>
                            <button type="button" class="btn btn-icon btn-warning waves-effect waves-float waves-light btn-sm" onclick="mostrar(${item.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>
                            <button type="button" class="btn btn-icon btn-danger waves-effect waves-float waves-light btn-sm" onclick="eliminar(${item.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>
                        </td>
                    </tr>`
                );

            });
        }
    });
}

function listarTipoPersonas() {
    $.ajax({
        url: "/api/tipo_personas",
        type: 'GET',
        success: function (data) {
            $("#tipo_persona option").remove();

            data.forEach((item, index, array) => {
                $("#tipo_persona").append(`<option value="${item.id}">${item.nombre}</option>`);
            });
        }
    });
}

function listarEscuelas() {
    $.ajax({
        url: "/api/escuelas",
        type: 'GET',
        success: function (data) {
            $("#escuela option").remove();
            $("#escuela").append(`<option value="">Ninguno</option>`);

            data.forEach((item, index, array) => {
                $("#escuela").append(`<option value="${item.id}">${item.nombre}</option>`);
            });
        }
    });
}

//No usar
function consultarDni() {
    let dni = $("#dni").val();

    if (dni.length > 0) {
        block();

        fetch("https://consultardoc.ceatec.com.pe/dni/" + dni)
        .then((response) => response.json())
        .then(function (data) {
    
            $("#nombres").val(data.nombres)
            $("#apellido_paterno").val(data.apellido_paterno)
            $("#apellido_materno").val(data.apellido_materno)
            unblock();
            console.log(data);
        })
        .catch(function (error) {
            unblock();
            console.error("Ha ocurrido un error");
            console.error(error);
        });
    }
}

//No usar
function block() {
    $('#section_block').block({
        message: '<div class="spinner-border text-white" role="status"></div>',
        css: {
            backgroundColor: 'transparent',
            border: '0'
        },
        overlayCSS: {
            opacity: 0.5
        }
    });
}

//No usar
function unblock() {
    $('#section_block').unblock();
}

function guardar(e){
    e.preventDefault();
    $.ajax({
            url: "/api/personas",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                dni: $("#dni").val(),
                tipo_persona: {
                    id: $("#tipo_persona").val()
                },
                nombres: $("#nombres").val(),
                apellido_paterno: $("#apellido_paterno").val(),
                apellido_materno: $("#apellido_materno").val(),
                escuela: {
                    id: $("#escuela").val()
                },
                codigo: $("#codigo").val(),
                ciclo: $("#ciclo").val(),
            }),
            cache: false,
            success: function (data) {
                
                Swal.fire({
                    title: '!Guardado!',
                    text: 'Registro guardado correctamente',
                    icon: 'success',
                    customClass: {
                      confirmButton: 'btn btn-primary'
                    },
                    buttonsStyling: false
                });

                limpiar();
                listar();
            }
        });
        $("#modal_agregar").modal('hide');
}

function mostrar(id) {
    $("#titulo_modal").text("Actualizar persona")
    $.ajax({
        url: "/api/personas/" + id,
        type: 'GET',
        success: function (data) {
            $("#modal_agregar").modal('show');
            $("#id").val(data.id);
            $("#dni").val(data.dni);
            $("#tipo_persona").val(data.tipo_persona.id);
            $("#nombres").val(data.nombres);
            $("#apellido_paterno").val(data.apellido_paterno);
            $("#apellido_materno").val(data.apellido_materno);
            $("#escuela").val(data.escuela.id);
            $("#codigo").val(data.codigo);
            $("#ciclo").val(data.ciclo);

        }
    });
}

function editar(e) {
    e.preventDefault();
    $.ajax({
        url: "/api/personas/" + $("#id").val(),
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            id: $("#id").val(),
            dni: $("#dni").val(),
            tipo_persona: {
                id: $("#tipo_persona").val()
            },
            nombres: $("#nombres").val(),
            apellido_paterno: $("#apellido_paterno").val(),
            apellido_materno: $("#apellido_materno").val(),
            escuela: {
                id: $("#escuela").val()
            },
            codigo: $("#codigo").val(),
            ciclo: $("#ciclo").val(),
        }),
        cache: false,
        success: function (data) {
            
            Swal.fire({
                title: '!Actualizado!',
                text: 'Registro actualizado correctamente',
                icon: 'success',
                customClass: {
                    confirmButton: 'btn btn-primary'
                },
                buttonsStyling: false
            });

            limpiar();
            listar();
        }
    });
    $("#modal_agregar").modal('hide');
}

function eliminar(id) {
    Swal.fire({
        // title: "Eliminar",
        title: "¿Seguro que desea eliminar?",
        text: "Si elimina este registro no se podra recuperar en un futuro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-outline-secondary ml-1'
        },
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {

            $.ajax({
                url: `/api/personas/${id}`,
                type: 'DELETE',
                success: function (data) {
                   
                    Swal.fire({
                        icon: 'success',
                        title: '¡Eliminado!',
                        text: 'Su registro ha sido eliminado.',
                        customClass: {
                          confirmButton: 'btn btn-success'
                        }
                    });

                    listar();
                }
            });
        }
    });
}

function limpiar() {
    $("#id").val('');
    $("#dni").val('');
    $("#nombres").val('');
    $("#apellido_paterno").val('');
    $("#apellido_materno").val('');
    $("#tipo_persona").val('');
    $("#escuela").val('');
    $("#codigo").val('');
    $("#ciclo").val('');
}