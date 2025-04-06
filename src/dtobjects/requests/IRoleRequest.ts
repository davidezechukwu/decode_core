import {ModelIdType} from '../../types'
import {ISuperRequest} from './ISuperRequest'

export interface IRoleRequest extends ISuperRequest {
    RoleId?: ModelIdType
}
