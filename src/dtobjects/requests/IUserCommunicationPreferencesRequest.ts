import {ISuperRequest} from './ISuperRequest'

export interface IUserCommunicationPreferencesRequest extends ISuperRequest {	   
    UseInApp: boolean
	UseEmail: boolean
	UseSMS: boolean
	UseWhatsApp: boolean	
	UseIMessage: boolean	
}