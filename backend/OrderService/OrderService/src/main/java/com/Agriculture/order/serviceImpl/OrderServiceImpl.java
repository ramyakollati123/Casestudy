package com.Agriculture.order.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Agriculture.order.Repository.OrderRepository;
import com.Agriculture.order.entity.Order;
import com.Agriculture.order.model.OrderDto;
import com.Agriculture.order.service.OrderService;
@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	OrderRepository orderRepository;


	@Override
	public String saveOrder(OrderDto orderDto) {
    Order order = new Order(orderDto.getId(),orderDto.getCropname(),orderDto.getAmount(),orderDto.getAddress(),orderDto.getCity(),orderDto.getPincode());
		
		orderRepository.save(order);
		return orderDto.getId();
	}

	@Override
	public List<OrderDto> getAllOrder() {
	List<Order> orderList= orderRepository.findAll();
		
		List<OrderDto> result = new ArrayList<OrderDto>();
		if(!orderList.isEmpty()) {
			for(Order s:orderList){
				OrderDto orderDto = new OrderDto(s.getId(),s.getCropname(),s.getAmount(),s.getAddress(),s.getCity(),s.getPincode());
				result.add(orderDto);
			}
		}
	return result;	
	}

	@Override
	public OrderDto findById(String id) {
		OrderDto orderDto = null;
		Optional<Order> order = orderRepository.findById(id);
		
		if(order.isPresent()) {
			Order s =order.get();
			orderDto = new OrderDto(s.getId(),s.getCropname(),s.getAmount(),s.getAddress(),s.getCity(),s.getPincode());
		}
		
	    return orderDto;	
	}

	@Override
	public String deleteOrderById(String id) {
		orderRepository.deleteById(id);
		return "order deleted";
	}

	@Override
	public String updateOrder(OrderDto orderDto) {
		Optional<Order> order = orderRepository.findById(orderDto.getId());

		Order updatedOrder = null;
		if(order.isPresent()){
			Order order1 = new Order(orderDto.getId(),orderDto.getCropname(),orderDto.getAmount(),orderDto.getAddress(),orderDto.getCity(),orderDto.getPincode());

			orderRepository.save(order1);
			return order1.getId();
		}else{
			return "Unable to find order";
		}
	}

}
