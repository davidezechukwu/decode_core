import {ISuper, ISuperRelations, ISuperWithRelations} from './ISuper'

/**
 * The interface that represent a role
 * */
export interface IRole extends ISuper {
    Name: string
    DisplayName: string
    IsSystem: boolean
    Rank?: number | undefined
}

export class IRoleConstants {
    public static readonly SCHEMA_NAME: string = 'Security'
    public static readonly TABLE_NAME: string = 'Roles'
    public static readonly TABLE_NAME_SINGULAR: string = 'Role'
    public static readonly NAME_MIN_LENGTH: number = 1
    public static readonly NAME_MAX_LENGTH: number = 50
    public static readonly DISPLAY_NAME_MIN_LENGTH: number = 1
    public static readonly DISPLAY_NAME_MAX_LENGTH: number = 2000
}

export interface IRoleRelations extends ISuperRelations {}

export type IRoleWithRelations = IRole & IRoleRelations & ISuperWithRelations
