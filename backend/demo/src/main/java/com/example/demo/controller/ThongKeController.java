package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.ThongKeService;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class ThongKeController {
  private static final Logger log = LogManager.getLogger(ThongKeController.class);
  
  @Autowired
  ThongKeService thongKeService;

  @GetMapping(value = "/thongketuoi")
  public CommonResponse<Object> thongKeTuoi(){
    CommonResponse<Object> response = new CommonResponse<Object>();

    try {
      response = thongKeService.thongkeTuoi();
    } catch (Exception e) {
      
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }

    return response;
  }

  @GetMapping(value = "/thongketamvang")
  public CommonResponse<Object> thongKeTamVang(){
    CommonResponse<Object> response = new CommonResponse<Object>();

    try {
      response = thongKeService.thongkeTamVang();
    } catch (Exception e) {
      
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }

    return response;
  }

  @GetMapping(value = "/thongketamtru")
  public CommonResponse<Object> thongKeTamTru(){
    CommonResponse<Object> response = new CommonResponse<Object>();

    try {
      response = thongKeService.thongkeTamTru();
    } catch (Exception e) {
      
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }

    return response;
  }
}