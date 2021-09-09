package com.Agriculture.crops.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Agriculture.crops.model.CropsDto;
import com.Agriculture.crops.service.CropsService;

@CrossOrigin
@RestController
@RequestMapping("/crops")
@SuppressWarnings({"rawtypes","unchecked"})
public class CropsController {
	  @Autowired
	   CropsService cropsServiceImpl;
	  
	  
	  @PostMapping(value = "/save/crops")
		public String saveCrops(@RequestBody CropsDto cropsDto) {

			return cropsServiceImpl.saveCrops(cropsDto);
			
	  }
	  
	  @GetMapping(value="/getAll/crops")
	    public List<CropsDto> getAllCrops(){
			return cropsServiceImpl.getAllCrops();
			
		}
	  
	  @GetMapping(value="/getcrops/byid/{id}")
	    public CropsDto findCropsById(@PathVariable String id){
			return cropsServiceImpl.findById(id);
			
		}
	  
	  @PutMapping(value = "/update/crops")
	    public String updateCrops(@RequestBody CropsDto cropsDto) {
	        Optional<CropsDto> existing = Optional.ofNullable(cropsServiceImpl.findById(cropsDto.getId()));
	        if(existing.isPresent()){
	            String saved = cropsServiceImpl.saveCrops(cropsDto);
	            return "updated sucessfully";
	        }
	        return "Crops not found";
	    }
	  
	  @DeleteMapping(value="/deletecrops/byid/{id}")
	    public String deleteCropsById(@PathVariable String id){
			String success=cropsServiceImpl.deleteCropsById(id);
			return "Deleted sucessfully";
			
		}

}
