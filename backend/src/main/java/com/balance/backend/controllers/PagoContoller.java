package com.balance.backend.controllers;

import com.balance.backend.entity.models.Pago;
import com.balance.backend.entity.services.IPagoService;
import com.balance.backend.entity.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PagoContoller {

    @Autowired
    IPagoService pagoService;
    @Autowired
    IUsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pagos")
    public List<Pago> getAllPagos() {
        return pagoService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/pago")
    public void add(@RequestBody Pago pago) {
        pagoService.post(pago);
        usuarioService.put(pago.getId_user(), pago.getImporte());
    }

}
