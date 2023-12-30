import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();

interface IBook {
    title: string;
    description: string;
    published_date: string;
    genre: string;
    authorId?: number;
}

const schema: JSONSchemaType<IBook> = {
    type: "object",
    properties: {
        title: { type: "string"},
        description: { type: "string"},
        published_date: {type: "string"},
        genre: { type: "string"},
        authorId: {type: "number", nullable: true}
    },
    required: ["title", "description", "published_date", "genre"]
};

const validate = ajv.compile(schema);

export default validate