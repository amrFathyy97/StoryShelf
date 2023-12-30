import Ajv, {JSONSchemaType} from "ajv";

const ajv = new Ajv();

interface IReview {
    rating: number;
}

const schema: JSONSchemaType<IReview> = {
    type: "object",
    properties: {
        rating: {type: "number", minimum: 1, maximum: 5}
    },
    required: ["rating"]
};


const validate = ajv.compile(schema);

export default validate;