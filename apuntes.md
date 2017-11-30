API:
https://obscure-stream-32522.herokuapp.com/
WEB-APP:
https://vast-escarpment-34979.herokuapp.com/

 git config --list

heroku logs --tail

mongodb://lilith:10b579ba@ds251435.mlab.com:51435/dbsocialbeats



1. Pasos para subir a Heroku:
    1.1: Export BD de mongo:
     mongoexport -d socialbeats -c userscollection --jsonArray -o server/data/users.json

     mongoimport -h ds123614.mlab.com:23614 -d socialbeats -c userscollection -u admin -p 1234 --jsonArray --file server/data/users.json

2. En la API hemos cambiado:
    mongoose.connect('mongodb://lilith:10b579ba@ds251435.mlab.com:51435/dbsocialbeats',{useMongoClient:true})
    .then (()=> console.log('conected'))
    .catch (err=>console.log(err))

   (Antes conectab a mi DB local)

3. El servidor node de la carpeta API, se conecta con git (.git) haciendo un git init.
- Para ver archivos ocultos git ls -a
git add --all
git commit -m "jhsdj"
heroku create ---> Crea el repo remoto 
Crear el archivo Procfile (web: node index.js)
Hacer un archivo .gitignore para el node_modules

(en algun punto he de fer un arxiu .env pq heroku vol triar ell el port i fer el install dotenv --save)

la Url de les trucades s'ha de canviar de localhost:3000 a : 
'https://obscure-stream-32522.herokuapp.com', basicament a la ruta de la api 

4. npm run build ----> en la carpeta de REACT  te crea una carpeta Build que le cambiamos el nombre a Public, para servir contenido estático. Esta carpeta Build la movemos a dentro de la carpeta app, donde creamos un nuevo servidor de express ( npm init + npm install express --save + rpm start)

git push heroku master


