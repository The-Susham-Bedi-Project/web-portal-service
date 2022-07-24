import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ThemeDocument = Theme & Document;

@Schema()
export class Theme {
    @Prop()
    _id?: mongoose.Schema.Types.ObjectId;

    @Prop({ required: false })
    themeName?: string;

    @Prop({ required: false })
    imageUrl?: string;

    @Prop({ required: false })
    translations?: [TranslationId]
};

@Schema()
export class TranslationId {
    @Prop({ required: false })
    id?: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
