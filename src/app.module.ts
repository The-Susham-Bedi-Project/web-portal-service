import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TranslationsModule } from './translations/translations.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemesModule } from './themes/themes.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: 'project.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/Found_In_Translation_Portal'),
    TranslationsModule,
    ThemesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
