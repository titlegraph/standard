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
const id = 'org.titlegraph.catalog.credit'

export interface Main {
  $type: 'org.titlegraph.catalog.credit'
  /** The AT-URI of the org.titlegraph.catalog.movie or series. */
  assetRef: string
  /** The AT Protocol DID of the person or entity being credited. */
  subject?: string
  /** The character name, department or job title (e.g., 'Director', 'Stunt Double', '"Sophia"'). */
  role: string
  /** The plain text name the user was credited under. */
  name: string
  /** Optional self-reported billing order. */
  order?: number
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
