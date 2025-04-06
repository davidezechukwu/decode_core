import {ModelIdType} from '../types'
import {ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations} from './'

export interface IUserCommunicationPreferences extends ISuper {
    UserId: ModelIdType
    UseInApp: boolean
	UseEmail: boolean
	UseSMS: boolean
	UseWhatsApp: boolean	
	UseIMessage: boolean	
}

export class IUserCommunicationPreferencesConstants {
    public static readonly SCHEMA_NAME: string = 'UserData'
    public static readonly TABLE_NAME: string = 'UserCommunicationPreferences'
    public static readonly TABLE_NAME_SINGULAR: string = 'UserCommunicationPreference'
}

export interface IUserCommunicationPreferencesRelations extends ISuperRelations {
    User: IUserWithRelations    
}

export type IUserCommunicationPreferencesWithRelations = IUserCommunicationPreferences & IUserCommunicationPreferencesRelations & ISuperWithRelations
 