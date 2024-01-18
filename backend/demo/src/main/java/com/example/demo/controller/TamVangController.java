package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.TamVangRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.TamVangService;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class TamVangController {
  private static final Logger log = LogManager.getLogger(TamVangController.class);
    
  @Autowired
  TamVangService tamVangService;

  @PostMapping(value="/addtamvang")
  public CommonResponse<Object> addTamTru(@RequestBody TamVangRequest request) {
      //
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = tamVangService.themTamVang(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;

  }

  @GetMapping(value="/gettamvang")
  public CommonResponse<Object> getHoKhau(@RequestParam(required = true, defaultValue = "0") int page, @RequestParam(required = true, defaultValue = "") String text) {
    //
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = tamVangService.danhsachTamVang(page, text);
    } catch (Exception e) {
      //
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;

}

@DeleteMapping(value="/xoatamvang")
  public CommonResponse<Object> xoaTamVang(@RequestParam(required = true, defaultValue = "") String magiaytamvang){
    CommonResponse<Object> response = new CommonResponse<Object>();
    log.info("data gui ve {}",magiaytamvang);

    try {
      response = tamVangService.xoaTamVang(magiaytamvang);
    } catch (Exception e) {
    
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;
  }
}