import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ReportArg   {
    @Field({nullable: true})
    from: string;

    @Field({nullable: true})
    to: string;
}