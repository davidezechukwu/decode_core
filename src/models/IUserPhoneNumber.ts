import {ModelIdType} from '../types'
import {ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations} from './'

/**
 * The interface that represent a user's' email address
 * */
export interface IUserPhoneNumber extends ISuper {
    UserId: ModelIdType
	LocationId?: ModelIdType 
    PhoneTypeId: ModelIdType 
    PhoneNumber: string
	Verified?: boolean	
	VerificationToken?: string
	VerificationRequestedOn?: Date
	VerificationAttempts?: number
    Rank?: number | undefined
}

export class IUserPhoneNumberConstants {
    public static readonly SCHEMA_NAME: string = 'UserData'
    public static readonly TABLE_NAME: string = 'UserPhoneNumbers'
    public static readonly TABLE_NAME_SINGULAR: string = 'UserPhoneNumber'
    public static readonly PHONE_NUMBER_MIN_LENGTH: number = 10
    public static readonly PHONE_NUMBER_MAX_LENGTH: number = 28
}

export interface IUserPhoneNumberRelations extends ISuperRelations {
    User: IUserWithRelations
}

export type IUserPhoneNumberWithRelations = IUserPhoneNumber & IUserPhoneNumberRelations & ISuperWithRelations
