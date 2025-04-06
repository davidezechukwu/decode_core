import {ILookupNameValueResponse} from './ILookupNameValueResponse';

export interface ILookupCountryResponse extends ILookupNameValueResponse {
    OfficialName: string;
    ISO3166_1_Alpha_2: string;
	ISO3166_1_Alpha_3: string;
    InternetDomain1: string;
    InternetDomain2: string;
	InternetDomain3: string;
}
