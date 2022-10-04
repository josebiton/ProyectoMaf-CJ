$(document).ready(function () {
    listar();
    listarProgramas();

    $("#btn_guardar").click(function (e) {
        let id = $("#id").val();
       
        if (id == null || id == '') {
            guardar(e);
        }else{
            editar(e);
        }
        
    });

    $('#btn_nuevo').click(function () {
        $("#titulo_modal").text("Agregar nuevo taller")
        limpiar();
        listarProgramas();
    });

    $("#programa").select2({
        placeholder: 'Seleccione un programa',
        dropdownParent: $('#modal_agregar'),
    });

});

function listar() {
    $.ajax({
        url: "/api/talleres",
        type: 'GET',
        success: function (data) {
            $("#table tbody tr").remove();

            data.forEach((item, index, array) => {
                $("#table").append(
                    `<tr>
                        <td>${(index+1)}</td>
                        <td>${item.programa.nombre}</td>
                        <td>${item.tema}</td>
                        <td>${item.fecha} ${item.hora}</td>
                        <td>${item.lugar}</td>
                        <td>${item.direccion}</td>
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

function listarProgramas() {
    $.ajax({
        url: "/api/programas",
        type: 'GET',
        success: function (data) {
            $("#programa option").remove();

            data.forEach((item, index, array) => {
                $("#programa").append(`<option value="${item.id}">${item.nombre}</option>`);
            });
        }
    });
}

function guardar(e){
    e.preventDefault();
    $.ajax({
            url: "/api/talleres",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                programa: {
                    id: $("#programa").val()
                },
                tema: $("#tema").val(),
                fecha: $("#fecha").val(),
                hora: $("#hora").val(),
                lugar: $("#lugar").val(),
                direccion: $("#direccion").val(),
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
    $("#titulo_modal").text("Actualizar programa")
    $.ajax({
        url: "/api/talleres/" + id,
        type: 'GET',
        success: function (data) {
            $("#modal_agregar").modal('show');

            $("#id").val(data.id);
            $("#programa").val(data.programa.id).trigger('change');
            $("#tema").val(data.tema);
            $("#fecha").val(data.fecha);
            $("#hora").val(data.hora);
            $("#lugar").val(data.lugar);
            $("#direccion").val(data.direccion);
        }
    });
}

function editar(e) {
    e.preventDefault();
    $.ajax({
        url: "/api/talleres/" + $("#id").val(),
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            id: $("#id").val(),
            programa: {
                id: $("#programa").val()
            },
            tema: $("#tema").val(),
            fecha: $("#fecha").val(),
            hora: $("#hora").val(),
            lugar: $("#lugar").val(),
            direccion: $("#direccion").val(),
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
                url: `/api/talleres/${id}`,
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
    $("#programa").val('').trigger('change');
    $("#tema").val('');
    $("#fecha").val('');
    $("#hora").val('');
    $("#lugar").val('');
    $("#direccion").val('');
}