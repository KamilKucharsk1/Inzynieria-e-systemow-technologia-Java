package com.example.projectboard;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Habit {

    @Id
    private String id;
    private String name;
    private String days;
    private String frequency;
    private int duration;

    public Habit() {

    }

    public Habit(String id, String name, String days, String frequency, int duration) {
        this.id = id;
        this.name = name;
        this.days = days;
        this.frequency = frequency;
        this.duration = duration;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setId(String id) {
        this.id = id;
    }
}
