package com.example.projectboard;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class HabitService {
    private List<Habit> habits = new ArrayList<>(Arrays.asList(
            new Habit("1", "Reading 30 pages per day", "Everyday", "Everyday", 45 ),
                    new Habit("2", "Walking with a dog", "Mo, Tue, Fri", "3x per week", 30 ),
                    new Habit("3", "Running", "We, Sun", "2x per week", 60),
                    new Habit("4", "Something else", "Every Monday", "1x per week", 20 )
            ));

    public List<Habit> getAllHabits() {
        return habits;
    }

    public Habit getHabit(String id) {
        return habits.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    }

    public void addHabit(Habit habit) {
        habits.add(habit);
    }

    public void updateHabit(String id, Habit habit) {
        for (int i = 0; i< habits.size(); i++) {
            Habit h = habits.get(i);
            if (h.getId().equals(id)){
                habits.set(i,habit);
                return;
            }
        }
    }

    public void deleteHabit(String id) {
        habits.removeIf(h -> h.getId().equals(id));
    }
}
