import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { grpcClientOptions } from './grpc.options';
const dotenv = require("dotenv");
dotenv.config();

const os = require("os");
const cluster = require("cluster");

const allowedSites = [
  "http://localhost",
  "https://sharp-fermat-3f1926.netlify.app"
];
const corsOptionsDelegate = function (requestOrigin: string, callback) {
  callback(null, allowedSites.indexOf(requestOrigin) !== -1);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { spawn } = require("child_process");
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
    }),
  )
  app.use(bodyParser.json({limit: '50mb'}));
  app.enableCors({
    origin: corsOptionsDelegate,
    methods: ['POST']
  });
  app.connectMicroservice(grpcClientOptions);
  //await app.startAllMicroservicesAsync();
  await app.listen(process.env.PORT || 9852);
}


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // master process
  os.cpus().forEach((cpu) => cluster.fork());

  cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
  });
} else {
  bootstrap();
}
