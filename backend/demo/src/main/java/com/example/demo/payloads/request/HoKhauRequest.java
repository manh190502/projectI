package com.example.demo.payloads.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class HoKhauRequest {
    private String mahokhau;

    private String makhuvuc;

    private String diachi;

    private String tenchuho;

    private Date ngaychuyendi;
    
    private String lydochuyen;
    
    private String nguoithuchien;
    
    private String ghichu;
    
    private int diemtichluy;

}