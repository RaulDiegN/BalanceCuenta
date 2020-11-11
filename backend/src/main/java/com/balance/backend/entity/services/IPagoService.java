package com.balance.backend.entity.services;



import com.balance.backend.entity.models.Pago;

import java.util.List;

public interface IPagoService {
    public List<Pago> getAll();

    public void post(Pago pago);
}
