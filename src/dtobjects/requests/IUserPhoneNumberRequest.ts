import { ModelIdType } from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface IUserPhoneNumberRequest extends ISuperRequest {	
	LocationId?: ModelIdType 
    PhoneTypeId: ModelIdType 
	PhoneNumber: string
    Rank?: number
}