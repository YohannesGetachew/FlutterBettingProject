import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { App } from '../models/app';
import { AppService } from '../../app.service';
import { AppDto } from '../DTOs/update/app.dto';
import { AdvertisementDTO } from '../DTOs/update/advertisement.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../shared/guards/auth.guard';


/**
 * what are we expecting from this??
 * just surving the information
 * how about the advertisements and rules
 * TODO advertisement [position: [header, side], name, imagePath],
s * rules : string
 */
@Resolver(of => App)
export class AppResolver {
  constructor(private appService: AppService) {
  }
  @Query(returns => App)
  app() {
    return this.appService.getApp();
  }
  // use fileUploader

  // TODO create and update mutation for ads, and rules


  @Mutation(returns => App)
  @UseGuards(GqlAuthGuard)
  updateApp(@Args('id') id: string, @Args('appInput') appInputs: AppDto) {
    return this.appService.update(id, appInputs);
  }

  // update logo, ads, rules
  // why?
  @Mutation(returns => App)
  updateAdvertisement(@Args('id') id: string, @Args('adInput') adInput: AdvertisementDTO) {
    return this.appService.updateAd(id, adInput);
  }

}
