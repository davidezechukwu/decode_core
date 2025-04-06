import {ModelIdType} from '../../types'
import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface ILookupRequest extends ISuperRequestWithLocaleAndDevice {
    LookupId: ModelIdType
}
