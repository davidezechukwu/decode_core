import {ModelIdType} from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface IGroupRequest extends ISuperRequest {
    GroupId?: ModelIdType
}
