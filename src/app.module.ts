import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TranslationsModule } from './translations/translations.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: 'project.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/The-Susham-Bedi-Project'),
    TranslationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
