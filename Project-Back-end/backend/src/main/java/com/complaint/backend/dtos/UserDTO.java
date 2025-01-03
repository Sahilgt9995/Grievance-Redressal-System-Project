package com.complaint.backend.dtos;

import com.complaint.backend.enums.UserRole;


import lombok.Data;




@Data

public class UserDTO {
private Long id;
private String name;
private String email; 
private Long phone; 
private String address; 
private String password;
private UserRole userRole;
}