package com.example.demo.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "buoihop")
@Data
public class BuoiHop {
    private String id;

    private String chude;

    private String noidung;

    private String diadiem;

    private Date thoigian;

    private String loai;

    private Object dsduocmoi[];

    private int soluong;
}