<template>
<div class="container">
  <div class="row">
    <div class="col">
        <h2>Island Craft Shop</h2>
    <h3>329 US Route 2</h3>
    <h3>South Hero, Vermont 05486</h3>
    <a href="tel:8023723945">802 . 372 . 3945</a>
    </div>
    <div class="col">
       <div v-if="new Date().getMonth() > 4">
              <h2>{{new Date()}} WE ARE OPEN</h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Sunday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                               </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Monday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Tuesday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Wednesday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Thursday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Friday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Saturday
                                    <span class="ml-auto">10:00 AM to 4:00 PM</span>
                                </li>
                            </ul>
                            </div>
                            <div v-else-if="new Date().getMonth() === 12">
                              This is for the holiday
                            </div>
                            <div v-else>
                            Dead of winter
                            </div>
    </div>
    </div>
 
  <div class="row">
    <div class="col">
      <div id="map-container-google-3" class="z-depth-1-half map-container-3">
  <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
    style="border:0" allowfullscreen></iframe>
</div>
    </div>
  </div>
</div>
</template>
