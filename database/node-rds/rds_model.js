const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'bibsense',
  host: 'team11bibsense.ckmsibai0sqs.us-east-2.rds.amazonaws.com',
  database: 'bib_sense',
  password: 'bibsense',
  port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) console.log(err, res);
  pool.end()
});

const client = new Client({
  user: 'bibsense',
  host: 'team11bibsense.ckmsibai0sqs.us-east-2.rds.amazonaws.com',
  database: 'bib_sense',
  password: 'bibsense',
  port: 5432
});

// if(client.connection._events != null)
client.connect(function(err) {
  client.query('SELECT NOW()', (err, res) => {
    if (err) console.log(err, res);
    console.log("Connected!");
    // client.end();
  });
});

//   // callback
// client.query('SELECT * FROM img_info;', (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(res.rows)
//   }
// })

const getImgs = () => {
  // client.connect()
  return new Promise(function(resolve, reject) {
    client.query('SELECT * FROM img_info;', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
      })
  })
}

const query = 'SELECT s.img_name_s AS name, s.img_link FROM img_info AS i JOIN img_storage AS s ON s.img_name_s = i.img_name WHERE bib_number = $1;'
// const bib = ['5074']

// // callback
// client.query(query, bib, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(res.rows)
//   }
// })

const queryImgs = (req, res) => {
  // console.log(`module bib: ` + req)
  const argument = parseInt(req, 10)
  // console.log(`module 2: ` + argument)
  return new Promise(function(resolve, reject) {
    // const bib = '3219'
    client.query(query, [argument], (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(`image related to bibNumber: ${results.rows}`)
      resolve(results.rows);
    })
  })
}

module.exports = {
  getImgs,
  queryImgs,
}