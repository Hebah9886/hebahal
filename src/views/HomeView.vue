<template>
<div v-motion-fade >


<div class="container-"><br><br><br><br>
  <h1 class="animate-charcter  " style="width: 170vh;">All Events</h1>
 <div v-if="events.length === 0">
   <p>No events added yet.</p>
 </div >
 <div v-else class="row justify-content-center">
   <div v-for="event in events" :key="event.id" class="col-lg-3 col-md-6 col-sm-12 mb-4" >
       <div class="card h-100" style="width: 18rem;">
       <div class="card-body ">
         <h5 class="card-header " style="font-weight: bold;">{{ event.name }}</h5>
         <p class="card-text event-description">{{ event.description }}</p>
         <p class="card-text"><small class="text-muted">Commencement: {{ event.commencement }}</small></p>
         <p class="card-text remaining-time">
           <span class="days">{{ event.remainingTime.days }}</span> d
           <span class="hours">{{ event.remainingTime.hours }}</span> h
           <span class="minutes">{{ event.remainingTime.minutes }}</span> m
           <span class="seconds">{{ event.remainingTime.seconds }}</span> s
         </p>
         <div v-if="event.photo">
           <img :src="event.photo" alt="Event Photo" class="card-img-top">
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
</template>

<script>

export default {
data() {
 return {
   events: [] // Array to store all events
 };
},
created() {
 // Fetch events from Local Storage
 const storedEvents = localStorage.getItem('events');
 if (storedEvents) {
   this.events = JSON.parse(storedEvents);
   // Start timer for each event
   this.events.forEach(event => {
     event.remainingTime = this.calculateRemainingTime(event.commencement);
     this.startTimer(event);
   });
 }
},
methods: {
 calculateRemainingTime(commencement) {
   // Calculate remaining time until event commencement
   const now = new Date();
   const eventDate = new Date(commencement);
   const diff = eventDate - now;
   
   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((diff % (1000 * 60)) / 1000);
   
   return { days, hours, minutes, seconds };
 },
 startTimer(event) {
   // Update remaining time every second
   event.timer = setInterval(() => {
     event.remainingTime = this.calculateRemainingTime(event.commencement);
   }, 1000);
 }
},
beforeDestroy() {
 // Clear all timers before destroying the component
 this.events.forEach(event => {
   clearInterval(event.timer);
 });
}
};
</script>

<style scoped>




.remaining-time {
margin-top: 10px; /* Add margin to remaining time */
color:brown;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}.card {
  transition: .7s all;
  box-shadow: inset 0 0 0 4px #707070aa;
  background: transparent;
  backdrop-filter: blur(8px);
  /* Set the width of each card */
  width: 100%;
  position: relative; /* Ensure z-index works */
  z-index: 1; /* Default z-index */
}
.card:hover {
  border: 1px solid #ffffff44;
  transform: scale(1.15);
  filter: brightness(1.3);
  box-shadow: 0 7px 50px 10px #8a8989aa;
  z-index: 2; /* Higher z-index on hover */
}

.animate-charcter
{
  
text-transform: uppercase;
background-image: linear-gradient(
 -225deg,
 #231557 0%,
 #44107a 29%,
 #dfbbc7 67%,
 #080807 100%
);
background-size: auto auto;
background-clip: border-box;
background-size: 200% auto;
color: #fff;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: flex;

   
}

@keyframes textclip {
to {
 background-position: 200% center;
}
}

@media screen and (max-width:768px){
  h1{
     font-size:3em;
     display: flex;
  }    
}

</style>