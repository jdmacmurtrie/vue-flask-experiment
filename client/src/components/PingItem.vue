
<script lang="ts">
import axios from 'axios';

export default {
  name: 'PingItem',
  data() {
    return {
      msg: 'Hello!',
    };
  },
   methods: {
    getMessage() {
      const path = 'http://localhost:5001/ping-item';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {

          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};

</script>
<template>
  <div class="container">
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>