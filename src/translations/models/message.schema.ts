import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
    @Prop()
    msg: string;
};

export const MessageSchema = SchemaFactory.createForClass(Message);
