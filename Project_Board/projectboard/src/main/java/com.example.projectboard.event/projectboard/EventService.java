package com.example.projectboard.event.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

//    private List<Event> habits = new ArrayList<>(Arrays.asList(
//            new Event("1", "Reading 30 pages per day", "Everyday", "Everyday", 45 ),
//                    new Event("2", "Walking with a dog", "Mo, Tue, Fri", "3x per week", 30 ),
//                    new Event("3", "Running", "We, Sun", "2x per week", 60),
//                    new Event("4", "Something else", "Every Monday", "1x per week", 20 )
//            ));

    public List<Event> getAllEvents() {

        //return events;
        List<Event> events = new ArrayList<>();
        eventRepository.findAll()
                .forEach(events::add);
        return events;
    }

    public Event getEvents(String id) {

        //return habits.stream().filter(t -> t.getId().equals(id)).findFirst().get();
        return eventRepository.findById(id).get();
    }

    public void addEvent(Event event) {

        eventRepository.save(event);
    }

    public void updateEvent(String id, Event event) {
        eventRepository.save(event);
    }

    public void deleteEvent(String id) {
        eventRepository.deleteById(id);
    }
}
