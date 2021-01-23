const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');

const connect = {
  run: async () => {
    let conncetion;
    try {
      conncetion = await oracledb.getConnection({ ...dbConfig, privilege: oracledb.SYSDBA });
      console.log('Connection was successful!');
      return 'test: ok.'
    } catch(err) {
      console.log(err);
      return 'test: failed.'
    } finally {
      if (conncetion) {
        try {
          await conncetion.close();
        } catch(err) {
          console.error(err);
          return 'test: failed.'
        }
      }
    }
  }
};

// Full Connect Descriptor strings
// connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=mymachine.example.com)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=orcl)))"

module.exports = connect;
