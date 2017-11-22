import axios from 'axios'


const  axiosApi = {
	baseUrl :'http://localhost:3000',

	searchProjects : function (query) {
		return axios.get(this.baseUrl +'/festivals/' + query)
		.then((data)=>{
			return data
		})
		.catch( (err) => {
			console.error(err)
		})

	}



	postLocalInfoandUser : function (userId,festivalxuser,ongxuser,datedayuser,datehoursuser){
		return axios.post(this.baseUrl + '/collaborations', {userId,festivalxuser,ongxuser,datedayuser,datehoursuser})
		.then((localstdata)=>{
			return localstdata
		})
		.catch((err)=>{
			console.error(err)
		})
	}

}



export default axiosApi