import { Injectable } from '@nestjs/common';

@Injectable()
export class Smsservice {
  constructor(protected africaTalking: any) {}
  sendSms(message: string, to: string) {
      console.log(this.africaTalking, "sms");
    return this.africaTalking.SMS.send({ to: [to], message });
  }
}