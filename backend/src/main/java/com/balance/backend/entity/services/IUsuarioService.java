package com.balance.backend.entity.services;

import com.balance.backend.entity.models.Usuario;

import java.util.List;

public interface IUsuarioService {
    public List<Usuario> getAll();

    public void post(Usuario usuario);

    public void put(Long id_user, double importe);
}
