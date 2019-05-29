package com.example.projectboard;

import com.sun.javafx.beans.IDProperty;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


public class Day {

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
