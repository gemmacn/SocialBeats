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
export default ProjectsApi