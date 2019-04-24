package com.example.projectboard;

import com.example.projectboard.user.User;



import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Habit {

    @Id
    private String id;
    private String name;
    private String days;
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

    public Habit(String id, String name, String days, String frequency, String duration, String userId) {
        this.id = id;
        this.name = name;
        this.days = days;
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
