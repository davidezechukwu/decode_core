import {ModelIdType} from '../types';
import {ISuper, IUserWithRelations, IGroupWithRelations, ISuperRelations, ISuperWithRelations} from './';

/**
 * The interface that represents a user group, i.e a group with a subset of users
 * */
export interface IUserGroup extends ISuper {
    UserId: ModelIdType;
    GroupId: ModelIdType;
}

export class IUserGroupConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserGroups';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserGroup';
}

export interface IUserGroupRelations extends ISuperRelations {
    User: IUserWithRelations;
    Group: IGroupWithRelations;
}

export type IUserGroupWithRelations = IUserGroup & IUserGroupRelations & ISuperWithRelations;
