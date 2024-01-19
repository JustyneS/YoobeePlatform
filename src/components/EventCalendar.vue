<script setup>
import { ref, reactive } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

// Define reactive variables
const id = ref(0) // Counter for event IDs
const selectedEvent = ref(null) // Currently selected event
const newTitle = ref('') // Title for the new event or modified event
const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || []; // Array to store calendar events

// Define options for FullCalendar
const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,listDay'
    },
    selectable: true, // Allow users to select dates
    weekends: true, // Show weekends in the calendar
    events: storedEvents, // Initial events loaded from local storage


    select: (arg) => {
    // Read events from local storage
    const storedEvents = getEventsFromLocal();

    // Find the maximum ID value from stored events
    const maxId = Math.max(...storedEvents.map(event => parseInt(event.id) || 0)) || 0;

    // Increment the event ID counter
    id.value = maxId + 1;

    const cal = arg.view.calendar;
    cal.unselect();
    
    // Create a new event object
    const newEvent = {
        id: `${id.value}`,
        title: `New Event ${id.value}`,
        start: arg.start,
        end: arg.end,
        allDay: true,
    };

    cal.addEvent(newEvent); // Add the new event to the calendar

    // Save the events to local storage
    storedEvents.push(newEvent);
    saveEventsToLocal(storedEvents);
},

    // Callback function when an event is clicked
    eventClick: (arg) => {
        selectedEvent.value = arg.event; // Set the selected event
        newTitle.value = arg.event.title; // Set the title for editing
    },

    // Callback function when an event is changed (dragged or resized)
    eventChange: (arg) => {
        console.log(`Event ${arg.event.title} was changed!`)
    }
})

// Function to save changes made to the selected event
const saveChanges = () => {
    if (selectedEvent.value) {
        selectedEvent.value.setProp('title', newTitle.value);

        // Get the current events from local storage
        const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];

        // Find the index of the selected event in the stored events array
        const eventIndex = storedEvents.findIndex(event => event.id === selectedEvent.value.id);

        if (eventIndex !== -1) {
            // Update the title of the selected event in the stored events array
            storedEvents[eventIndex].title = newTitle.value;

            // Save the modified events array back to local storage
            localStorage.setItem('calendarEvents', JSON.stringify(storedEvents));
        }

        // Clear the selected event and newTitle values
        selectedEvent.value = null;
        newTitle.value = '';
    }
};

const deleteEvent = () => {
    if (selectedEvent.value) {
        // Get the current events from local storage
        const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];

        // Find the index of the selected event in the stored events array
        const eventIndex = storedEvents.findIndex(event => event.id === selectedEvent.value.id);

        if (eventIndex !== -1) {
            // Remove the selected event from the stored events array
            storedEvents.splice(eventIndex, 1);

            // Save the modified events array back to local storage
            localStorage.setItem('calendarEvents', JSON.stringify(storedEvents));
        }

        // Clear the selected event and newTitle values
        selectedEvent.value = null;
        newTitle.value = '';
    }
};

// Helper function to save events to local storage
const saveEventsToLocal = (events) => {
    try {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    } catch (error) {
        console.error('Error saving events to local storage:', error);
    }
};

// Helper function to retrieve events from local storage
const getEventsFromLocal = () => {
    try {
        return JSON.parse(localStorage.getItem('calendarEvents')) || [];
    } catch (error) {
        console.error('Error retrieving events from local storage:', error);
        return [];
    }
};
</script>



<template>
    <div class="calendar-container">

        <FullCalendar class="full-calendar" v-bind:options="options" />
    
    <div class="event-container">
        <label id="event-title">
            Event Title:
            <input v-model="newTitle" />
        </label>
        <button @click="saveChanges">Save Changes</button>
        <button @click="deleteEvent">Delete Event</button>
    </div>
</div>
</template>


<style scoped>

.calendar-container {
display: flex;
font-family: Arial, Helvetica, sans-serif;
}

.full-calendar {
    min-width: 70vw;
    max-height: 85vh;
    margin-left: 40px;
    margin-right: 40px;
    padding-top: 20px;
}

.event-container {
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
}

#event-title {
    font-weight: bold;
}
</style>