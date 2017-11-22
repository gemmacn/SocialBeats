import axios from 'axios'


const  axiosApi = {
	baseUrl :'http://localhost:3000',

	retrieveFestivalByName : function (festivalName) {
		return axios.get(this.baseUrl +'/festivals/name/' + festivalName)
		.then((data)=>{
			return data.data
		})
		.catch( (err) => {
			console.error(err)
		})

	}



	collaborate : function (userId,festivalId,projectId,dateDay,dateHours){
		return axios.post(this.baseUrl + '/festival/' + festivalId + '/project/' + projectId + '/collaborate', {userId,dateDay,dateHours})
		.then((localstdata)=>{
			return localstdata
		})
		.catch((err)=>{
			console.error(err)
		})
	}

}



export default axiosApi