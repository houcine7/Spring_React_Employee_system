package com.springreact.exceptions;

import java.util.NoSuchElementException;

public class NoEmployeeException extends NoSuchElementException{

    public NoEmployeeException(String msg){
        super(msg) ;
    }
}
