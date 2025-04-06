import {ModelIdType} from '../types';
import {ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations} from './';

export interface IUserPhoto extends ISuper {
    UserId: ModelIdType;
	PhotoTypeId: ModelIdType;
    URL: string;
    Rank?: number | undefined
}

export class IUserPhotoConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserPhotos';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserPhoto';
    public static readonly URL_MIN_LENGTH: number = 3;
    public static readonly URL_MAX_LENGTH: number = 2000;
}

export interface IUserPhotoRelations extends ISuperRelations {
    User: IUserWithRelations;
}

export type IUserPhotoWithRelations = IUserPhoto & IUserPhotoRelations & ISuperWithRelations;
