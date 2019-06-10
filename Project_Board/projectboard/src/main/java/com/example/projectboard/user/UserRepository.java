package com.example.projectboard.user;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


    //List<User> findB
//    User user1 = new User("1","Jan","Kowalski");
//        UserRepository.addUser(user1);


}
