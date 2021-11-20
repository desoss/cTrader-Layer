import { GenericObject } from "#utilities/GenericObject";

export class CTraderLayerUtilities {
    private constructor () {
        // Silence is golden.
    }

    public static convertLongToNumber (object: GenericObject): GenericObject {
        for (const key in object) {
            const value = object[key];

            if (value.constructor.name === "Long" && value.toNumber) {
                object[key] = value.toNumber();
            }
            else if (value.constructor === Object) {
                object[key] = CTraderLayerUtilities.convertLongToNumber(value);
            }
            else if (Array.isArray(value)) {
                value.forEach(CTraderLayerUtilities.convertLongToNumber);
            }
        }

        return object;
    }
}
