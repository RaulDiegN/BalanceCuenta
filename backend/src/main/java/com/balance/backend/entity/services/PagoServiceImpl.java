package com.balance.backend.entity.services;


import com.balance.backend.entity.dao.IPagoDao;
import com.balance.backend.entity.models.Pago;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagoServiceImpl implements IPagoService {

    @Autowired
    private IPagoDao pagoDao;

    @Override
    public List<Pago> getAll() {
        return (List<Pago>) pagoDao.findAll();
    }

    @Override
    public void post(Pago pago) {
        pagoDao.save(pago);
    }
}
