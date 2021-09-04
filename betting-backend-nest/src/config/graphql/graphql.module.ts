import { Module } from '@nestjs/common';
import { GraphqlOptions } from './graphql.options';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync({useClass: GraphqlOptions}),
  ],
  exports: [
    GraphQLModule
  ]
})
export class GraphqlModule {}
