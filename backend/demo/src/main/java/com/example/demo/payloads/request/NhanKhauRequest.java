package com.example.demo.payloads.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class NhanKhauRequest {
  private String mahokhau;
  
  private String name;

  private String nickname;

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

  private String nguoithuchien;

  private String ghichu;
}