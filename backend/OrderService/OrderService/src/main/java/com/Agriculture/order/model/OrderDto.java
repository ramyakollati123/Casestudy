package com.Agriculture.order.model;

public class OrderDto {
	private String id;
	private String cropname;
	private String amount;
	private String address;
	private String city;
	private String pincode;
	
	public OrderDto() {
		
	}
	
	public OrderDto(String id, String cropname, String amount, String address, String city, String pincode) {
		super();
		this.id = id;
		this.cropname = cropname;
		this.amount = amount;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCropname() {
		return cropname;
	}

	public void setCropname(String cropname) {
		this.cropname = cropname;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "OrderDto [id=" + id + ", cropname=" + cropname + ", amount=" + amount + ", address=" + address
				+ ", city=" + city + ", pincode=" + pincode + "]";
	}
	
	
	


}
