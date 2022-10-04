
package com.bsame.hub.maj.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.bsame.hub.maj.entity.base.Base;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "facultades")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Facultad extends Base {

    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "abreviatura")
    private String abreviatura;
}
