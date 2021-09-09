package com.Agriculture.order.service;

import java.util.List;

import com.Agriculture.order.model.OrderDto;

public interface OrderService {
    public String saveOrder(OrderDto orderDto);
	
	public List<OrderDto> getAllOrder();
	
	public OrderDto findById(String id);
	
	public String deleteOrderById(String id);

	public String updateOrder(OrderDto orderDto);

}
