package com.example.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class HabitController {

    @Autowired
    private HabitService habitService;

    @RequestMapping("/habits")
    public List<Habit> getAllHabits(){
        return habitService.getAllHabits();
    }

    @RequestMapping("/habits/{id}")
    public Habit getHabit(@PathVariable String id){
        return habitService.getHabit(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/habits")
    public void addHabit(@RequestBody Habit habit) {
        habitService.addHabit(habit);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/habits/{id}")
    public void updateHabit(@RequestBody Habit habit, @PathVariable String id) {
        habitService.updateHabit(id, habit);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/habits/{id}")
    public void deleteHabit(@PathVariable String id){
        habitService.deleteHabit(id);
    }
}
