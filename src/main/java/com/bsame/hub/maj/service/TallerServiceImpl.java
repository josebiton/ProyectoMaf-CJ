
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Taller;
import com.bsame.hub.maj.repository.TallerRepository;
import com.bsame.hub.maj.repository.base.BaseRepository;
import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TallerServiceImpl extends BaseServiceImpl<Taller, Long> implements TallerService {
    @Autowired
    private TallerRepository tallerRepository;

    public TallerServiceImpl(BaseRepository<Taller, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Taller> talleresActuales() throws Exception {
      try {
          List<Taller> list = tallerRepository.talleresActuales();
          return list;
      }catch (Exception e){
          throw new Exception(e.getMessage());
      }
    }
}
