package com.Agriculture.crops.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Agriculture.crops.entity.Bank;

@Repository
public interface BankRepository extends MongoRepository<Bank, String>{

}
