package com.example.demo.service;

import com.example.demo.payloads.request.BuoiHopRequest;
import com.example.demo.payloads.response.CommonResponse;

public interface BuoiHopService {
  CommonResponse<Object> themBuoiHop(BuoiHopRequest request);

  CommonResponse<Object> danhsachBuoiHop(int page);

}