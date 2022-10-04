$(document).ready(function () {

    let date = new Date();
    
    let day = date.getDate();
        day = (`0${day}`).slice(-2);

    let month = date.getMonth() + 1;
        month = (`0${month}`).slice(-2);

    let year = date.getFullYear();

    // let date = new Date.now();
    let fecha_actual = `${year}-${month}-${day}`
    let fecha_actual_format = `${day}/${month}/${year}`

    $("#fecha").val(fecha_actual);

    listarTalleres();

    listarTipoPersonas();
    listarEscuelas();

    $("#taller").select2({
        placeholder: 'Seleccione un taller',
    });

    $("#taller").on("change", function (e) { 
        if ($("#taller").val() != null) {
            let taller_tema = $("#taller option:selected").text();
            let tema_id = $("#taller").val();

            $("#titulo_reporte").text(`Lista de asistencia: "${taller_tema}" del ${fecha_actual_format}`)

            listarReporte();
        }
    });

    $("#btn_registrar_asistencia").click(function (e) {
        consultarAsistencia();
    });

    $("#btn_consultar_dni").click(function () {
        consultarDni();
    });

    $("#btn_modal_persona").click(function (e) {
        listarTipoPersonas();
        listarEscuelas();
        $("#modal_agregar_persona").modal('show');
    });
    
    $("#btn_guardar_persona").click(function (e) {
        guardar_persona(e);
    });

});

function listarTalleres() {
    $.ajax({
        url: "/api/talleres",
        type: 'GET',
        success: function (data) {
            $("#taller option").remove();

            data.forEach((item, index, array) => {
                $("#taller").append(`<option value="${item.id}">${item.tema}</option>`);
            });

            $("#taller").val('').trigger('change');
        }
    });
}

function consultarAsistencia() {
    let id_persona = $("#persona").val();
    
    if (id_persona != null) {
        $.ajax({
            url: "/api/personas/search",
            type: 'GET',
            data: { 
                "filter": $("#persona_dni").val(), 
            },
            success: function (data) {
                if (data.length > 0) {
                    $("#persona").val(data[0].id)
                    //$("#fecha").val(fecha_actual)
                    
                    if ($("#taller").val() != null) {
                        console.log($("#persona").val())
                        console.log($("#fecha").val())
                        console.log($("#taller").val())

                        $.ajax({
                            url: "/api/asistencias",
                            type: 'POST',
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({
                                persona: {
                                    id: $("#persona").val()
                                },
                                taller: {
                                    id: $("#taller").val()
                                },
                                fecha: $("#fecha").val(),
                            }),
                            cache: false,
                            success: function (data) {
                                
                                Swal.fire({
                                    title: '!Guardado!',
                                    text: 'Registro asistencia registrada',
                                    icon: 'success',
                                    customClass: {
                                      confirmButton: 'btn btn-primary'
                                    },
                                    buttonsStyling: false
                                });
                
                                listarReporte();
                                limpiarReporte();
                            }
                        });
                        // alert("Guardando!!!")
                    }else{
                        Swal.fire({
                            title: 'Seleccione un taller',
                            text: 'Para guardar el registro se necesita que se seleccione un taller',
                            icon: 'error',
                            customClass: {
                              confirmButton: 'btn btn-primary'
                            },
                            buttonsStyling: false
                        });
                    }

                }else {
                    Swal.fire({
                        title: 'La persona no esta registrado',
                        text: 'La persona no se encuentra en nuestros registros, agregue sus datos.',
                        icon: 'warning',
                        customClass: {
                          confirmButton: 'btn btn-primary'
                        },
                        buttonsStyling: false
                    });

                    $("#modal_agregar_persona").modal('show');
                    $("#dni").val($("#persona_dni").val());
                    consultarDni();
                }
            }
        });
    }else {
        // Guardar registro
    }
}

function listarReporte() {
    $.ajax({
        url: "/api/asistencias/reporte",
        type: 'GET',
        data: { 
            "fecha": $("#fecha").val(), 
            "id_taller": $("#taller").val(), 
        },
        success: function (data) {
            $("#table_reporte tbody tr").remove();

            data.forEach((item, index, array) => {
                $("#table_reporte").append(
                    `<tr>
                        <td>${(index+1)}</td>
                        <td>${(item.persona.dni)}</td>
                        <td>${(item.persona.nombres)} ${item.persona.apellido_paterno} ${item.persona.apellido_materno}</td>
                        <td>${(item.persona.tipo_persona.nombre)}</td>
                        <td>${(item.fecha)}</td>
                    </tr>`
                );

            });
        }
    });
}

function validarRegistrarAsistencia() {
    $("#taller").val();
    $("#persona_dni").val();
    $("#persona_dni").val();
}

function limpiarReporte() {
    $("#persona").val(null)
    $("#persona_dni").val(null)
}

/** PERSONAS */

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

function unblock() {
    $('#section_block').unblock();
}

function guardar_persona(e){
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

                $("#persona_dni").val(data.dni)
                $("#persona").val(data.id)

                limpiar_persona();
            }
        });
        $("#modal_agregar_persona").modal('hide');
}

function limpiar_persona() {
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


