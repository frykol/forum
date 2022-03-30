package com.eryk.forum.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> findAllUsers(){
        return userRepo.findAll();
    }

    public User findUserById(Long id){
        return userRepo.findUserById(id).orElseThrow(() -> new UserNotFoundException("Ten użytkownik nie istnieje"));
    }

    public User addUser(User user){
        return userRepo.save(user);
    }
}
