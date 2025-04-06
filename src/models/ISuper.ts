import { ModelIdType } from '../types';
import { IUserWithRelations } from './IUser';

/**
 * The Super interface
 * */
export abstract class ISuper {
	public Id?: ModelIdType;
	public IsDeleted?: boolean;
	public CreatedById?: ModelIdType;
	public CreatedOn?: Date;
	public UpdatedById?: ModelIdType;
	public UpdatedOn?: Date;
	public ValidFrom?: Date;
	public ValidTo?: Date;
}

/**
 * @remarks
 * Common Constant for e.g url, mobile number, skype regex format	
 *	Use
		public static readonly PASSWORD_REGEX: string = `^(?=.{${8},})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$`
	if it should be 8 characters or more, contain at least one lower case,at least one upper case and contain at least 1 special character
	Use
		public static readonly PASSWORD_REGEX: string = `^(?=.{${8},})(?=.*[a-z])(?=.*[A-Z]).*$`
	if it should be 8 characters or more, contain at least one lower case and at least one upper case
	Use
		public static readonly PASSWORD_REGEX: string = ``		
	if it should be 8 characters as minLen overrides regex	
 */
export class ISuperConstants {
	public static readonly ID_NAME: string = 'Id';
	public static readonly EMAIL_ADDRESS_MIN_LENGTH: number = 5;
	public static readonly EMAIL_ADDRESS_MAX_LENGTH: number = 500;
	public static readonly EMAIL_ADDRESS_REGEX: string = '^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$'
	public static readonly PASSWORD_MIN_LENGTH: number = 8;
	public static readonly PASSWORD_MAX_LENGTH: number = 32;
	public static readonly PASSWORD_HIGH_STRENGTH_REGEX: string = `^(?=.{${8},})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$`
	public static readonly PASSWORD_MEDIUM_STRENGTH_REGEX: string = `^(?=.{${8},})(?=.*[a-z])(?=.*[A-Z]).*$`
	public static readonly PASSWORD_LOW_STRENGTH_REGEX: string = `^(?=.{${8},}).*$`
	public static readonly PASSWORD_NO_STRENGTH_REGEX: string = `.*`
}

export interface ISuperRelations {
	CreatedBy: IUserWithRelations;
	UpdatedBy: IUserWithRelations;
}

export type ISuperWithRelations = ISuper & ISuperRelations;
