import {ModelIdType} from '../types';
import {ISuper, IUserGroupWithRelations, IRoleWithRelations, ISuperRelations, ISuperWithRelations} from './.';

/**
 * The interface that represents a user's role within group, with a group having a subset of users
 * */
export interface IUserGroupRole extends ISuper {
    UserGroupId: ModelIdType;
    RoleId: ModelIdType;
}

export class IUserGroupRoleConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserGroupRoles';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserGroupRole';
}

export interface IUserGroupRoleRelations extends ISuperRelations {
    UserGroup: IUserGroupWithRelations;
    Role: IRoleWithRelations;
}

export type IUserGroupRoleWithRelations = IUserGroupRole & IUserGroupRoleRelations & ISuperWithRelations;
