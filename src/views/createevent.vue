<template>
  <div>
    <div class="heading-container">
      <h2>Create New Event</h2>
    </div>

    <div class="form-container">
      <form @submit.prevent="addEvent" class="event-form">
        <div class="form-group">
          <label for="eventName">Event Name</label>
          <input type="text" v-model="eventName" id="eventName" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="eventDescription">Description</label>
          <textarea v-model="eventDescription" id="eventDescription" class="form-control" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="eventCommencement">Commencement Date and Time</label>
          <input type="datetime-local" v-model="eventCommencement" id="eventCommencement" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="eventPhoto">Photo</label>
          <input type="file" @change="handlePhotoUpload" accept="image/*" id="eventPhoto" class="form-control-file" required>
          <img v-if="eventPhoto" :src="eventPhoto" alt="Event Photo" style="max-width: 200px; margin-top: 10px;">
        </div>
        <button type="submit" @click="showToatSuccess()" class="btn btn-primary">Add Event</button>
      </form>
    </div>

    <div class="img">
      <img width="400px" :src="Image" alt="Example Image">
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      notificationMessage: '',
      Image: 'src/assets/img/4024766.jpg',
      eventName: '',
      eventDescription: '',
      eventCommencement: '',
      eventPhoto: null // To store uploaded photo
    };
  },
  methods: {
    showToatSuccess(){
            toast.success('Wow success!',{
                autoClose: 1000,
            });   
        },
    
    addEvent() {
      // Validate form fields
      if (!this.eventName || !this.eventDescription || !this.eventCommencement) {
        alert('Please fill in all fields.');
        return;
      }

      // Create new event object
      const newEvent = {
        id: Date.now(), // Unique ID based on timestamp
        name: this.eventName,
        description: this.eventDescription,
        commencement: this.eventCommencement,
        photo: this.eventPhoto // Include photo data in the event object
      };

      // Retrieve existing events from Local Storage
      const existingEvents = JSON.parse(localStorage.getItem('events')) || [];

      // Add the new event to the array of events
      existingEvents.push(newEvent);

      // Save the updated events array back to Local Storage
      localStorage.setItem('events', JSON.stringify(existingEvents));

      // Reset form fields
      this.eventName = '';
      this.eventDescription = '';
      this.eventCommencement = '';
      this.eventPhoto = null;
    },
    handlePhotoUpload(event) {
      // Get the uploaded file
      const file = event.target.files[0];

      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        this.eventPhoto = reader.result; // Store the data URL in the component's data
      };
      reader.readAsDataURL(file);
    }
    
  }
};
</script>

<style scoped>
/* Add global styles here */

.heading-container {
  text-align: center;
  margin-top: 20px;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.img{
  display: flex;
  position: absolute;
 right:50ex;top: 16ex;}

@media (max-width: 767px) {
  .form-container {
    padding: 0 15px;
  }

  .img {
    margin-top: 50ex;
    right: auto;
    position: absolute;
  }
}

@media (min-width: 768px) {
  .form-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .form-group {
    flex: 1;
    margin-right: 20px;
  }
}
</style>
