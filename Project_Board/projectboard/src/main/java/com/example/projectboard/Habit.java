package com.example.projectboard;

import com.example.projectboard.user.User;
import org.springframework.beans.factory.annotation.Autowired;


import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



@Entity
public class Habit {

    //public  enum Days{MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY,SATURDAY,SUNDAY};
    public  enum Priority {HIGH, LOW, MEDIUM};

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
//    @Column
//    @ElementCollection
    //public Days[] days;
    //private String frequency;
    //private String duration;
    private String description;
    private Priority priority;
    @ManyToOne(targetEntity = User.class)
    private User user;


    private Day Monday;
    private Day Tuesday;
    private Day Wednesday;
    private Day Thursday;
    private Day Friday;
    private Day Saturday;
    private Day Sunday;



//private Days days;

    public Habit() {

    }
    //List<Days> days
    public Habit(String id, String name, String description, Priority priority, String userId) {

        this.id = id;
        this.name = name;
//        this.days = days;
//        this.duration = duration;
        this.description = description;
        this.priority = priority;
        this.Monday = new Day(false, Day.isDone.LEFT);
        this.Tuesday = new Day(false, Day.isDone.LEFT);
        this.Wednesday = new Day(false, Day.isDone.LEFT);
        this.Thursday = new Day(false, Day.isDone.LEFT);
        this.Friday = new Day(false, Day.isDone.LEFT);
        this.Saturday = new Day(false, Day.isDone.LEFT);
        this.Sunday = new Day(false, Day.isDone.LEFT);

        this.user = new User(userId,"","","","");

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



    public void setId(String id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public Day getMonday() {
        return Monday;
    }

    public void setMonday(Day monday) {
        Monday = monday;
    }

    public Day getTuesday() {
        return Tuesday;
    }

    public void setTuesday(Day tuesday) {
        Tuesday = tuesday;
    }

    public Day getWednesday() {
        return Wednesday;
    }

    public void setWednesday(Day wednesday) {
        Wednesday = wednesday;
    }

    public Day getThursday() {
        return Thursday;
    }

    public void setThursday(Day thursday) {
        Thursday = thursday;
    }

    public Day getFriday() {
        return Friday;
    }

    public void setFriday(Day friday) {
        Friday = friday;
    }

    public Day getSaturday() {
        return Saturday;
    }

    public void setSaturday(Day saturday) {
        Saturday = saturday;
    }

    public Day getSunday() {
        return Sunday;
    }

    public void setSunday(Day sunday) {
        Sunday = sunday;
    }


}
