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
    MongooseModule.forRoot(
      'mongodb+srv://user:mongo@cluster0.b1s6p.mongodb.net',
      {
        user: 'user',
        pass: 'mongo',
        dbName: 'Found_In_Translation_Portal',
        w: 'majority',
        retryWrites: true
      }
    ),
    TranslationsModule,
    ThemesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
