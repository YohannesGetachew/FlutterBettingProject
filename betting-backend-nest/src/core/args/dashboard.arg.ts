import { ArgsType, Field } from "@nestjs/graphql";
import { DashboardFilterDate } from '../models/dashboard';

@ArgsType()
export class DashboardArg {
   @Field(type => DashboardFilterDate)
   date: DashboardFilterDate;
}