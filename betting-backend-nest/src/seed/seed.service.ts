import { Injectable } from '@nestjs/common';
import { UserService } from '../core/modules/user/user.service';
import * as fs from 'fs';
import * as path from 'path';
import { AppService } from '../app.service';
import { Logger } from '@nestjs/common';
import { fake } from './fake';
import { TicketService } from '../core/modules/ticket/ticket.service';
import tops from './top';
const moment = require('moment');

@Injectable()
export class SeedService {
  constructor(
    private userService: UserService,
    private appService: AppService,
    private ticketService: TicketService,
  ) {
    this.seed()
      .then(() => Logger.log('successfully seeded'))
      .catch((err) => Logger.warn(err));
    console.log(path.join(__dirname, '../../src/seed/data'));
    // fake();
    // tops();
  }

  getDataFromFile(filename) {
    //  return JSON.parse(fs.readFileSync(path.join(__dirname + '../../../src/seed/data', filename), 'utf-8'));
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname + '../../../src/seed/data', filename),
        'utf-8',
      ),
    );
  }

  writeToFile(filename, data) {
    fs.writeFileSync(
      path.join(__dirname + '../../../src/seed/data', filename),
      data,
    );
  }
  async seedApp() {
    const data = this.getDataFromFile('app.json');
    await this.appService.create(data?.app);
  }

  async seedUsers() {
    const data = this.getDataFromFile('user.json');
    data?.users.forEach(async (user) => await this.userService.create(user));
    // await this.userService.createMany(data?.users);
  }
  async seed() {
   await this.seedUsers();
    await this.seedApp();
  }
}
