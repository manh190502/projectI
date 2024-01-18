package com.example.demo.service;

import com.example.demo.payloads.response.CommonResponse;

public interface ThongKeService {
  CommonResponse<Object> thongkeTuoi();

  CommonResponse<Object> thongkeTamVang();

  CommonResponse<Object> thongkeTamTru();
}