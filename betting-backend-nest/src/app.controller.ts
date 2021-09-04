import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {IFixture} from "./lsports/interfaces/fixture";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @GrpcMethod('LiveService.sendNewFixture')
  // sendNewFixture(fixture: IFixture) {
  //   console.log(fixture);
  //   return true;
  // }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
