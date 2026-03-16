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
const id = 'org.titlegraph.catalog.season'

export interface Main {
  $type: 'org.titlegraph.catalog.season'
  schemaUrl: 'https://schema.org/TVSeason'
  /** The AT-URI of the parent org.titlegraph.catalog.series record. */
  seriesRef: string
  /** The regional or stylistic noun (e.g., 'Season', 'Series', 'Part', 'Book'). */
  displayLabel: string
  /** The identifier for this grouping (e.g., '1', 'A', 'VI'). Allows for alphanumeric naming. */
  displayNumber: string
  /** Matches schema.org/numberOfEpisodes. */
  totalEpisodes?: number
  metadata: OrgTitlegraphCatalogCore.Metadata
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
