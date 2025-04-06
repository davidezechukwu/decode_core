import {ModelIdType} from '../types'
import {ISuper, ISuperRelations, ISuperWithRelations, ILookupCategoryWithRelations} from './'

/**
 *  Interface that represent a lookup
 *  @remarks
 *  LookupCategoryId is the category of the lookup, for e.g Currency, Countries
 */
export interface ILookup extends ISuper {
    LookupCategoryId: ModelIdType
    Name: string
    OfficialName: string
    PluralName: string
    Value: string
    Symbol?: string
    NativeSymbol?: string
    OtherValue1?: string
    OtherValue2?: string
    OtherValue3?: string
    OtherValue4?: string
    OtherValue5?: string
	OtherValue6?: string
    OtherValue7?: string
    OtherValue8?: string
    OtherValue9?: string
    OtherValue10?: string
	OtherValue11?: string
    OtherValue12?: string
    OtherValue13?: string
    OtherValue14?: string
    OtherValue15?: string
    Rank?: number | undefined
}

export class ILookupConstants {
    public static readonly SCHEMA_NAME: string = 'Taxonomy'
    public static readonly TABLE_NAME: string = 'Lookups'
    public static readonly TABLE_NAME_SINGULAR: string = 'Lookup'
    public static readonly NAME_MIN_LENGTH: number = 1
    public static readonly NAME_MAX_LENGTH: number = 2000
    public static readonly OFFICIAL_NAME_MIN_LENGTH: number = 1
    public static readonly OFFICIAL_NAME_MAX_LENGTH: number = 2000
    public static readonly PLURAL_NAME_MIN_LENGTH: number = 1
    public static readonly PLURAL_NAME_MAX_LENGTH: number = 2000
    public static readonly SYMBOL_MIN_LENGTH: number = 1
    public static readonly SYMBOL_MAX_LENGTH: number = 20
    public static readonly NATIVE_SYMBOL_MIN_LENGTH: number = 1
    public static readonly NATIVE_SYMBOL_MAX_LENGTH: number = 20
    public static readonly VALUE_MIN_LENGTH: number = 1
    public static readonly VALUE_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE1_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE2_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE3_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE4_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE5_MIN_LENGTH: number = 1    
	public static readonly OTHER_VALUE6_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE7_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE8_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE9_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE10_MIN_LENGTH: number = 1
	public static readonly OTHER_VALUE11_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE12_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE13_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE14_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE15_MIN_LENGTH: number = 1
    public static readonly LOOKUP_VALUE_MIN_LENGTH: number = 1
    public static readonly OTHER_VALUE1_MAX_LENGTH: number = 2000
    public static readonly OTHER_VALUE2_MAX_LENGTH: number = 2000
    public static readonly OTHER_VALUE3_MAX_LENGTH: number = 2000
    public static readonly OTHER_VALUE4_MAX_LENGTH: number = 2000
    public static readonly OTHER_VALUE5_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE6_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE7_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE8_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE9_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE10_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE11_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE12_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE13_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE14_MAX_LENGTH: number = 2000
	public static readonly OTHER_VALUE15_MAX_LENGTH: number = 2000
}

export interface ILookupRelations extends ISuperRelations {
	 LookupCategory: ILookupCategoryWithRelations
}

export type ILookupWithRelations = ILookup & ILookupRelations & ISuperWithRelations
