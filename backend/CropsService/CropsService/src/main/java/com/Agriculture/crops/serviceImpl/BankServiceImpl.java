package com.Agriculture.crops.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Agriculture.crops.Repository.BankRepository;
import com.Agriculture.crops.entity.Bank;
import com.Agriculture.crops.model.BankDto;
import com.Agriculture.crops.service.BankService;

@Service
public class BankServiceImpl implements BankService {
	
	@Autowired
	BankRepository bankRepository;

	@Override
	public String saveBank(BankDto bankDto) {
		Bank bank = new Bank(bankDto.getId(),bankDto.getBankname(),bankDto.getAccountno(),bankDto.getIfsccode(),bankDto.getBranch());
		
		bankRepository.save(bank);
		return bankDto.getId();
	}

	

	@Override
	public List<BankDto> getAllBank() {

		List<Bank> bankList= bankRepository.findAll();
		
		List<BankDto> result = new ArrayList<BankDto>();
		if(!bankList.isEmpty()) {
			for(Bank s:bankList){
				BankDto bankDto = new BankDto(s.getId(),s.getBankname(),s.getAccountno(),s.getIfsccode(),s.getBranch());
				result.add(bankDto);
			}
		}
	return result;
	}

	@Override
	public BankDto findById(String id) {
		BankDto bankDto = null;
		Optional<Bank> bank = bankRepository.findById(id);
		
		if(bank.isPresent()) {
			Bank s =bank.get();
			bankDto = new BankDto(s.getId(),s.getBankname(),s.getAccountno(),s.getIfsccode(),s.getBranch());
		}
		
	    return bankDto;
	}

	@Override
	public String deleteBankById(String id) {
		bankRepository.deleteById(id);
		return "bank deleted";
	}

	@Override
	public String updateBank(BankDto bankDto) {
		Optional<Bank> bank = bankRepository.findById(bankDto.getId());

		Bank updatedBank = null;
		if(bank.isPresent()){
			Bank bank1 = new Bank(bankDto.getId(),bankDto.getBankname(),bankDto.getAccountno(),bankDto.getIfsccode(),bankDto.getBranch());

			bankRepository.save(bank1);
			return bank1.getId();
		}else{
			return "Unable to find bank";
		}
	}
}