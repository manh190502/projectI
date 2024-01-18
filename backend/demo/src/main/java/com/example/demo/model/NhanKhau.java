package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "nhankhau")
@Data
public class NhanKhau {
    private String id;

    private String mahokhau;
    
    private String name;

    private String nickname;

    private String tenchuho;

    private Date ngaysinh;

    private String noisinh;

    private String gioitinh;

    private String nguyenquan;

    private String dantoc;

    private String tongiao;

    private String nghenghiep;

    private String noilamviec;

    private String cccd;

    private String ngaycapcccd;

    private String noicapcccd;

    private String diachihientai;

    private Date ngaydkythuongtru;

    private String noithuongtrutruocday;

    private String quanhechuho;

    //xem co dang tam tru, tam vang hay ko
    //vd: "tamtru", "tamvang",...
    private String trangthai;

    private Date ngaytao;

    private Date ngaycapnhat;

    private String nguoithuchien;

    private String ghichu;
}