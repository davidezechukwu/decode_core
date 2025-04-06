import {ModelIdType} from '../types';
import {ISuper, IUserWithRelations, ISuperRelations, ISuperWithRelations} from './';

/**
 * The interface that represents claims, such as firstname, lastname
 * */
export interface IUserName extends ISuper {
    UserId: ModelIdType;
    DisplayName?: string;
    Title?: string;
    FirstName: string;
    MiddleName?: string;
    LastName: string;
    NickName?: string;
}

/**
 * Max Lengths are from the UK e-Gov standards
 * See https://xml.coverpages.org/govtalkCat2.pdf
 */
export class IUserNameConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserNames';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserName';
    public static readonly TITLE_MIN_LENGTH: number = 1;
    public static readonly TITLE_MAX_LENGTH: number = 35;
    public static readonly FIRSTNAME_MIN_LENGTH: number = 1;
    public static readonly FIRSTNAME_MAX_LENGTH: number = 35;
    public static readonly MIDDLENAME_MIN_LENGTH: number = 1;
    public static readonly MIDDLENAME_MAX_LENGTH: number = 35;
    public static readonly LASTNAME_MIN_LENGTH: number = 1;
    public static readonly LASTNAME_MAX_LENGTH: number = 35;
    public static readonly NICKNAME_MIN_LENGTH: number = 1;
    public static readonly NICKNAME_MAX_LENGTH: number = 35;
    public static readonly DISPLAY_NAME_MIN_LENGTH: number = 1;
    public static readonly DISPLAY_NAME_MAX_LENGTH: number = 500;
}

export interface IUserNameRelations extends ISuperRelations {
    User: IUserWithRelations;
}

export type IUserNameWithRelations = IUserName & IUserNameRelations & ISuperWithRelations;
