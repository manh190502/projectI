package com.example.demo.payloads.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class TaiKhoanRequest {
    private String taikhoan;

    private String matkhau;

    private String hoten;
}