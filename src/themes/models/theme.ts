import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Theme {

    @Field()
    _id?: string;

    @Field({ nullable: true })
    themeName?: string;

    @Field({ nullable: true })
    imageUrl?: string;

    @Field(() => [TranslationId])
    translations?: [TranslationId];
}

@ObjectType()
export class TranslationId {
    @Field({ nullable: true })
    id?: string;
}