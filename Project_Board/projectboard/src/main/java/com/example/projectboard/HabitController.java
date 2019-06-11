package com.example.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import com.example.projectboard.user.User;

import java.util.List;
import java.util.Optional;

@RestController
public class HabitController {

    @Autowired
    private HabitService habitService;

    private HabitRepository habitRepository;

    @RequestMapping("users/{id}/habits")
    public List<Habit> getAllHabits(@PathVariable Integer id){
        return habitService.getAllHabits(id);
    }

//    @RequestMapping("users/{userId}/habits/{id}")
//    public Habit getHabit(@PathVariable Integer id){
//        return habitService.getHabit(id);
//    }

    @RequestMapping("users/{userId}/habits/{id}")
    public Habit getHabit(@PathVariable Integer id ){
        return habitService.getHabit(id);
    }

    @RequestMapping("habits/{id}")
    public List<Habit> getAllUserHabits(@PathVariable Integer id) {return habitService.getAllHabits(id); }


    @RequestMapping(method = RequestMethod.POST, value="users/{userId}/habits")
    public void addHabit(@RequestBody Habit habit, @PathVariable Integer userId) {

        habit.setUser(new User(userId,"","",""));


        habitService.addHabit(habit);
    }

//    @RequestMapping(method = RequestMethod.PUT, value="users/{userId}/habits/{id}")
//    public void updateHabit(@RequestBody Habit habit, @PathVariable Integer id) {
//
//        habitService.updateHabit();
//
//        habitService.addHabit(habit);
//    }

//    @RequestMapping(method = RequestMethod.PUT, value="users/{userId}/habits/{id}")
//    public void updateHabit(@RequestBody Habit habit, @PathVariable String userId,@PathVariable Integer id) {
//
//
//        //habit.setId(id);
//        //habit.setUser(habit.getUser());
//
//    }

    @PutMapping(path ="/users/{userId}/habits/{id}", consumes = {"application/json"})
    public Habit saveOrUpdateHabit(@RequestBody Habit habit)
    {
        habitRepository.save(habit);
        return habit;
    }

//    @RequestMapping(method = RequestMethod.PUT, value = "users/{userId}/habits/{id}")
//    public void updateDone(@RequestBody Habit habit, @PathVariable String userId, @PathVariable String id){
//
//    }

    @RequestMapping(method = RequestMethod.DELETE, value="users/{userId}/habits/{id}")
    public void deleteHabit(@PathVariable Integer id){

        habitService.deleteHabit(id);
    }
}
