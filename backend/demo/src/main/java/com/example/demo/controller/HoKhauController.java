package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.HoKhauRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.HoKhauService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class HoKhauController {
  private static final Logger log = LogManager.getLogger(HoKhauController.class);
  
  @Autowired
  HoKhauService hoKhauService;

  @PostMapping(value="/addhokhau")
  public CommonResponse<Object> addHoKhau(@RequestBody HoKhauRequest request) {
      //
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = hoKhauService.themHoKhau(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;

  }

  @GetMapping(value="/gethokhau")
  public CommonResponse<Object> getHoKhau(@RequestParam(required = true, defaultValue = "0") int page, @RequestParam(required = true, defaultValue = "") String text) {
    //
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = hoKhauService.danhsachHokhau(page, text);
    } catch (Exception e) {
      //
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;

}

@GetMapping(value="/chitiethokhau")
public CommonResponse<Object> getHoKhau(@RequestParam(required = true, defaultValue = "") String mahokhau) {
  //
  CommonResponse<Object> response = new CommonResponse<Object>();
  try {
    response = hoKhauService.chitietHoKhau(mahokhau);
  } catch (Exception e) {
    //
    log.error(e);
    response.setStatus(EcodeConstant.ERR);
    response.setMesssage(EcodeConstant.ERR_MSG);
  }
  return response;

}

  @PutMapping(value ="/suahokhau")
  public CommonResponse<Object> suaHoKhau(@RequestBody HoKhauRequest request){
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = hoKhauService.suaHoKhau(request);
    } catch (Exception e) {
      //
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;
  }
  
}