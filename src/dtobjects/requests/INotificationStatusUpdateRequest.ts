import { ModelIdType } from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface INotificationStatusUpdateRequest extends ISuperRequest {	 
	NotificationStatusId?: ModelIdType    
}
