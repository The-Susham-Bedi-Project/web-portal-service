import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Translation, TranslationDocument, TranslationInputDocument } from "./models/translation.schema";
import { Message, MessageDocument } from "./models/message.schema";
import { SearchInput, TranslationInput } from "./models/translation";


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

  async search(searchInput: SearchInput): Promise<Translation[]> {
    return this.translationModel.aggregate(this.formSearchQuery(searchInput))
  }

  formSearchQuery(searchInput: SearchInput) {
    let query=[];
    if (searchInput.searchString) { query.push({
      '$search': {
        'index': 'searchTranslations',
        'text': {
          'query': `${searchInput.searchString}`,
          'path': {
            'wildcard': '*'
          },
          'fuzzy': {}
        }
      },
    })}
    if(searchInput.translatedFrom || searchInput.translatedInto) {
      if(!searchInput.translatedFrom) {
        query.push({
          '$match': {            
              'translatedInto': new RegExp(`^${searchInput.translatedInto}`, 'i')
          }
        })
      } else if(!searchInput.translatedInto) {
        query.push({
          '$match': {            
              'translatedFrom': new RegExp(`^${searchInput.translatedFrom}`, 'i') 
          }
        })
      } else {
        query.push({
          '$match': {
            '$and': [
              { 'translatedFrom': new RegExp(`^${searchInput.translatedFrom}`, 'i') },
              { 'translatedInto': new RegExp(`^${searchInput.translatedInto}`, 'i')  }]
          }
        })
      }
    }

    return query;
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