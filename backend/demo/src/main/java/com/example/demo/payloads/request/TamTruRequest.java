package com.example.demo.payloads.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class TamTruRequest {
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

}