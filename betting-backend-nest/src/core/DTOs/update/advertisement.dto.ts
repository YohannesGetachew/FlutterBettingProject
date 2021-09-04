import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AdvertisementDTO {
  @Field({nullable: true})
  id: string; // unique id 

  @Field({nullable: true})
  name: string;

  @Field({defaultValue: 'Header', nullable: true})
  position: string;

  @Field()
  imagePath: string;
}