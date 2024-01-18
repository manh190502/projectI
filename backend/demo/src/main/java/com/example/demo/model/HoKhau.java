package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "hokhau")
@Data
public class HoKhau {
    private String id;

    private String mahokhau;

    private String makhuvuc;

    private String diachi;

    private String tenchuho;

    private Date ngaychuyendi;
    
    private String lydochuyen;
    
    private String nguoithuchien;
    
    private String ghichu;
    
    private int diemtichluy;

    private Date ngaytao;

    private Date ngaycapnhat;
}