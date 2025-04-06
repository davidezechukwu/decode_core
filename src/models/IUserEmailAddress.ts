import { ModelIdType } from '../types'
import { ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations } from './'

/**
 * The interface that represents a user's' email address
 * */
export interface IUserEmailAddress extends ISuper {
	UserId: ModelIdType
	EmailAddressTypeId: ModelIdType
	EmailAddress: string
	Verified?: boolean
	VerificationToken?: string
	VerificationRequestedOn?: Date
	VerificationAttempts?: number
	Rank?: number | undefined
}

export class IUserEmailAddressConstants {
	public static readonly SCHEMA_NAME: string = 'UserData'
	public static readonly TABLE_NAME: string = 'UserEmailAddresses'
	public static readonly TABLE_NAME_SINGULAR: string = 'UserEmailAddress'
}

export interface IUserEmailAddressRelations extends ISuperRelations {
	User: IUserWithRelations
}

export type IUserEmailAddressWithRelations = IUserEmailAddress & IUserEmailAddressRelations & ISuperWithRelations
