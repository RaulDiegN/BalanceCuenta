package com.balance.backend.entity.models;

import javax.persistence.*;
import java.util.Calendar;

@Entity
@Table(name = "pago")
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pago")
    private Long id_pago;

    @Column(name = "id_user", nullable = false)
    private Long id_user;

    @Column(name = "name_user", nullable = false)
    private String name_user;

    @Column(name = "descripcion", nullable = true)
    private String descripcion;

    @Column(name = "fecha", nullable = false)
    @Temporal(TemporalType.DATE)
    private Calendar fecha;

    @Column(name = "importe", nullable = false)
    private double importe;


    public Pago(Long id_user, String name_user, String descripcion, Calendar fecha, double importe) {
        this.id_user = id_user;
        this.name_user = name_user;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.importe = importe;
    }

    public Pago() {
        super();
    }

    public Long getId_pago() {
        return id_pago;
    }

    public void setId_pago(Long id_pago) {
        this.id_pago = id_pago;
    }

    public Long getId_user() { return id_user; }

    public void setId_user(Long id_user) { this.id_user = id_user; }

    public String getName_user() {
        return name_user;
    }

    public void setName_user(String name_user) {
        this.name_user = name_user;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Calendar getFecha() {
        return fecha;
    }

    public void setFecha(Calendar fecha) {
        this.fecha = fecha;
    }

    public double getImporte() {
        return importe;
    }

    public void setImporte(double importe) {
        this.importe = importe;
    }
}
