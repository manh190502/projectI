package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "tamtru")
@Data
public class TamTru {
    private String id;

    private String magiaytamtru;

    private String hoten;

    private Date ngaysinh;

    private String gioitinh;

    private String nguyenquan;

    private String dantoc;

    private String cccd;

    private String nghenghiep;

    private String noitamtru;

    private Date tungay;

    private Date denngay;

    private String lydo;

    private String nguoithuchien;

    private Date ngaytao;

}