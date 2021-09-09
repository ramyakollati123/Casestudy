package com.Agriculture.order.controller;

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
import com.Agriculture.order.model.OrderDto;
import com.Agriculture.order.service.OrderService;

@CrossOrigin
@RestController
@RequestMapping("/order")
@SuppressWarnings({"rawtypes","unchecked"})

public class OrderController {
	 @Autowired
	   OrderService orderServiceImpl;
	 
	  @PostMapping(value = "/save/order")
			public String saveOrder(@RequestBody OrderDto orderDto) {

				return orderServiceImpl.saveOrder(orderDto);
				
		  }
	  
	  @GetMapping(value="/getAll/order")
	    public List<OrderDto> getAllOrder(){
			return orderServiceImpl.getAllOrder();
			
		}
	  
	  @GetMapping(value="/getorder/byid/{id}")
	    public OrderDto findOrderById(@PathVariable String id){
			return orderServiceImpl.findById(id);
			
		}
	  
	  @PutMapping(value = "/update/order")
	    public String updateOrder(@RequestBody OrderDto orderDto) {
	        Optional<OrderDto> existing = Optional.ofNullable(orderServiceImpl.findById(orderDto.getId()));
	        if(existing.isPresent()){
	            String saved = orderServiceImpl.saveOrder(orderDto);
	            return "updated sucessfully";
	        }
	        return "order not found";
	    }
	  
	  @DeleteMapping(value="/deleteorder/byid/{id}")
	    public String deleteOrderById(@PathVariable String id){
			String success=orderServiceImpl.deleteOrderById(id);
			return "Deleted sucessfully";
			
		}
}
