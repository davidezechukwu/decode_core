import {ILookupNameValueResponse} from './ILookupNameValueResponse';

export interface ILookupCurrencyResponse extends ILookupNameValueResponse {
    PluralName: string;
    Symbol: string;
    NativeSymbol: string;
    DecimalDigits: number;
}
