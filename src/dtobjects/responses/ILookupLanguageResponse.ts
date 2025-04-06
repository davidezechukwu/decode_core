import {ILookupNameValueResponse} from './ILookupNameValueResponse';

export interface ILookupLanguageResponse extends ILookupNameValueResponse {
    IsRTL?: boolean;
    ISO639_1: string;
    ISO639_2: string;
    ISO639_3: string;
}
