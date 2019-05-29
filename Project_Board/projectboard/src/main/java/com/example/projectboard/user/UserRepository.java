package com.example.projectboard.user;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, String> {


//    User user1 = new User("1","Jan","Kowalski");
//        UserRepository.addUser(user1);

}
