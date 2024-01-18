package com.example.demo.payloads.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class TamVangRequest {
  private String magiaytamvang;

  private String mahokhau;

  private String hoten;

  private Date tungay;

  private Date denngay;

  private String lydo;

  private String nguoithuchien;
}