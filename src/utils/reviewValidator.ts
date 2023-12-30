import Ajv, {JSONSchemaType} from "ajv";

const ajv = new Ajv();

interface IReview {
    rating: number;
    bookId: number;
    userId: number;
}

const schema: JSONSchemaType<IReview> = {
    type: "object",
    properties: {
        rating: {type: "number", minimum: 1, maximum: 5},
        bookId: {type: "number", nullable: false},
        userId: {type: "number", nullable: false},
    },
    required: ["rating", "bookId", "userId"]
};


const validate = ajv.compile(schema);

export default validate;