import {ModelIdType} from '../../types'
import {ISuperRequestWithLocaleAndDevice} from './ISuperRequestWithLocaleAndDevice'

export interface ILookupCategoryRequest extends ISuperRequestWithLocaleAndDevice {
    LookupCategoryId?: ModelIdType
	LookupCategoryValue?: string
}
