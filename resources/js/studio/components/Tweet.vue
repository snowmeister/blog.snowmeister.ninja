<template>
  <div class="card shadow-sm mb-3">
    <div class="card-body tweet">
      <h5 class="card-title mt-0" v-html=tweet></h5>
    </div>
    <div
      class="card-footer text-muted bg-transparent border-0 small d-flex justify-content-between"
    >
      <span>{{ moment(tweetObj.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a') }}</span>
      <span>{{ tweetObj.read_time }}</span>
    </div>
  </div>
</template>

<script>
import twitter from "twitter-text";

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
  },

 

  data() {
    return {
      tweetObj: this.tweets[this.show],
      tweet: this.prepareTweet(this.tweets[this.show].text)
    };
  },

  created() {
    this.twitter = twitter;
  }, 
  methods : {
     prepareTweet(tweet) {
        const formattedTweet =  twitter.autoLink(twitter.htmlEscape(tweet));
        console.log(formattedTweet)
        return formattedTweet;
    }
  }
};
</script>
