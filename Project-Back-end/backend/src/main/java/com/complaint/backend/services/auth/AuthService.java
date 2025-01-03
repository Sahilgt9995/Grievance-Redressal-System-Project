package com.complaint.backend.services.auth;


import com.complaint.backend.dtos.SignupRequest;
import com.complaint.backend.dtos.UserDTO;
import com.complaint.backend.enums.UserRole;

public interface AuthService {


    UserDTO signup(SignupRequest signupRequest,UserRole role);
    

    Boolean hasUserWithEmail(String email);


    
}
