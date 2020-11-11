package com.balance.backend.entity.dao;


import com.balance.backend.entity.models.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {
}
