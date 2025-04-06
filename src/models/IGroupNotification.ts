import {ModelIdType} from '../types'
import {ISuper, ILookupWithRelations, IGroupWithRelations, ISuperRelations, ISuperWithRelations} from './'

/**
 * The interface for all group notifications
 *@remarks
 * ParentId is used to form a chain
 * */
export interface IGroupNotification extends ISuper {
    GroupId: ModelIdType
    NotificationStrategyId: ModelIdType
    NotificationStatusId: ModelIdType
    LanguageId: ModelIdType
	ImportanceId: ModelIdType
    ParentId?: ModelIdType
    To: string
    From?: string
    FromName?: string
    Subject?: string
    Message: string
    Parameters?: string
    ResponseCode?: string
    ResponseBody?: string
    Retries: number
}

export class IGroupNotificationConstants {
    public static readonly SCHEMA_NAME: string = 'Security'
    public static readonly TABLE_NAME: string = 'GroupNotifications'
    public static readonly TABLE_NAME_SINGULAR: string = 'GroupNotification'
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

export interface IGroupNotificationRelations extends ISuperRelations {
    Group: IGroupWithRelations
    NotificationStrategy: ILookupWithRelations
    NotificationStatus: ILookupWithRelations
    Language: ILookupWithRelations
	Importance: ILookupWithRelations
    Parent?: IGroupNotificationWithRelations
}

export type IGroupNotificationWithRelations = IGroupNotification & IGroupNotificationRelations & ISuperWithRelations
