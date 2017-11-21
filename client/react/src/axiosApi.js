import axios from 'axios'

const  axiosApi = {
	baseUrl :'http://localhost:3000',

	searchProjects : function (query) {
		return axios.get(this.baseUrl +'/festivals' + query)
		.then((data)=>{
			return data
		})
		.catch( (err) => {
			console.error(err)
		})

	}


	putUserAllInfo: function(query){
		return axios.post(this.baseUrl,{
			
		})
	}

}




// faltará una funció per fer el registre que será un post
//faltará una altra funció per fer el login que será un port 
export default axiosApi