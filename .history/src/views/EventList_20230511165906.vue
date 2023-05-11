<template>
    <div>
    <!-- <div class="googleCalendar">
  <iframe src="https://calendar.google.com/calendar/embed?src=3apgvrvhsti7o0frhe5ibtmbis%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="1980" height="1020" frameborder="0" scrolling="no"></iframe>
</div> -->

<b-container class="bv-example-row">
 <div v-for="(event, index) in events" :key="index" class="eventEntry">
  <b-row>
    <b-col >{{index}}</b-col>
    <b-col>{{event.startTime}} to {{endTime}}</b-col>
  </b-row>

  <b-row>
    <b-col>05</b-col>
    <b-col></b-col>
  </b-row>
   <b-row>
    <b-col class="text-left">Join us of our annual Birthday Bash - this year we are celebrating 32 years! </b-col>
  </b-row>
    <b-row>
    <b-col class="text-left">Food, Music, Silent Auction, and lots of Crafts </b-col>
  </b-row>
  </div>
</b-container>

    

    </div>
</template>

<script>
import eventsData from "../../eventsList.json";
export default {
  data() {
    return {
      events: eventsData,     };
  },
};
</script>
