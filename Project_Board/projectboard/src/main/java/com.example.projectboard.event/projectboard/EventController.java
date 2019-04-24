package com.example.projectboard.event.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @RequestMapping("/events")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @RequestMapping("/events/{id}")
    public Event getEvent(@PathVariable String id){
        return eventService.getEvents(id);
    }

    @RequestMapping(method = RequestMethod.POST, value="/events")
    public void addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/events/{id}")
    public void updateEvent(@RequestBody Event event, @PathVariable String id) {
        eventService.updateEvent(id, event);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/events/{id}")
    public void deleteEvent(@PathVariable String id){
        eventService.deleteEvent(id);
    }
}
