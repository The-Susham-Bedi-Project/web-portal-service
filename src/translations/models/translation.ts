import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Translation {

    @Field()
    _id?: string;

    @Field({ nullable: true })
    titleOriginal?: string;

    @Field({ nullable: true })
    titleTranslation?: string;

    @Field({ nullable: true })
    singleOrAnthology?: string;

    @Field({ nullable: true })
    authors?: string;

    @Field({ nullable: true })
    translators?: string;

    @Field({ nullable: true })
    editors?: string;

    @Field({ nullable: true })
    translatedFrom?: string;

    @Field({ nullable: true })
    translatedInto?: string;

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    yearOfPublicationOriginal?: string;

    @Field({ nullable: true })
    YearOfPublicationTranslation?: string;

    @Field({ nullable: true })
    publisherOriginal?: string;

    @Field({ nullable: true })
    publisherTranslation?: string;

    @Field({ nullable: true })
    ebook?: string;

    @Field({ nullable: true })
    genre?: string;

    @Field({ nullable: true })
    isbn?: string;

    @Field({ nullable: true })
    imgUrl?: string;
}