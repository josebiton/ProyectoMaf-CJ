
package com.bsame.hub.maj.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.bsame.hub.maj.entity.base.Base;
import lombok.*;

@Entity 
@Table(name = "tipo_personas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TipoPersona extends Base {

    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "descripcion")
    private String descripcion;
}
