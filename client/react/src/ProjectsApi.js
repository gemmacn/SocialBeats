import axios from 'axios'

const  ProjectsApi = {
	baseUrl :'http://localhost:3000/festivals',

	searchProjects : function (query) {
		return axios.get(this.baseUrl +'/' + query)
		.then((data)=>{
			return data
		})
		.catch( (err) => {
			console.error(err)
		})

	}

}


// faltará una funció per fer el registre que será un post
//faltará una altra funció per fer el login que será un port 
export default ProjectsApi