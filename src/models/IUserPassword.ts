import { ModelIdType } from '../types'
import { ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations } from './'

/**
 *The interface that represents a local authentication password
 * */
export interface IUserPassword extends ISuper {
	UserId: ModelIdType
	PasswordStrength: number
	PasswordHash: string
	PasswordSalt: string
	FailedAttempts: number 
	ResetToken?: string
	ResetRequestedOn?: Date
	ResetAttempts?: number
}

export class IUserPasswordConstants {
	public static readonly SCHEMA_NAME: string = 'UserData'
	public static readonly TABLE_NAME: string = 'UserPasswords'
	public static readonly TABLE_NAME_SINGULAR: string = 'UserPassword'
}

export interface IUserPasswordRelations extends ISuperRelations {
	User: IUserWithRelations
}

export type IUserPasswordWithRelations = IUserPassword & IUserPasswordRelations & ISuperWithRelations
