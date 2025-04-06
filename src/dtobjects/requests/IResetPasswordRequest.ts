import { IChangePasswordRequest } from './IChangePasswordRequest'
import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface IResetPasswordRequest extends IChangePasswordRequest {		
	ResetToken: string    
}
