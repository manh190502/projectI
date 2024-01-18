package com.example.demo.service;

import com.example.demo.payloads.request.NhanKhauRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface NhanKhauService {
  CommonResponse<Object> themNhanKhau(NhanKhauRequest request);

  CommonResponse<Object> danhsachNhanKhau(String mahokhau);

  CommonResponse<Object> suaNhanKhau(NhanKhauRequest request);

  CommonResponse<Object> chitietNhanKhau(String idnhankhau);

}