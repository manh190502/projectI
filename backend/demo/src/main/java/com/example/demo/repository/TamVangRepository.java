package com.example.demo.repository;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.TamVang;

public interface TamVangRepository extends MongoRepository<TamVang, String> {
  Optional<TamVang> findByMahokhauAndHoten(String mahokhau, String hoten);
  
  Optional<TamVang> findByMagiaytamvang(String magiaytamvang);

  Optional<TamVang> deleteByMagiaytamvang(String magiaytamvang);

  Page<TamVang> findAll(Pageable page);

  Page<TamVang> findByHotenContainingIgnoreCase(Pageable page, String hoten);


}