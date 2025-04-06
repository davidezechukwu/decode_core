import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface IChangePasswordRequest extends ISuperRequestWithLocaleAndDevice {	
	Password: string    
    PasswordConfirmation: string	
	PasswordStrength: number
}
