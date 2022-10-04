
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Taller;
import com.bsame.hub.maj.service.base.BaseService;

import java.util.List;

public interface TallerService extends BaseService<Taller, Long> {

    List<Taller> talleresActuales() throws Exception;
}
