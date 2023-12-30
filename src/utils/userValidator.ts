import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();

interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

const schema: JSONSchemaType<IUser> = {
    type: "object",
    properties: {
        first_name: { type: "string", minLength: 5, maxLength: 255},
        last_name: { type: "string", minLength: 5, maxLength: 255},
        email: { type: "string", pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"},
        password: { type: "string", pattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" },
        isAdmin: {type: "boolean", nullable: true}
    },
    required: ["first_name", "last_name", "email", "password"]
};

const validate = ajv.compile(schema);

export default validate;