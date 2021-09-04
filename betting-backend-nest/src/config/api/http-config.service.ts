import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createHttpOptions(): HttpModuleOptions {
    return {
      timeout: 10000,
      maxRedirects: 5,
      headers: {
        'x-rapidapi-host': this.configService.get("x_rapidapi_host_soccer"),
        'X-RapidAPI-Key': this.configService.get("x_rapidapi_key_soccer"),
      },
    };
  }
}
