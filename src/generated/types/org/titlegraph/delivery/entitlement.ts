/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as OrgTitlegraphDeliveryCore from './core.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'org.titlegraph.delivery.entitlement'

export interface Main {
  $type: 'org.titlegraph.delivery.entitlement'
  /** Display name of the entitlement (e.g., 'Premium Sports Package', 'Hager Rental'). */
  name: string
  /** The underlying business model of the right. */
  licenseType: 'SVOD' | 'TVOD' | 'EST' | 'AVOD'
  /** The AT-URIs of the catalog assets, collections, or linear channels this entitlement unlocks. */
  targetRefs: string[]
  timeRules?: OrgTitlegraphDeliveryCore.TemporalWindow
  baseGeoPolicy?: OrgTitlegraphDeliveryCore.GeoPolicy
  [k: string]: unknown
}

const hashMain = 'main'

export function isMain<V>(v: V) {
  return is$typed(v, id, hashMain)
}

export function validateMain<V>(v: V) {
  return validate<Main & V>(v, id, hashMain, true)
}

export {
  type Main as Record,
  isMain as isRecord,
  validateMain as validateRecord,
}
