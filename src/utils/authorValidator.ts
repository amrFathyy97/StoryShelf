import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();

interface IAuthor {
    first_name: string,
    last_name: string,
    nationality: string
}

const schema: JSONSchemaType<IAuthor> = {
    type: "object",
    properties: {
        first_name: {type: "string"},
        last_name: {type: "string"},
        nationality: {type: "string"},
    },
    required: ["first_name", "last_name", "nationality"]
}

const validate = ajv.compile(schema);

export default validate;