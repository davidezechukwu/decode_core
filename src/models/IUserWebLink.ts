import {ModelIdType} from '../types';
import {ISuper, IUserWithRelations, ISuperRelations, ISuperWithRelations} from './';

/**
 * The interface that represent user web links such as urls to social media profiles,
 * */
export interface IUserWebLink extends ISuper {
    UserId: ModelIdType;
    URL: string;
    Rank?: number | undefined
}

export class IUserWebLinkConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserWebLinks';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserWebLink';
    public static readonly URL_MIN_LENGTH: number = 5;
    public static readonly URL_MAX_LENGTH: number = 2000;
}

export interface IUserWebLinkRelations extends ISuperRelations {
    User: IUserWithRelations;
}

export type IUserWebLinkWithRelations = IUserWebLink & IUserWebLinkRelations & ISuperWithRelations;
