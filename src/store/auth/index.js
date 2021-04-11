import axios from 'axios'
export default {
    namespaced:true,
    state:{
        token:null,
        user:null
    },
    mutations:{
        setToken(state,token){
            state.token = token
        },
        setUser(state,data){
            state.user=data
        }
    },
    getters:{
        authentication(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        }
    },
    actions:{
        async signIn({dispatch},data){
            try {
                let response = await axios.post('auth/login',data)
                // Return Promise that mean then & catch
                return dispatch('attempt',response.data.access_token) 
            } catch (error) {
                console.log("Erreur");
            }
        },
        async attempt({commit,state},token){
            try {
                
                if(token){
                    commit('setToken',token)
                }

                if(!state.token){return;}

                let response= await axios.get('auth/user-profile')
                commit('setUser',response.data)   
                console.log("success");
            } catch (error) {
                console.log(error);
                commit('setUser',null) 
                commit('setToken',null)  
            }     
        }
    }
}