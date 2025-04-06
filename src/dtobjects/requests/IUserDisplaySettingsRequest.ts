import { ModelIdType } from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface IUserDisplaySettingsRequest extends ISuperRequest {	
    LanguageId: ModelIdType
    IsOnLowSpeedConnection: boolean
    DisableAnimations: boolean
    ShowBackgroundVideo: boolean
    ThemeId: ModelIdType
}