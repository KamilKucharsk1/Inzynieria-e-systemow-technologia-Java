package com.example.projectboard;

import com.example.projectboard.user.User;



import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Habit {

    public enum Days{MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY,SATURDAY,SUNDAY};

    @Id
    private String id;
    private String name;



    private Days days;
    private String frequency;
    private String duration;
    @ManyToOne(targetEntity = User.class)
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Habit() {

    }

    public Habit(String id, String name, Days day, String frequency, String duration, String userId) {
        this.id = id;
        this.name = name;
        this.days = day;
        this.frequency = frequency;
        this.duration = duration;
        this.user = new User(userId,"","");

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

    public Days getDays() {
        return days;
    }

    public void setDays(Days days) {
        this.days = days;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public void setId(String id) {
        this.id = id;
    }
}
