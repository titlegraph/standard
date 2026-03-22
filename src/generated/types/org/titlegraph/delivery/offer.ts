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

const is$typed = _is$typed,
  validate = _validate
const id = 'org.titlegraph.delivery.offer'

export interface Main {
  $type: 'org.titlegraph.delivery.offer'
  /** Pointer to the Movie or Series. */
  assetRef: string
  /** e.g., 'did:web:circuitcinema.com' or a specific App AT-URI. */
  platformRef: string
  licenseType: 'SVOD' | 'AVOD' | 'TVOD' | 'EST' | 'FAST'
  /** Deep link to stream the asset. */
  watchUrl?: string
  /** Geographic regions. Supports ISO 3166-1 alpha-2 ('US'), ISO 3166-2 ('US-CA'), or prefixed hyper-local codes ('zip:US:90210', 'dma:501'). If omitted/empty, implies worldwide availability. */
  allowedTerritories?: string[]
  /** Geographic regions where the offer is explicitly blocked, supporting the same formats as allowedTerritories. */
  excludedTerritories?: string[]
  /** The start of the licensing window. If omitted, it is available immediately. */
  validFrom?: string
  /** The end of the licensing window. If omitted, the offer is open-ended. */
  validThrough?: string
  /** Optional: Cost in cents (only needed if TVOD/EST). */
  price?: number
  /** Optional: ISO 4217 code (e.g., 'USD'). */
  currency?: string
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
