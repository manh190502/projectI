package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "taikhoan")
@Data
public class TaiKhoan {
    private String id;

    private String taikhoan;
    
    private String matkhau;

    private String hoten;

    private String chucvu;

    private Date ngaytao;

    private Date ngaycapnhat;
}