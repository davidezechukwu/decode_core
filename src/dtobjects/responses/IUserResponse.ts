import {
	IUserDisplaySettings, 
	IUserEmailAddress, 
	IUserLogon, 
	IUserPhoto, 
	IUserWebLink, 
	IUserName, 
	IUserPhoneNumber, 
	IUserCommunicationPreferences,
    IUserNotification,
    IGroupNotification,
    IUserLogin
} from '../../models'
import {ILookupLanguageResponse, IUserGroupAndRoleResponse} from '.'
import {ModelIdType} from '../../types'

export interface IUserResponse {
    UserId: ModelIdType
    IsAuthenticated: boolean
	Theme: string
    UserEmailAddresses: IUserEmailAddress[]
    UserGroupAndRoles: IUserGroupAndRoleResponse[]
    UserLogons: IUserLogon[]
    UserName: IUserName | null
    UserPhoneNumbers: IUserPhoneNumber[] | null
    UserPhotos: IUserPhoto[] | null
    UserDisplaySettings: IUserDisplaySettings | null
	UserCommunicationPreferences: IUserCommunicationPreferences | null
	UserLanguage: ILookupLanguageResponse | null
    UserWebLinks: IUserWebLink[] | null
	UserLogins: IUserLogin[]
	UserNotifications: IUserNotification[]
	UserGroupNotifications: IGroupNotification[] | null
}
