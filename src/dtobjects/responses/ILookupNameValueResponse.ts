import {ModelIdType} from '../../types';
import {ISuperRequest} from './../requests/ISuperRequest';

export interface ILookupNameValueResponse extends ISuperRequest {
    Id: ModelIdType;
    LookupCategoryId: ModelIdType;
    Name: string;
    Value: string;
    IsSelected?: boolean;
}
