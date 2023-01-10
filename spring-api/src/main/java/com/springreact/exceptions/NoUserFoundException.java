package com.springreact.exceptions;

import java.util.NoSuchElementException;

public class NoUserFoundException extends NoSuchElementException {

    public NoUserFoundException(String msg){
        super(msg);
    }
}
