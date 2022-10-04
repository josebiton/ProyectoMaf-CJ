
package com.bsame.hub.maj.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.bsame.hub.maj.entity.base.Base;
import lombok.*;

@Entity
@Table(name="programas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Programa extends Base {

    @Column(name="nombre")
    private String nombre;

    @Column(name="descripcion")
    private String descripcion;
}
