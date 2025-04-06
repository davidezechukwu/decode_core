import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface IPasswordChangeRequest extends ISuperRequestWithLocaleAndDevice {
    Password: string    	
	PasswordConfirmation: string
	ResetToken: string
	PasswordStrength?: number
}

export class IPasswordChangeRequestConstants {		
    
}