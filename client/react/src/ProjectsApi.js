import axios from 'axios'

const  ProjectsApi = {
	baseUrl :'localhost:3000/ong',

	searchProjects : function (query) {
	        return axios.get(this.baseUrl  + query)
	        .then(data) => {
	                console.log(data)
	                this.setState({projects:data})
	        }
	            .catch(function (err) {
	                console.error(err)
				 },

}

}
export default ProjectsApi