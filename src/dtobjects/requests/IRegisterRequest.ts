import { ILoginRequest } from './ILoginRequest'

export interface IRegisterRequest extends ILoginRequest {
	PasswordConfirmation: string
	IAcceptTermsAndConditions: boolean
	IAcceptPrivacyPolicy: boolean
	PasswordStrength: number
}

export class IRegisterRequestConstants {
	
}