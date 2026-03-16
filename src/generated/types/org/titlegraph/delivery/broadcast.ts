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
const id = 'org.titlegraph.delivery.broadcast'

export interface Main {
  $type: 'org.titlegraph.delivery.broadcast'
  /** The station airing this broadcast. */
  channelRef: string
  startTime: string
  endTime: string
  /** Optional. The underlying catalog asset (Movie, Episode) being aired. */
  assetRef?: string
  /** The display title (used if assetRef is missing or for live sports). */
  title?: string
  /** True for a live event (e.g., a football game). */
  isLive?: boolean
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
