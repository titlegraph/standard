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
const id = 'org.titlegraph.social.representation'

export interface Main {
  $type: 'org.titlegraph.social.representation'
  /** The DID of the person, or the AT-URI of the asset (e.g., a Movie) being represented. */
  subject: string
  /** The DID of the agent, manager, publicist, or firm providing the representation. */
  representative: string
  /** The specific capacity of the representation (e.g., 'Talent Manager', 'Sales Agent', 'Legal Counsel'). */
  role: string
  createdAt?: string
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
