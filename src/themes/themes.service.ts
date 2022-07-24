import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Theme, ThemeDocument } from "./models/theme.schema";
@Injectable()
export class ThemesService {
    constructor(
        @InjectModel(Theme.name) private readonly themeModel: Model<ThemeDocument>,
      ) {}

      async findAll(): Promise<Theme[]> {
        return this.themeModel.find().sort({'titleTranslation':1}).exec();
      }
    
      async findOne(id: string): Promise<Theme> {
        return this.themeModel.findOne({ _id: id }).exec();
      }
}