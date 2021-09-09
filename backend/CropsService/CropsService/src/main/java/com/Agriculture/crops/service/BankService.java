package com.Agriculture.crops.service;

import java.util.List;

import com.Agriculture.crops.model.BankDto;


public interface BankService {

	public String saveBank(BankDto bankDto);
	
	public List<BankDto> getAllBank();
	
	public BankDto findById(String id);
	
	public String deleteBankById(String id);

	public String updateBank(BankDto bankDto);
}
