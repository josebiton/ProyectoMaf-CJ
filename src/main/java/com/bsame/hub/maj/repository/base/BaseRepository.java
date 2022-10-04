package com.bsame.hub.maj.repository.base;

import com.bsame.hub.maj.entity.base.Base;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface BaseRepository <E extends Base, ID extends Serializable> extends JpaRepository<E, ID> {
}
