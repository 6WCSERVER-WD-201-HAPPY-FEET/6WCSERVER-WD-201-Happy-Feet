<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Profile</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-danger btn-block">Update</button>
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
            student: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.student = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;
            axios.put(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>