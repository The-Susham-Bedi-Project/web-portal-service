import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MessageSchema } from "./models/message.schema";
import { TranslationInputSchema, TranslationSchema } from "./models/translation.schema";
import { TranslationsResolver } from "./translations.resolver";
import { TranslationsService } from "./translations.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Translation', schema: TranslationSchema}, {name: 'TranslationInput', schema: TranslationInputSchema}, {name: 'Message', schema: MessageSchema}])
    ],
    providers: [TranslationsService, TranslationsResolver]
})
export class TranslationsModule {}