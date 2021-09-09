package com.Agriculture.crops.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.Agriculture.crops.entity.Crops;

@Repository
public interface CropsRepository extends MongoRepository<Crops, String>{

}
