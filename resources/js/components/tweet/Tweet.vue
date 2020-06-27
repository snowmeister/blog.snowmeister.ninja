<template>
  <div class="card mb-3">
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




  

   mounted() {
    
    this.getTweets();
  },

  data() {
    return {
      tweetObj: this.tweets[this.show],

      tweets: [],
      tweet: this.prepareTweet(this.tweets[this.show].text)
    };
  },

  created() {
    this.twitter = twitter;
  }, 
  methods : {
     prepareTweet(tweet) {
        const formattedTweet =  twitter.autoLink(twitter.htmlEscape(tweet));
        return formattedTweet;
    },

    getTweets() {
      this.request()
        .get("/api/social/twitter")
        .then(response => {
          console.dir(response);
          this.tweets = response.data;
          NProgress.done();
        })
        .catch(error => {

          // this.$router.push({ name: "home" });

          NProgress.done();
        });
    }
  }
};
</script>
