package com.Agriculture.crops.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Agriculture.crops.Repository.CropsRepository;
import com.Agriculture.crops.entity.Crops;
import com.Agriculture.crops.model.CropsDto;
import com.Agriculture.crops.service.CropsService;
@Service
public class CropsServiceImpl implements CropsService {
	
	@Autowired
	CropsRepository cropsRepository;

	@Override
	public String saveCrops(CropsDto cropsDto) {
		Crops crops = new Crops(cropsDto.getId(),cropsDto.getName(),cropsDto.getDescription(),cropsDto.getPrice(),cropsDto.getQuantity());
		
		cropsRepository.save(crops);
		return cropsDto.getId();
	}

	@Override
	public List<CropsDto> getAllCrops() {

		List<Crops> cropsList= cropsRepository.findAll();
		
		List<CropsDto> result = new ArrayList<CropsDto>();
		if(!cropsList.isEmpty()) {
			for(Crops s:cropsList){
				CropsDto cropsDto = new CropsDto(s.getId(),s.getName(),s.getDescription(),s.getPrice(),s.getQuantity());
				result.add(cropsDto);
			}
		}
	return result;	
	}

	@Override
	public CropsDto findById(String id) {
		CropsDto cropsDto = null;
		Optional<Crops> crops = cropsRepository.findById(id);
		
		if(crops.isPresent()) {
			Crops s =crops.get();
			cropsDto = new CropsDto(s.getId(),s.getName(),s.getDescription(),s.getPrice(),s.getQuantity());
		}
		
	    return cropsDto;	
	}

	@Override
	public String deleteCropsById(String id) {
		cropsRepository.deleteById(id);
		return "crops deleted";
	}

	@Override
	public String updateCrops(CropsDto cropsDto) {
		Optional<Crops> crops = cropsRepository.findById(cropsDto.getId());

		Crops updatedCrops = null;
		if(crops.isPresent()){
			Crops crops1 = new Crops(cropsDto.getId(),cropsDto.getName(),cropsDto.getDescription(),cropsDto.getPrice(),cropsDto.getQuantity());

			cropsRepository.save(crops1);
			return crops1.getId();
		}else{
			return "Unable to find crops";
		}
	}

}
