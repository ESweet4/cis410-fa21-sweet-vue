<template>
  <div>
    <h1>Home</h1>
  </div>

  <div class="my-container-outer Welcome-message">
    <div class="thisbox">
      <h2 class="my-container-row" id="Welcome">
        Welcome to The Green Registry
      </h2>
      <h4 class="my-container-row">
        Your place to find fantastic everyday items!
      </h4>
    </div>
    <div class="card">
      <img src="../images/couch.jpg" class="card-img-top" alt="A green couch" />
      <div class="card-body">
        <p class="card-text">
          Order this couch today to add it to your registry!
        </p>
        <a href="/items" class="btn btn-primary">See Other Items</a>
      </div>
    </div>
    <div class="card">
      <img src="../images/lamp.webp" class="card-img-top" alt="A desk lamp" />
      <div class="card-body">
        <p class="card-text">
          Order this lamp today to complete your office look!
        </p>
        <a href="/items" class="btn btn-primary">See Other Items</a>
      </div>
    </div>

    <hr />
    <div class="thisbox my-container-row">
      <div>
        <p>
          <h7>Contact Us: </h7>
          <br />
          <h8> Phone: 970-123-4567 </h8>
          <br />
          <h8> Email: greenhelp@mail.com</h8>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-container-outer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.my-container-row {
  padding: 20px;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.card {
  display: flex;
  flex: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 18rem;
  padding: 20px;
  margin: 20px;
  background-color: rgba(211, 211, 211, 0.404);
}
.thisbox {
  border: 2px solid rgb(73, 168, 73);
  border-radius: 25px;
  padding: 50px;
  margin-bottom: 10px;
}
h7 {
  font-weight: bold;
}
hr {
  width: 90%;
  height: 1px;
  text-align: center;
  background-color: rgb(8, 0, 0);
  size: 10px;
}
</style>
