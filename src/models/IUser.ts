import {ISuper, ISuperRelations, ISuperWithRelations} from './ISuper';

/**
 * The interface that represents a user
 * */
export interface IUser extends ISuper {}

export class IUserConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'Users';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserData';
}

export interface IUserRelations extends ISuperRelations {}

export type IUserWithRelations = IUser & IUserRelations & ISuperWithRelations;
