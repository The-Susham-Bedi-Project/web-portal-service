import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ThemeSchema } from "./models/theme.schema";
import { ThemesResolver } from "./themes.resolver";
import { ThemesService } from "./themes.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Theme', schema: ThemeSchema}])
    ],
    providers: [ThemesService, ThemesResolver]
})
export class ThemesModule {}