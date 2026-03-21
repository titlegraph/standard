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
const id = 'org.titlegraph.social.review'

export interface Main {
  $type: 'org.titlegraph.social.review'
  /** Pointer to the specific movie, episode, or series being reviewed. */
  subject: string
  /** A 1 to 10 scale (allows for 5 stars with half-stars). */
  rating?: number
  /** The written body of the review. */
  text?: string
  /** Flag to allow the UI to blur the text. */
  containsSpoilers?: boolean
  createdAt: string
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
