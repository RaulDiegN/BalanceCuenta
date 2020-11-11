package com.balance.backend.entity.services;


import com.balance.backend.entity.dao.IUsuarioDao;
import com.balance.backend.entity.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    private IUsuarioDao usuarioDao;

    @Override
    public List<Usuario> getAll() {
        return (List<Usuario>) usuarioDao.findAll();
    }

    @Override
    public void post(Usuario usuario) {
        usuarioDao.save(usuario);
    }

    @Override
    public void put(Long id_user, double importe) {
        usuarioDao.findById(id_user).ifPresent((x) -> {
            Usuario user = new Usuario((x.getName()), (x.getGasto() + importe));
            user.setId_user(x.getId_user());
            usuarioDao.save(user);
        });
    }
}
