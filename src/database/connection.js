const mysql = require('mysql2');

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'kingsley',
  database: 'project-teaser',
  password: 's3cr3tP@ssw0rd'
});
