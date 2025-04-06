import { ILookup } from './ILookup'
import {ISuper, ISuperRelations, ISuperWithRelations} from './ISuper'

/**
 * The interface that represent a lookup category, such as Currency, Country
 * */
export interface ILookupCategory extends ISuper {
    Name: string
    Value: string
}

export class ILookupCategoryConstants {
    public static readonly SCHEMA_NAME: string = 'Taxonomy'
    public static readonly TABLE_NAME: string = 'LookupCategories'
    public static readonly TABLE_NAME_SINGULAR: string = 'LookupCategory'
    public static readonly NAME_MIN_LENGTH: number = 1
    public static readonly NAME_MAX_LENGTH: number = 2000
    public static readonly VALUE_MIN_LENGTH: number = 1
    public static readonly VALUE_MAX_LENGTH: number = 2000
}

export interface ILookupCategoryRelations extends ISuperRelations {
	Lookups:ILookup[]
}

export type ILookupCategoryWithRelations = ILookupCategory & ILookupCategoryRelations & ISuperWithRelations
