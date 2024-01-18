package com.example.demo.service;

import com.example.demo.payloads.request.TaiKhoanRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface TaiKhoanService {
    CommonResponse<Object> dangkyTaiKhoan(TaiKhoanRequest request);
    CommonResponse<Object> dangnhapTaiKhoan(TaiKhoanRequest request);
}