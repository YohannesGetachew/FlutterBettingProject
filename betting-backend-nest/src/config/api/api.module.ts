import { Module, HttpModule } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { HttpConfigService } from "./http-config.service";

@Module({
    imports: [
        HttpModule.registerAsync({
            useClass: HttpConfigService,
            imports: [ConfigModule],
        }),
    ],
    exports: [HttpModule]
})
export class ApiModule {}