package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.TaiKhoanRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.TaiKhoanService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@EnableAutoConfiguration
@RequestMapping("/api/auth")
@CrossOrigin
public class TaiKhoanController {
  private static final Logger log = LogManager.getLogger(TaiKhoanController.class);

  @Autowired
  TaiKhoanService taiKhoanService;


  @PostMapping(value="/dangky")
  public CommonResponse<Object> dangkyTaiKhoan(@RequestBody TaiKhoanRequest request) {
      // 
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = taiKhoanService.dangkyTaiKhoan(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;
  }

  @PostMapping(value="/dangnhap")
  public CommonResponse<Object> dangnhapTaiKhoan(@RequestBody TaiKhoanRequest request) {
      // 
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = taiKhoanService.dangnhapTaiKhoan(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;
  }
  
}