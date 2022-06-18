import { Args, Query, Resolver } from "@nestjs/graphql";
import { Translation } from "./models/translation";
import { TranslationsService } from "./translations.service";

@Resolver()
export class TranslationsResolver {

    constructor(private readonly translationsService: TranslationsService) { }

    @Query(() => [Translation])
    async translations() {
        return this.translationsService.findAll();
    }

    @Query(() => Translation)
    async translationById(@Args('_id') _id: string) {
        return this.translationsService.findOne(_id);
    }
}