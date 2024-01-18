package com.example.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.BuoiHop;

public interface BuoiHopRepository extends MongoRepository<BuoiHop, String> {

  Page<BuoiHop> findAll(Pageable page);

}