import {ISuper, ISuperRelations, ISuperWithRelations} from './ISuper';

/**
 * The interface that represents a group
 * */
export interface IGroup extends ISuper {
    Name: string;
    DisplayName: string;
    IsSystem: boolean;
}

export class IGroupConstants {
    public static readonly SCHEMA_NAME: string = 'Security';
    public static readonly TABLE_NAME: string = 'Groups';
    public static readonly TABLE_NAME_SINGULAR: string = 'Group';
    public static readonly NAME_MIN_LENGTH: number = 1;
    public static readonly NAME_MAX_LENGTH: number = 50;
    public static readonly DISPLAY_NAME_MIN_LENGTH: number = 1;
    public static readonly DISPLAY_NAME_MAX_LENGTH: number = 2000;
}

export interface IGroupRelations extends ISuperRelations {}

export type IGroupWithRelations = IGroup & IGroupRelations & ISuperWithRelations;
