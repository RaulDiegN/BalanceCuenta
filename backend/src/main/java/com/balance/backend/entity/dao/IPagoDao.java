package com.balance.backend.entity.dao;


import com.balance.backend.entity.models.Pago;
import org.springframework.data.repository.CrudRepository;

public interface IPagoDao extends CrudRepository<Pago, Long> {
}
