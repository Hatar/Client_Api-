<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <router-link class="navbar-brand" :to="{name:'Home'}">Blog</router-link>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li v-if="authentication" class="nav-item active">
                        <router-link class="nav-link" :to="{name:'Dashboard'}">Dashboard</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li v-if="!authentication" class="nav-item active">
                        <router-link class="nav-link" :to="{name:'Signin'}">Sign In</router-link>
                    </li>
                    <li v-if="authentication" class="nav-item active">
                        <a class="nav-link" href="#">{{ user.name }}</a>
                    </li>
                    <li v-if="authentication" class="nav-item active">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            'authentication':'auth/authentication',
            'user':'auth/user'
        })
    },    
}
</script>
<style scoped></style>