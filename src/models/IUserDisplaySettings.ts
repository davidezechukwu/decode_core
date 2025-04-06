import {ModelIdType} from '../types';
import {ILookupWithRelations, ISuper, ISuperRelations, ISuperWithRelations, IUserWithRelations} from './';

export interface IUserDisplaySettings extends ISuper {
    UserId: ModelIdType;
    LanguageId: ModelIdType;
	ThemeId: ModelIdType;
    IsOnLowSpeedConnection: boolean;
    DisableAnimations: boolean;
    ShowBackgroundVideo: boolean;    
}

export class IUserDisplaySettingsConstants {
    public static readonly SCHEMA_NAME: string = 'UserData';
    public static readonly TABLE_NAME: string = 'UserDisplaySettings';
    public static readonly TABLE_NAME_SINGULAR: string = 'UserDisplaySetting';
}

export interface IUserDisplaySettingsRelations extends ISuperRelations {
    User: IUserWithRelations;
    Language: ILookupWithRelations;
}

export type IUserDisplaySettingsWithRelations = IUserDisplaySettings & IUserDisplaySettingsRelations & ISuperWithRelations;
 