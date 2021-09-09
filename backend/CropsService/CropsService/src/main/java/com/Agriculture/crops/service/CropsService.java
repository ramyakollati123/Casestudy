package com.Agriculture.crops.service;

import java.util.List;

import com.Agriculture.crops.model.CropsDto;



public interface CropsService {

	public String saveCrops(CropsDto cropsDto);
	
	public List<CropsDto> getAllCrops();
	
	public CropsDto findById(String id);
	
	public String deleteCropsById(String id);

	public String updateCrops(CropsDto cropsDto);
}
