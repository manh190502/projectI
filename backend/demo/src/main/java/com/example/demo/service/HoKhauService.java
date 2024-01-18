package com.example.demo.service;

import com.example.demo.payloads.request.HoKhauRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface HoKhauService {
  CommonResponse<Object> themHoKhau(HoKhauRequest request);

  CommonResponse<Object> danhsachHokhau(int page, String text);

  CommonResponse<Object> suaHoKhau(HoKhauRequest request);

  CommonResponse<Object> chitietHoKhau(String mahokhau);
}