import express, {
  Express,
  Request,
  Response,
} from 'express';

import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

// Instantiate express app
const app: Express = express();
dotenv.config();

// Create Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1', 
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

// Define sever port
const port = process.env.PORT;

// Create a default route.
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

AppDataSource.initialize()
  .then(() => {
    // Start listenting to the requests on the defined port
    app.listen(port);
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });
