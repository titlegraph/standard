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
import type * as OrgTitlegraphCatalogCore from './core.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'org.titlegraph.catalog.movie'

export interface Main {
  $type: 'org.titlegraph.catalog.movie'
  openGraphType: 'video.movie'
  schemaUrl: 'https://schema.org/Movie'
  metadata: OrgTitlegraphCatalogCore.Metadata
  /** Total runtime in seconds. */
  durationSeconds: number
  /** URL to the HLS m3u8 trailer manifest. */
  trailerUrl?: string
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
