package com.springreact.services.Employee;

import com.springreact.Entities.EmployeeEntity;
import com.springreact.exceptions.NoEmployeeException;
import com.springreact.model.Employee;
import com.springreact.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class EmployeeServiceImp implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    // create new employee
    @Override
    public Employee createEmployee(Employee emp) {
        EmployeeEntity empEntity =new EmployeeEntity() ;
        // copy properties from emp to empEntity
        BeanUtils.copyProperties(emp,empEntity);
        //save employee to db
        employeeRepository.save(empEntity) ;
        //
        return emp ;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> listEmpEntity =employeeRepository.findAll() ;

        // convert entity objects to model object
        List<Employee> listEmployee =listEmpEntity.stream().
                map(
                e-> new Employee(e.getId(),
                        e.getFirstName(),
                        e.getLastName(),
                        e.getEmail())
                ).collect(Collectors.toList());

        return listEmployee ;
    }

    @Override
    public boolean deleteEmployee(int id)  {
        try{
            EmployeeEntity emp= employeeRepository.findById(id).get() ;
            employeeRepository.deleteById(id);
            return true;
        }catch(Exception e){
            throw  new NoEmployeeException("employee not found") ;
        }

    }

    @Override
    public Employee getEmployeeById(int id) {
        try{
            EmployeeEntity employeeEntity =employeeRepository.findById(id).get() ;
            Employee emp = new Employee() ;
            BeanUtils.copyProperties(employeeEntity,emp);
            return emp;
        }catch(Exception e){
            throw new NoEmployeeException("employee not found") ;
        }
    }

    @Override
    public Employee updateEmployee(Employee employee,int id) {
        try{
            EmployeeEntity employeeEntity =employeeRepository.findById(id).get() ;
            employeeEntity.setEmail(employee.getEmail());
            employeeEntity.setFirstName(employee.getFirstName());
            employeeEntity.setLastName(employee.getLastName());
            employeeRepository.save(employeeEntity);
            return employee ;
        }catch(Exception e){
                throw new NoEmployeeException("No employee with the provided id") ;
        }
    }
}
