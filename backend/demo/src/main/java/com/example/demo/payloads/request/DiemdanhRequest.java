package com.example.demo.payloads.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class DiemdanhRequest {
  private String mahokhau;

  private String mabuoihop;
}