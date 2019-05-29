package com.example.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.projectboard.user.User;

import java.util.List;

@RestController
public class HabitController {

    @Autowired
    private HabitService habitService;

    @RequestMapping("users/{id}/habits")
    public List<Habit> getAllHabits(@PathVariable String id){
        return habitService.getAllHabits(id);
    }

    @RequestMapping("users/{userId}/habits/{id}")
    public Habit getHabit(@PathVariable String id){
        return habitService.getHabit(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="users/{userId}/habits")
    public void addHabit(@RequestBody Habit habit, @PathVariable String userId) {

        habit.setUser(new User(userId,"","",""));

 
        habitService.addHabit(habit);
    }

    @RequestMapping(method = RequestMethod.PUT, value="users/{userId}/habits/{id}")
    public void updateHabit(@RequestBody Habit habit, @PathVariable String userId,@PathVariable String id) {

        habit.setUser(new User(userId,"","", ""));

        habitService.updateHabit(habit);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="users/{userId}/habits/{id}")
    public void deleteHabit(@PathVariable String id){

        habitService.deleteHabit(id);
    }
}
