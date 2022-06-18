import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TranslationSchema } from "./models/translation.schema";
import { TranslationsResolver } from "./translations.resolver";
import { TranslationsService } from "./translations.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Translation', schema: TranslationSchema}])
    ],
    providers: [TranslationsService, TranslationsResolver]
})
export class TranslationsModule {}