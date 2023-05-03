<template>
    <div class="about">
        <div id="pic">
        <img :src="require('../assets/about.jpg')"/>
    </div> 
        <h1>{{title}}</h1>
        <h1>{{ name }}</h1>
      <h4>Developer</h4>
      <p>{{ summary }}</p>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
      return {
        name: "Aron Layson",
      }
    }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-left: 20px;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

img{
    width: 200px;
    height: auto;
    margin-top: auto;
    border-radius: 20px;
    border: 5px solid #008080;
    padding: 20px;
    margin: auto;
  }

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>