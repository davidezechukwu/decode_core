import {ModelIdType} from '../types'
import {ISuper, ISuperRelations, ISuperWithRelations, ILookupWithRelations, IUserWithRelations} from '.'

/**
 * The interface that represent a user's login's history
 * */
export interface IUserLogin extends ISuper {
    UserId: ModelIdType
	RawUserAgent: string
	RawClientAddress?: string
	ClientType?: string
    ClientName?: string
    ClientVersion?: string
    ClientEngine?: string
    ClientEngineVersion?: string
	OSName?: string
	OSVersion?: string
	OSPlatform?: string	
	DeviceType?: string
	DeviceBrand?: string
	DeviceModel?: string
	Latitude?: number	
	Longitude?: number
	LocationId?: ModelIdType
	Region?: string		
	RegionCode?: string		
	Postcode?: string		
	City?: string		
	IPAddress?: string
}

/**
 * Max Lengths are from the UK e-Gov standards
 */
export class IUserLoginConstants {
    public static readonly SCHEMA_NAME: string = 'UserData'
    public static readonly TABLE_NAME: string = 'UserLogins'
    public static readonly TABLE_NAME_SINGULAR: string = 'UserLogin'
}

export interface IUserLoginRelations extends ISuperRelations {
    User: IUserWithRelations
    Location?: ILookupWithRelations
}

export type IUserLoginWithRelations = IUserLogin & IUserLoginRelations & ISuperWithRelations
