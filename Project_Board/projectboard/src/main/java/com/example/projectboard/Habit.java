
package com.example.projectboard;

import com.example.projectboard.user.User;



import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Null;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Entity
public class Habit {

    //public  enum Days{MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY,SATURDAY,SUNDAY};
    //public  enum Priority {HIGH, LOW, MEDIUM};

    public String priority;

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    public Integer id;
    public String name;
//    @Column
//    @ElementCollection
    //public Days[] days;
    //private String frequency;
    //private String duration;
    public String description;
    //public Priority priority;
    @ManyToOne(targetEntity = User.class)
    public User user;
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
    public Habit(Integer id, String name, String description, String priority, boolean Monday, boolean Tuesday, boolean Wednesday, boolean Thursday, boolean Friday, boolean Saturday, boolean Sunday, boolean Mon, boolean Tue, boolean Wed, boolean Thu, boolean Fri, boolean Sat, boolean Sun, Integer userId) {

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

    public Integer getId() {
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

    public void setId(Integer id) {
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



    public boolean isMonday_active() {
        return Monday_active;
    }

    public void setMonday_active(boolean monday_active) {
        Monday_active = monday_active;
    }

    public boolean isTuesday_active() {
        return Tuesday_active;
    }

    public void setTuesday_active(boolean tuesday_active) {
        Tuesday_active = tuesday_active;
    }

    public boolean isWednesday_active() {
        return Wednesday_active;
    }

    public void setWednesday_active(boolean wednesday_active) {
        Wednesday_active = wednesday_active;
    }

    public boolean isThursday_active() {
        return Thursday_active;
    }

    public void setThursday_active(boolean thursday_active) {
        Thursday_active = thursday_active;
    }

    public boolean isFriday_active() {
        return Friday_active;
    }

    public void setFriday_active(boolean friday_active) {
        Friday_active = friday_active;
    }

    public boolean isSaturday_active() {
        return Saturday_active;
    }

    public void setSaturday_active(boolean saturday_active) {
        Saturday_active = saturday_active;
    }

    public boolean isSunday_active() {
        return Sunday_active;
    }

    public void setSunday_active(boolean sunday_active) {
        Sunday_active = sunday_active;
    }

    public boolean isMon_done() {
        return Mon_done;
    }

    public void setMon_done(boolean mon_done) {
        Mon_done = mon_done;
    }

    public boolean isTue_done() {
        return Tue_done;
    }

    public void setTue_done(boolean tue_done) {
        Tue_done = tue_done;
    }

    public boolean isWed_done() {
        return Wed_done;
    }

    public void setWed_done(boolean wed_done) {
        Wed_done = wed_done;
    }

    public boolean isThu_done() {
        return Thu_done;
    }

    public void setThu_done(boolean thu_done) {
        Thu_done = thu_done;
    }

    public boolean isFri_done() {
        return Fri_done;
    }

    public void setFri_done(boolean fri_done) {
        Fri_done = fri_done;
    }

    public boolean isSat_done() {
        return Sat_done;
    }

    public void setSat_done(boolean sat_done) {
        Sat_done = sat_done;
    }

    public boolean isSun_done() {
        return Sun_done;
    }

    public void setSun_done(boolean sun_done) {
        Sun_done = sun_done;
    }

}

