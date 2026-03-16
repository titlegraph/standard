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
const id = 'org.titlegraph.delivery.offer'

export interface Main {
  $type: 'org.titlegraph.delivery.offer'
  /** What you are actually buying. */
  entitlementRef: string
  offerGeoEligibility: OrgTitlegraphDeliveryCore.GeoPolicy
  /** The price in the lowest currency denominator (e.g., cents. So $10.00 is 1000). 0 if free/AVOD. */
  price: number
  /** ISO 4217 code (e.g., 'USD', 'EUR'). */
  currency: string
  /** When the item goes on sale. */
  offerValidFrom?: string
  /** When the sale ends. */
  offerValidThrough?: string
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
