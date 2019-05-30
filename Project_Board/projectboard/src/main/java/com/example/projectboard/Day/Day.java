package com.example.projectboard.Day;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Day {

    @Id
    String id;
    public boolean day;
    public enum isDone {DONE, LEFT};
    private isDone isdone;

    public boolean isDay() {
        return day;
    }

    public void setDay(boolean day) {
        this.day = day;
    }

    public isDone getIsdone() {
        return isdone;
    }

    public void setIsdone(isDone isdone) {
        this.isdone = isdone;
    }

    public Day(){

    }


    public Day(boolean day, isDone isDone){
        this.day = day;
        this.isdone = isDone;
    }
}
