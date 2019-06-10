package com.example.projectboard.user;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


    //List<User> findB
//    User user1 = new User("1","Jan","Kowalski");
//        UserRepository.addUser(user1);


//    @Query("SELECT name FROM users where )
//    String findTitleById(@Param("login") String login, @Param("password") String password);


    @Query("SELECT name FROM User where name = ?1 and  password = ?2")
    Optional<User> checkUser(String name, String password);
}
