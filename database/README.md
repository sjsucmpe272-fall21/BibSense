### run node-rds
$node index.js
make sure console display the following content: 
"App running on port 3001.
Connected!"
open http://localhost:3001/ you will see all the image information in database

### run react-rds
$npm start
make sure compiled successully.
open http://localhost:3000/ the page will show current image information in database
hit query button and enter the bib number you want to query, it will display a prompt which shows the image names and image links.

### rds info
  databse: postgres
  user: 'bibsense',
  host: 'team11bibsense.ckmsibai0sqs.us-east-2.rds.amazonaws.com',
  database: 'bib_sense',
  password: 'bibsense',
  port: 5432