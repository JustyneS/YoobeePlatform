<script setup>
import { ref, reactive } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

const id = ref(0)
const selectedEvent = ref(null)
const newTitle = ref('')
const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];

const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,listDay'
    },
    editable: true,
    selectable: true,
    weekends: true,
    events: storedEvents,

    select: (arg) => {
    id.value = id.value + 1;

    const cal = arg.view.calendar;
    cal.unselect();
    const newEvent = {
        id: `${id.value}`,
        title: `New Event ${id.value}`,
        start: arg.start,
        end: arg.end,
    };

    cal.addEvent(newEvent);
    
    // Save the events to local storage
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    storedEvents.push(newEvent);
    localStorage.setItem('calendarEvents', JSON.stringify(storedEvents));
},

    eventClick: (arg) => {
        selectedEvent.value = arg.event
        newTitle.value = arg.event.title
    },

    eventChange: (arg) => {
        console.log(`Event ${arg.event.title} was changed!`)
    }
})

const saveChanges = () => {
    if (selectedEvent.value) {
        // Update the title of the selected event
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