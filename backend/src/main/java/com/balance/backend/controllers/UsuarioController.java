package com.balance.backend.controllers;

import com.balance.backend.entity.models.Usuario;
import com.balance.backend.entity.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/usuarios")
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("usuario")
    public void add(@RequestBody Usuario usuario) {
        usuarioService.post(usuario);
    }


}
