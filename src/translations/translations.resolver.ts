import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Message } from "./models/message";
import { SearchInput, Translation, TranslationInput } from "./models/translation";
import { TranslationsService } from "./translations.service";
import { Translation as TranslationSchema } from "./models/translation.schema";


@Resolver()
export class TranslationsResolver {

    constructor(private readonly translationsService: TranslationsService) { }

    @Query(() => [Translation])
    async translations() {
        return this.translationsService.findAll();
    }

    @Query(() => [Translation])
    async search(@Args({name: 'searchInput'}) searchInput: SearchInput) {
        return this.translationsService.search(searchInput);
    }

    @Query(() => Translation)
    async translationById(@Args('_id') _id: string) {
        return this.translationsService.findOne(_id);
    }

    @Query(() => [Translation])
    async translationByIdList(@Args({name: 'ids', type: () => [String]}) ids: string[]) {
        return this.translationsService.findbyIds(ids);
    }

    @Mutation(() => [Translation])
    async addTranslations(@Args({name: 'translations', type: () => [TranslationInput]}) translations: TranslationInput[]) {
        return this.translationsService.addTranslations(translations);
    }
}