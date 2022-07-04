import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Translation, TranslationDocument } from "./models/translation.schema";

@Injectable()
export class TranslationsService {
    constructor(
        @InjectModel(Translation.name) private readonly tranlationModel: Model<TranslationDocument>,
      ) {}

      async findAll(): Promise<Translation[]> {
        return this.tranlationModel.find().exec();
      }
    
      async findOne(id: string): Promise<Translation> {
        return this.tranlationModel.findOne({ _id: id }).exec();
      }

      async search(searchString: string):  Promise<Translation[]> {
        return this.tranlationModel.find().or([
          {'titleTranslation': { $regex: searchString }}, 
          { 'translators': { $regex: searchString }},
          { 'translatedInto': { $regex: searchString }},
          { 'titleOriginal': { $regex: searchString }},
          { 'authors': { $regex: searchString }},
          { 'translatedFrom': { $regex: searchString }}
        ])
      }
}