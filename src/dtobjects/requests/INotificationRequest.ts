import { ModelIdType } from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface INotificationRequest extends ISuperRequest {	
    FromDate?: Date
	ToDate?: Date
	FromId?: ModelIdType
	ToId?: ModelIdType    
    Limit?: number
	Skip?: number
	NotificationStrategyId?: ModelIdType
	NotificationStrategyValue? : string
	NotificationStatusId?: ModelIdType
    ImportanceId?: ModelIdType
	SearchPhrase?:string
}
