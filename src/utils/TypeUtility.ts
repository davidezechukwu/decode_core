export class TypeUtility {
    constructor() {}

    public static NameOf<T>(prop: Extract<keyof T, string>): string {
        return prop;
    }
    public static NameOfFactory<T>(): (prop: Extract<keyof T, string>) => string {
        return TypeUtility.NameOf<T>;
    }
}
