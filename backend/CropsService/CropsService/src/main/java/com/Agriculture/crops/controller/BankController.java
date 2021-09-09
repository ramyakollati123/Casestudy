package com.Agriculture.crops.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Agriculture.crops.model.BankDto;
import com.Agriculture.crops.service.BankService;

@CrossOrigin
@RestController
@RequestMapping("/crops")
@SuppressWarnings({"rawtypes","unchecked"})
public class BankController {
	@Autowired
	   BankService bankServiceImpl;
	  
	 @PostMapping(value = "/save/bank")
		public String saveBank(@RequestBody BankDto bankDto) {

			return bankServiceImpl.saveBank(bankDto);
			
	  }
	 
	  
	  @GetMapping(value="/getAll/bank")
	    public List<BankDto> getAllBank(){
			return bankServiceImpl.getAllBank();
			
		}
	  @GetMapping(value="/getbank/byid/{id}")
	    public BankDto findBankById(@PathVariable String id){
			return bankServiceImpl.findById(id);
			
		}
	  
	  @PutMapping(value = "/update/bank")
	    public String updateBank(@RequestBody BankDto bankDto) {
	        Optional<BankDto> existing = Optional.ofNullable(bankServiceImpl.findById(bankDto.getId()));
	        if(existing.isPresent()){
	            String saved = bankServiceImpl.saveBank(bankDto);
	            return "updated sucessfully";
	        }
	        return "Bank not found";
	    }
	  
	  @DeleteMapping(value="/deletebank/byid/{id}")
	    public String deleteBankById(@PathVariable String id){
			String success=bankServiceImpl.deleteBankById(id);
			return "Deleted sucessfully";
			
		}


}
