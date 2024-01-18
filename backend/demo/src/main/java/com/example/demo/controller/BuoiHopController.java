package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.BuoiHopRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.BuoiHopService;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class BuoiHopController {
  private static final Logger log = LogManager.getLogger(BuoiHopController.class);
    
  @Autowired
  BuoiHopService buoiHopService;

  @PostMapping(value="/addbuoihop")
  public CommonResponse<Object> addBuoiHop(@RequestBody BuoiHopRequest request) {
      //
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = buoiHopService.themBuoiHop(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;

  }

  @GetMapping(value="/getbuoihop")
  public CommonResponse<Object> getHoKhau(@RequestParam(required = true, defaultValue = "0") int page) {
    //
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = buoiHopService.danhsachBuoiHop(page);
    } catch (Exception e) {
      //
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;

}
}