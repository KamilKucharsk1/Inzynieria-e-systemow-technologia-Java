package com.example.projectboard.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping("/users/{id}")
    public User getUser(@PathVariable String id){
        return userService.getUser(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/users/{id}")
    public void updateUser(@RequestBody User user, @PathVariable String id) {
        userService.updateUser(id, user);
    }

//    @RequestMapping(method = RequestMethod.POST, value="/login")
//    public List<User> checkUser(@RequestBody User user) { return userService.findUser(user.getUsername()); }

//

//public class LoginController {

//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public String doLogin( User user, BindingResult result) {
//        // login logic here
//    }



    @RequestMapping(method = RequestMethod.DELETE, value="/users/{id}")
    public void deleteUser(@PathVariable String id){
        userService.deleteUser(id);
    }
}
