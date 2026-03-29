const dotenv = require('dotenv');
const { app } = require('./server');
const { dbConnect } = require('./utils/databaseConnectionManager');

dotenv.config();

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
