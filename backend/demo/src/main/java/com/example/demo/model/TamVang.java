package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "tamvang")
@Data
public class TamVang {
    private String id;

    private String magiaytamvang;

    private String mahokhau;

    private String hoten;

    private Date tungay;

    private Date denngay;

    private String lydo;

    private String nguoithuchien;

    private Date ngaytao;

}