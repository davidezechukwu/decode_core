import {ISuperRequest} from './ISuperRequest';

export interface IUserNameRequest extends ISuperRequest {	
    DisplayName?: string;
    Title?: string;
    FirstName: string;
    MiddleName?: string;
    LastName: string;
    NickName?: string;
}
