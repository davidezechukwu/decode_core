import {ModelIdType} from '../types'
import {ILookupWithRelations, ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations} from './'

/**
 * The interface for all notifcations
 *@remarks
 * ParentId is used to form a chain
 * */
export interface IUserNotification extends ISuper {
    UserId: ModelIdType
    NotificationStrategyId: ModelIdType
    NotificationStatusId: ModelIdType
    LanguageId: ModelIdType
    ParentId?: ModelIdType
	ImportanceId: ModelIdType
    To: string
    From?: string
    FromName?: string
    Subject?: string
    Message: string
    Parameters?: string
    ResponseCode?: string
    ResponseBody?: string
    Retries: number,	
}

export class IUserNotificationConstants {
    public static readonly SCHEMA_NAME: string = 'UserData'
    public static readonly TABLE_NAME: string = 'UserNotifications'
    public static readonly TABLE_NAME_SINGULAR: string = 'UserNotification'
    public static readonly TO_MIN_LENGTH: number = 1
    public static readonly TO_MAX_LENGTH: number = 2000
    public static readonly FROM_MIN_LENGTH: number = 1
    public static readonly FROM_MAX_LENGTH: number = 2000
    public static readonly FROM_NAME_MIN_LENGTH: number = 1
    public static readonly FROM_NAME_MAX_LENGTH: number = 100
    public static readonly SUBJECT_MIN_LENGTH: number = 1
    public static readonly SUBJECT_MAX_LENGTH: number = 2000
    public static readonly PARAMETERS_MIN_LENGTH: number = 1
    public static readonly PARAMETERS_MAX_LENGTH: number = 10000
    public static readonly RESPONSE_CODE_MIN_LENGTH: number = 1
    public static readonly RESPONSE_CODE_MAX_LENGTH: number = 100
    public static readonly RESPONSE_BODY_MIN_LENGTH: number = 1
    public static readonly RESPONSE_BODY_MAX_LENGTH: number = 2000
    public static readonly MESSAGE_MIN_LENGTH: number = 1
    public static readonly MESSAGE_MAX_LENGTH: number = 100000
    public static readonly RETRIES_MIN_VALUE: number = 0
    public static readonly RETRIES_MAX_VALUE: number = 5
}

export interface IUserNotificationRelations extends ISuperRelations {
    User: IUserWithRelations
    NotificationStrategy: ILookupWithRelations
    NotificationStatus: ILookupWithRelations
    Language: ILookupWithRelations
	Importance: ILookupWithRelations
    Parent?: IUserNotificationRelations
}

export type IUserNotificationWithRelations = IUserNotification & IUserNotificationRelations & ISuperWithRelations
