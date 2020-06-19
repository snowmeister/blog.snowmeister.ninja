<template>
  <div class="card shadow-sm mb-3">
    
    <div class="card-body">
      <h5 class="card-title mt-0">{{ tweets[show].text }}</h5>
    
    </div>
    <div
      class="card-footer text-muted bg-transparent border-0 small d-flex justify-content-between"
    >
      <span>{{ moment(tweets[show].created_at).format('MMM D') }}</span>
      <span>{{ tweets[show].read_time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tweet",

  props: {
    show: {
      type: Number,
      required: true
    },
    tweets: {
      type: Array,
      required: true
    }
  }

  // data() {
  //   return {
  //     tweets: this.tweets
  //   };
  // }
};
</script>
