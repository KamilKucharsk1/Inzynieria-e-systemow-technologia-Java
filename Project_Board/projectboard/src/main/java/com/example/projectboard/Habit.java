
package com.example.projectboard;

import com.example.projectboard.user.User;



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
    public boolean Monday_active;
    public boolean Tuesday_active;
    public boolean Wednesday_active;
    public boolean Thursday_active;
    public boolean Friday_active;
    public boolean Saturday_active;
    public boolean Sunday_active;
    public boolean Mon_done;
    public boolean Tue_done;
    public boolean Wed_done;
    public boolean Thu_done;
    public boolean Fri_done;
    public boolean Sat_done;
    public boolean Sun_done;


//private Days days;

    public Habit() {

    }
    //List<Days> days
    public Habit(String id, String name, String description, Priority priority, boolean Monday, boolean Tuesday, boolean Wednesday, boolean Thursday, boolean Friday, boolean Saturday, boolean Sunday, boolean Mon, boolean Tue, boolean Wed, boolean Thu, boolean Fri, boolean Sat, boolean Sun, String userId) {

        this.id = id;
        this.name = name;
//        this.days = days;
//        this.duration = duration;
        this.description = description;
        this.priority = priority;
        this.Monday_active = Monday;
        this.Tuesday_active = Tuesday;
        this.Wednesday_active = Wednesday;
        this.Thursday_active = Thursday;
        this.Friday_active = Friday;
        this.Saturday_active = Saturday;
        this.Sunday_active = Sunday;
        this.Mon_done = Mon;
        this.Tue_done = Tue;
        this.Wed_done = Wed;
        this.Thu_done = Thu;
        this.Fri_done = Fri;
        this.Sat_done = Sat;
        this.Sun_done = Sun;

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

