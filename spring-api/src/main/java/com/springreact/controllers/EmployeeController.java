package com.springreact.controllers;


import com.springreact.exceptions.NoEmployeeException;
import com.springreact.model.Employee;
import com.springreact.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // delete use by id
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<Boolean,String>> deleteEmployee(@PathVariable int id){
        try{
            boolean deleted = employeeService.deleteEmployee(id) ;
            Map<Boolean,String> response =new HashMap<>() ;
            response.put(deleted,"deleted successfuly") ;
            return ResponseEntity.ok(response) ;

        }catch (NoEmployeeException e){
            Map<Boolean,String> response =new HashMap<>();
            response.put(false,"Not found" );
            return new ResponseEntity<>(response , HttpStatus.NOT_FOUND);
        }

    }

    //Edit user information



}
