import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Translation, TranslationDocument, TranslationInputDocument } from "./models/translation.schema";
import { Message, MessageDocument } from "./models/message.schema";
import { TranslationInput } from "./models/translation";


@Injectable()
export class TranslationsService {
  constructor(
    @InjectModel(Translation.name) private readonly translationModel: Model<TranslationDocument>,
    @InjectModel(TranslationInput.name) private readonly translationInputModel: Model<TranslationInputDocument>,
  ) { }

  async findAll(): Promise<Translation[]> {
    return this.translationModel.find().sort({ 'titleTranslation': 1 }).exec();
  }

  async findOne(id: string): Promise<Translation> {
    return this.translationModel.findOne({ _id: id }).exec();
  }

  async findbyIds(ids: string[]): Promise<Translation[]> {
    return this.translationModel.find().where('_id').in(ids).sort({ 'titleTranslation': 1 }).exec();
  }

  async search(searchString: string): Promise<Translation[]> {
    return this.translationModel.aggregate([
      {
        '$search': {
          'index': 'searchTranslations',
          'text': {
            'query': `${searchString}`,
            'path': {
              'wildcard': '*'
            },
            'fuzzy': {}
          }
        }
      }
    ])
  }

  async addTranslations(translations: TranslationInput[]): Promise<Translation[]> {
    return this.translationModel.insertMany(translations)
      // .then((data)=>{
      //   return Promise.resolve({msg: `Added ${data.length} document(s) successfully`})
      // })
      // .catch((err)=>{
      //   console.log(err)
      // });
      // return Promise.resolve({msg: `An error occured please try again`})
  }
}