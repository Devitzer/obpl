import Environment from "../../runtime/environment.ts";
import { RuntimeVal, StringVal, NumberVal, BooleanVal, NullVal, MK_NULL, ObjectVal } from "../../runtime/values.ts";

// deno-lint-ignore no-unused-vars
export default function dir(args: RuntimeVal[], scope: Environment) {
    let final = "";
        for (const arg of args) {
            if (arg.type === "string") {
                const val = arg as StringVal;
                final += val.value
            } else if (arg.type === "number") {
                const val = arg as NumberVal;
                final += val.value
            } else if (arg.type === "boolean") {
                const val = arg as BooleanVal;
                final += val.value
            } else if (arg.type === "null") {
                const val = arg as NullVal;
                final += val.value
            } else if (arg.type === "object") {
                const val = arg as ObjectVal
                final += val
            } else {
                throw `You tried to print a unsupported type of item! You can only print: string | number | boolean | null | object, you gave a ${arg.type}.`
            }
        }
    console.dir(final);
    return MK_NULL();
}