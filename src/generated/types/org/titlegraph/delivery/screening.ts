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
const id = 'org.titlegraph.delivery.screening'

export interface Main {
  $type: 'org.titlegraph.delivery.screening'
  /** Pointer to the org.titlegraph.delivery.venue. */
  venueRef: string
  /** e.g., 'Auditorium 4', 'IMAX', or 'Grand Théâtre Lumière'. */
  screenName?: string
  startTime: string
  /** Optional for physical screenings. */
  endTime?: string
  /** Pointer to the org.titlegraph.catalog.movie being shown. */
  assetRef?: string
  /** Fallback title if assetRef is missing (e.g., for unlinked indie festival shorts). */
  title?: string
  /** Direct link to point-of-sale (Fandango, Atom, or Festival box office). */
  ticketUrl?: string
  /** Flag for festival or world premieres. */
  isPremiere?: boolean
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
