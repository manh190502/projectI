package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Diemdanh;

public interface DiemDanhRepository extends MongoRepository<Diemdanh, String> {
  Optional<Diemdanh> findByMabuoihopAndMahokhau(String mabuoihop, String mahokhau);
}