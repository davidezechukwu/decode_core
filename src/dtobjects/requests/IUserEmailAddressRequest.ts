import { ModelIdType } from '../../types';
import {ISuperRequest} from './ISuperRequest';

export interface IUserEmailAddressRequest extends ISuperRequest {    
	EmailAddressTypeId: ModelIdType;
    EmailAddress: string;
    Rank?: number;
}