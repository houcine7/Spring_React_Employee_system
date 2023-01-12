package com.springreact.controllers;


import com.springreact.exceptions.NoEmployeeException;
import com.springreact.model.Employee;
import com.springreact.services.Employee.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService ;

    // employee api methods
    // to save employee
    @PostMapping("/")
    public Employee saveEmployee(@RequestBody Employee emp){
        return employeeService.createEmployee(emp) ;
    }

    // get all employees
    @GetMapping("/")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees() ;
    }

    // delete use by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<Boolean,String>> deleteEmployee(@PathVariable int id){
        try{
            boolean deleted = employeeService.deleteEmployee(id) ;
            Map<Boolean,String> response =new HashMap<>() ;
            response.put(deleted,"deleted successfuly") ;
            return ResponseEntity.ok(response) ;

        }catch (NoEmployeeException e){
            Map<Boolean,String> response =new HashMap<>();
            response.put(false,"Not found" );
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
    //get user by id
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        try{
            //
            Employee employee =employeeService.getEmployeeById(id) ;
            return new ResponseEntity<>(employee,HttpStatus.ACCEPTED);
        }catch (NoEmployeeException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employee){
        try{
            Employee updatedEmployee =employeeService.updateEmployee(employee,id) ;
            return new ResponseEntity<>(updatedEmployee ,HttpStatus.ACCEPTED);
        }catch (NoEmployeeException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
