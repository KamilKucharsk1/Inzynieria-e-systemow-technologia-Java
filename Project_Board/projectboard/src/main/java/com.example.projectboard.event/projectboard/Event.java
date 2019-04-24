package com.example.projectboard.event.projectboard;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Event {

    @Id
    private String id;
    private String name;
    private String day;
    private String duration;

    public Event() {

    }

    public Event(String id, String name, String day, String duration) {
        this.id = id;
        this.name = name;
        this.day = day;
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

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
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
