<template  >
<div class="container text-center ">
  <div id="app" v-motion="'custom'"
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :variants="{ custom: { scale: 2 } }">
    <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <router-link to="/createevent" class="navbar-brand">Create Event</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        
      
    </header>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
/* Add global styles here */

#app {
  font-family: Arial, sans-serif;
background-image: url(https://www.technocrazed.com/wp-content/uploads/2015/12/HD-purple-wallpaper-image-to-use-as-background-134.jpg);  
}



</style>
