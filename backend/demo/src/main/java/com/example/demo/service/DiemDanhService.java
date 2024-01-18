package com.example.demo.service;

import com.example.demo.payloads.request.DiemdanhRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface DiemDanhService {
  CommonResponse<Object> diemdanh(DiemdanhRequest request);
    
}