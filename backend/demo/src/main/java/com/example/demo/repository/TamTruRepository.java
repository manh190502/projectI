package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.TamTru;

public interface TamTruRepository extends MongoRepository<TamTru, String> {
  Optional<TamTru> findByMagiaytamtru(String magiaytamtru);

  Optional<TamTru> deleteByMagiaytamtru(String magiaytamtru);
  
  Page<TamTru> findAll(Pageable page);

  Page<TamTru> findByHotenContainingIgnoreCase(Pageable page, String hoten);

}