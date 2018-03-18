<template>
  <div>
    <h2>Latest data</h2>
    <div class="live">
      <div class="live-air">
        <h2>Air</h2>
        <p>
          <b>Temperature:</b> {{temp}}°C
          <br>
          <b>Humidity:</b> {{humidity}}%
        </p>
      </div>
      <div class="live-soil">
        <h2>Soil</h2>
        <p>
          <b>Moisture:</b> {{soilValue}}%
        </p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['temp', 'humidity', 'soilValue'],
  data () {
    return { }
  }
}
</script>

<style>
h3 {
  margin-bottom: 12px;
}
.live {
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.live-air {
  display: block;
  width: 35%;
}

.live-soil {
  display: block;
  width: 35%;
}

.live p {
  margin-top: 0;
}

</style>
