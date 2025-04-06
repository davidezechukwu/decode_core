import { ModelIdType } from '../../types';
import {ISuperRequest} from './ISuperRequest';

export interface IUserPhotoRequest extends ISuperRequest {	
    PhotoTypeId: ModelIdType;
    URL: string;
    Rank?: number;
}
