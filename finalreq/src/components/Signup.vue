<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h3 class="text-center">Add New Student</h3>
          <form @submit.prevent="handleSubmitForm">
              <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" v-model="student.name" required>
              </div>
              <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" v-model="student.email" required>
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" v-model="student.password" required>
              </div>
              <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control" v-model="student.phone" required>
              </div>
              <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" v-model="student.address" required>
              </div>
              <div class="form-group">
                  <button class="btn btn-danger btn-block">Register</button>
              </div>
          </form>
      </div>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                   name: '',
                   email: '',
                   password: '',
                   phone: '',
                   address: '',
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
<style scoped>
* {box-sizing: border-box}

/* Full-width input fields */
  input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
    width: 100%;
  }
}
</style>