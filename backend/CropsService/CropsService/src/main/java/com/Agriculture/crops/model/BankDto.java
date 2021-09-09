package com.Agriculture.crops.model;

public class BankDto {
	private String id;
	private String bankname;
	private String accountno;
	private String ifsccode;
	private String branch;
	

	public BankDto() {

	}

	public BankDto(String id, String bankname, String accountno, String ifsccode, String branch) {
		super();
		this.id = id;
		this.bankname = bankname;
		this.accountno = accountno;
		this.ifsccode = ifsccode;
		this.branch = branch;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}

	public String getAccountno() {
		return accountno;
	}

	public void setAccountno(String accountno) {
		this.accountno = accountno;
	}

	public String getIfsccode() {
		return ifsccode;
	}

	public void setIfsccode(String ifsccode) {
		this.ifsccode = ifsccode;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	@Override
	public String toString() {
		return "BankDto [id=" + id + ", bankname=" + bankname + ", accountno=" + accountno + ", ifsccode=" + ifsccode
				+ ", branch=" + branch + "]";
	}
}
	

	