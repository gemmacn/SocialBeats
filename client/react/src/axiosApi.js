import axios from 'axios'


const  axiosApi = {
	baseUrl :'http://localhost:3000',

	retrieveFestivalByName : function (festivalName) {
		return axios.get(this.baseUrl +'/festivals/name/' + festivalName)
		.then((data)=>{
			return data.data // pq axios ja posa l¡objecte dins d'un data
		})
		.catch( (err) => {
			console.error(err)
		})

	},



	collaborate : function (userId, festivalId, projectId, dateDay, dateHours) {
		return axios.post(this.baseUrl + '/festival/' + festivalId + '/project/' + projectId + '/collaborate',
		{userId, dateDay, dateHours}) //{esto es lo que se le envía por el body} Aquí se use la info del local storage entre ella y con la BD
		.then((localdata)=>{
			return localdata // el post igualmnte siempre devuelve una respuesta
		})
		.catch((err)=>{
			console.error(err)
		})
	},



	UserProfile: function(completedUser){
		return axios.post(this.baseUrl + '/setprofile',{completedUser})
		.then((profiledata)=>{
			return profiledata
		})
		.catch((err)=>{
			console.error(err)
		})
	},


	getUserProfile: function(userId){
		return axios.get(this.baseUrl +'/users/' + userId)
		.then((res)=>{
			return res// pq axios ja posa l¡objecte dins d'un data
		})
		.catch( (err) => {
			console.error(err)
		})
	},


	sendLogIn: function (logInInfo){
		return axios.put(this.baseUrl +'/users', {logInInfo}) // em retorna tots els users de moment i cuan rebem la info ja els mapejem 
		.then(res=>{//
			return res
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}



export default axiosApi