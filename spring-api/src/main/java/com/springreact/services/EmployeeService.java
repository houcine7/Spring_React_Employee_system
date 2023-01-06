package com.springreact.services;


import com.springreact.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {
    Employee createEmployee(Employee emp);

    List<Employee> getAllEmployees();
}
