export class CTraderLayerUtilities {
    private constructor () {
        // Silence is golden.
    }

    public static isBrowser (): boolean {
        return !(typeof "process" !== "undefined" && process && process.versions && process.versions.node);
    }
}
