import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TranslationDocument = Translation & Document;
export type TranslationInputDocument = TranslationInput & Document;

@Schema()
export class Translation {
    @Prop()
    _id?: mongoose.Schema.Types.ObjectId;

    @Prop({ required: false })
    titleOriginal?: string;

    @Prop({ required: false })
    titleTranslation?: string;

    @Prop({ required: false })
    singleOrAnthology?: string;

    @Prop({ required: false })
    authors?: string;

    @Prop({ required: false })
    translators?: string;

    @Prop({ required: false })
    editors?: string;

    @Prop({ required: false })
    translatedFrom?: string;

    @Prop({ required: false })
    translatedInto?: string;

    @Prop({ required: false })
    type?: string;

    @Prop({ required: false })
    yearOfPublicationOriginal?: string;

    @Prop({ required: false })
    yearOfPublicationTranslation?: string;

    @Prop({ required: false })
    publisherOriginal?: string;

    @Prop({ required: false })
    publisherTranslation?: string;

    @Prop({ required: false })
    ebook?: string;

    @Prop({ required: false })
    genre?: string;

    @Prop({ required: false })
    isbn?: string;

    @Prop({ required: false })
    imgUrl?: string;

    @Prop({ required: false })
    tags?: string;
};

@Schema()
export class TranslationInput {

    @Prop({ required: false })
    titleOriginal?: string;

    @Prop({ required: false })
    titleTranslation?: string;

    @Prop({ required: false })
    singleOrAnthology?: string;

    @Prop({ required: false })
    authors?: string;

    @Prop({ required: false })
    translators?: string;

    @Prop({ required: false })
    editors?: string;

    @Prop({ required: false })
    translatedFrom?: string;

    @Prop({ required: false })
    translatedInto?: string;

    @Prop({ required: false })
    type?: string;

    @Prop({ required: false })
    yearOfPublicationOriginal?: string;

    @Prop({ required: false })
    yearOfPublicationTranslation?: string;

    @Prop({ required: false })
    publisherOriginal?: string;

    @Prop({ required: false })
    publisherTranslation?: string;

    @Prop({ required: false })
    ebook?: string;

    @Prop({ required: false })
    genre?: string;

    @Prop({ required: false })
    isbn?: string;

    @Prop({ required: false })
    imgUrl?: string;

    @Prop({ required: false })
    tags?: string;
};

export const TranslationSchema = SchemaFactory.createForClass(Translation);
export const TranslationInputSchema = SchemaFactory.createForClass(TranslationInput);
