const {toXML} = require('jstoxml');
const convert = require('xml-js');

export class XMLUtility {
    constructor() {}

    public static ObjectToXML(obj: any) {
        return toXML(obj);
    }

    public static XMLToJSON(xmlstr: string): string {
        const obj = convert.xml2json(xmlstr, {compact: true, spaces: 4});
        return obj;
    }

    public static XMLToJS(xmlstr: string): object {
        const obj = XMLUtility.XMLToJSON(xmlstr);
        return JSON.parse(obj);
    }
}
