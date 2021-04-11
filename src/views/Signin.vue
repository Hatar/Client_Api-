<template>
    <div>
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="user.email" class="form-control" placeholder="Enter Your Email" aria-describedby="helpId">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="user.password" class="form-control" placeholder="Enter Your Password" aria-describedby="helpId">
                </div>
                <button type="submit" @click.prevent="submit" class="btn btn-danger btn-block">Sign In</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            user:{
                email:"",
                password:""
            }
        }
    },
    methods: {
        ...mapActions({
            'signIn' : 'auth/signIn'
        }),
        submit(){
           this.signIn(this.user).then(() => this.$router.push({ name: "Dashboard" }))
        }
    },
}
</script>
<style lang="">
    
</style>