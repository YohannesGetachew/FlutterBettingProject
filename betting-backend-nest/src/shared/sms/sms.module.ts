import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { Smsservice } from './SMS.service';
import { AfricaTalkingOptions } from './africaTalking.options';
import { AFRICA_TALKING_MODULE_TOKEN } from './constants';
const africastalking = require('africastalking');

const PROVIDERS = [
    Smsservice
];
const EXPORTS = [...PROVIDERS];

@Global()
@Module({})
export class SmsModule {
    static register(options: AfricaTalkingOptions): DynamicModule {
        const africaTalkingOptions = {
            provide: AFRICA_TALKING_MODULE_TOKEN,
            useValue: options
        }
        const Africastalking = africastalking(options);
        const providers = this.createProviders(Africastalking);
        return {
            module: SmsModule,
            providers: [africaTalkingOptions, ...providers],
            exports: [...EXPORTS]
        }
    }
    private static createProviders(app: any): Provider<any>[] {
        return PROVIDERS.map<Provider>((ProviderService) => ({
          provide: ProviderService,
          useFactory: () => new ProviderService(app),
        }));
      }
}