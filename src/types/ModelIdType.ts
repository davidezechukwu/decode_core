/**
 * Use
 *    export type ModelIdType = number
 *    export const ModelIdTypeName: string = 'number'
 *    export const IsModelIdTypeNumeric: boolean = true
 *  if Numeric Ids are preferred for persistance.
 *  This poses a security risk, especially when Ids are sequential. Turn on Sequential Ids security features on DataStore to mitigate against this.
 *  For example, SQL Server could be made to generate Ids like 1,2,10,12,22,...
 *  Additional Use Trap (Fake) Ids to detect and block sequential Id page scrappers
 *
 *  Use
 *    export type ModelIdType = string
 *    export const ModelIdTypeName: string = 'string'
 *    export const IsModelIdTypeNumeric: boolean = false
 *  if Guids or string Ids are preferred for persistance.
 *  This poses a performance risk on datasource, especially when GIIds are used as GUIdS are 16 Bytes! loooong as opposed to 8Bytes of Big Int and 4 Bytes of Int, etc
 * */
export type ModelIdType = number;

/**
 * Use to do a typeof to determine the type used for Entity Ids
 * */
export const ReferenceModelId: ModelIdType = 1;

/**
 * Use
 *    export type ModelIdType = number
 *    export const ModelIdTypeName: string = 'number'
 *    export const IsModelIdTypeNumeric: boolean = true
 *  if Numeric Ids are preferred for persistance.
 *  This poses a security risk, especially when Ids are sequential. Turn on Sequential Ids security features on DataStore to mitigate against this.
 *  For example, SQL Server could be made to generate Ids like 1,2,10,12,22,...
 *  Additional Use Trap (Fake) Ids to detect and block sequential Id page scrappers
 *
 *  Use
 *    export type ModelIdType = string
 *    export const ModelIdTypeName: string = 'string'
 *    export const IsModelIdTypeNumeric: boolean = false
 *  if Guids or string Ids are preferred for persistance.
 *  This poses a performance risk on datasource, especially when GIIds are used as GUIdS are 16 Bytes! loooong as opposed to 8Bytes of Big Int and 4 Bytes of Int, etc
 */

export const IsModelIdTypeNumeric: boolean = typeof ReferenceModelId == 'number';

/**
 * Use
 *    export type ModelIdType = number
 *    export const ModelIdTypeName: string = 'number'
 *    export const IsModelIdTypeNumeric: boolean = true
 *  if Numeric Ids are preferred for persistance.
 *  This poses a security risk, especially when Ids are sequential. Turn on Sequential Ids security features on DataStore to mitigate against this.
 *  For example, SQL Server could be made to generate Ids like 1,2,10,12,22,...
 *  Additional Use Trap (Fake) Ids to detect and block sequential Id page scrappers
 *
 *  Use
 *    export type ModelIdType = string
 *    export const ModelIdTypeName: string = 'string'
 *    export const IsModelIdTypeNumeric: boolean = false
 *  if Guids or string Ids are preferred for persistance.
 *  This poses a performance risk on datasource, especially when GIIds are used as GUIdS are 16 Bytes! loooong as opposed to 8Bytes of Big Int and 4 Bytes of Int, etc
 */
export const ModelIdTypeName: string = IsModelIdTypeNumeric ? 'number' : 'string';
