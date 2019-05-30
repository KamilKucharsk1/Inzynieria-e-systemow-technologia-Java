
package com.example.projectboard;

import com.example.projectboard.Day.Day;
import com.example.projectboard.user.User;



import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


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
    @ManyToOne
    private Day Monday;
    @ManyToOne
    private Day Tuesday;
    @ManyToOne
    private Day Wednesday;
    @ManyToOne
    private Day Thursday;
    @ManyToOne
    private Day Friday;
    @ManyToOne
    private Day Saturday;
    @ManyToOne
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

        this.user = new User(userId,"","","");

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

//    public String getFrequency() {
//        return frequency;
//    }
//
//    public void setFrequency(String frequency) {
//        this.frequency = frequency;
//    }
//
//    public String getDuration() {
//        return duration;
//    }
//
//    public void setDuration(String duration) {
//        this.duration = duration;
//    }

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


}

