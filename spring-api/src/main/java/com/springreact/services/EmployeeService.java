package com.springreact.services;


import com.springreact.Entities.EmployeeEntity;
import com.springreact.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {
    Employee createEmployee(Employee emp);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(int id);

    Employee getEmployeeById(int id);

    Employee updateEmployee(Employee employee,int id);
}
