import { Args, Query, Resolver } from "@nestjs/graphql";
import { Theme } from "./models/theme";
import { ThemesService } from "./themes.service";

@Resolver()
export class ThemesResolver {

    constructor(private readonly themesService: ThemesService) { }

    @Query(() => [Theme])
    async themes() {
        return this.themesService.findAll();
    }

    @Query(() => Theme)
    async themeById(@Args('_id') _id: string) {
        return this.themesService.findOne(_id);
    }
}