import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface ILoginRequest extends ISuperRequestWithLocaleAndDevice {
    Username: string
    Password: string	
}

export class ILoginRequestConstants {		
    
}