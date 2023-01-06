package com.springreact.controllers;


import com.springreact.model.Employee;
import com.springreact.repository.EmployeeRepository;
import com.springreact.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService ;


    // employee api methods

    // to save employee
    @PostMapping("/employees")
    public Employee saveEmployee(@RequestBody Employee emp){
        return employeeService.createEmployee(emp) ;
    }

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees() ;
    }
}
