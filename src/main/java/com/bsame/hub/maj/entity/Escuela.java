
package com.bsame.hub.maj.entity;

import javax.persistence.*;
import com.bsame.hub.maj.entity.base.Base;
import lombok.*;

@Entity
@Table(name = "escuelas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Escuela extends Base {

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_facultad")
    private Facultad facultad;

}
