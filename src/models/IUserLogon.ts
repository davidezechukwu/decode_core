import {ModelIdType} from '../types';
import {ISuper, ISuperRelations, ISuperWithRelations, ILookupWithRelations, IUserWithRelations} from './';

/**
 * The interface that represent an external logon such as Facebook, Google
 * */
export interface IUserLogon extends ISuper {
    UserId: ModelIdType;
    ProviderId: ModelIdType;
    ProviderUserId: string;
    ProviderUserName?: string;
    Rank?: number | undefined
}

/**
 * Max Lengths are from the UK e-Gov standards
 */
export class IUserLogonConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserLogons';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserLogon';
    public static readonly PROVIDER_USER_ID_MIN_LENGTH: number = 1;
    public static readonly PROVIDER_USER_ID_MAX_LENGTH: number = 500;
    public static readonly PROVIDER_USER_NAME_MIN_LENGTH: number = 1;
    public static readonly PROVIDER_USER_NAME_MAX_LENGTH: number = 500;
}

export interface IUserLogonRelations extends ISuperRelations {
    User: IUserWithRelations;
    Provider: ILookupWithRelations;
}

export type IUserLogonWithRelations = IUserLogon & IUserLogonRelations & ISuperWithRelations;
