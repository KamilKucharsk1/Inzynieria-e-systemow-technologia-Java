
package com.example.projectboard.user;


import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    private List<Event> habits = new ArrayList<>(Arrays.asList(
//            new Event("1", "Reading 30 pages per day", "Everyday", "Everyday", 45 ),
//                    new Event("2", "Walking with a dog", "Mo, Tue, Fri", "3x per week", 30 ),
//                    new Event("3", "Running", "We, Sun", "2x per week", 60),
//                    new Event("4", "Something else", "Every Monday", "1x per week", 20 )
//            ));

    public List<User> getAllUsers() {

        //return users;
        List<User> users = new ArrayList<>();
        userRepository.findAll()
                .forEach(users::add);
        return users;
    }

    public User getUser(String id) {

        //return habits.stream().filter(t -> t.getId().equals(id)).findFirst().get();
        return userRepository.findById(id).get();
    }

    public void addUser(User user) {

        userRepository.save(user);
    }

    public void updateUser(String id, User user) {
        userRepository.save(user);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    @Bean("first")
    InitializingBean sendDatabase(){
        return () ->{
            userRepository.save(new User("","Jan","Jankowski", "haslo123"));
            userRepository.save(new User("","Paweł","Pawłowski", "haslo123"));
            userRepository.save(new User("","Mateusz","Nowak", "haslo123"));


        };
    }

}

