
package com.bsame.hub.maj.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.bsame.hub.maj.entity.base.Base;
import lombok.*;

@Entity
@Table(name = "personas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Persona extends Base {

    @Column(name = "codigo")
    private String codigo;
    @Column(name = "dni")
    private String dni;
    @Column(name = "nombres")
    private String nombres;
    @Column(name = "apellido_paterno")
    private String apellido_paterno;
    @Column(name = "apellido_materno")
    private String apellido_materno;
    @Column(name = "ciclo")
    private String ciclo;

    @ManyToOne
    @JoinColumn(name="id_tipo_persona")
    private TipoPersona tipo_persona;

    @ManyToOne
    @JoinColumn(name="id_escuela")
    private Escuela escuela;
}
 

