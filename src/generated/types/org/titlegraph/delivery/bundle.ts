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
const id = 'org.titlegraph.delivery.bundle'

export interface Main {
  $type: 'org.titlegraph.delivery.bundle'
  /** Consumer-facing display name (e.g., 'The HBO & Cinemax Add-On'). */
  name: string
  /** Marketing copy explaining the value of the bundle. */
  description: string
  /** The transparent logo or lockup for the bundle itself. */
  imageLogo?: BlobRef
  /** AT-URIs pointing to org.titlegraph.delivery.channel records (e.g., HBO East, HBO West, HBO Comedy). */
  channelRefs?: string[]
  /** AT-URIs pointing to org.titlegraph.catalog.collection, series, or movie records (e.g., the HBO VOD catalog). */
  catalogRefs?: string[]
  bundleBaseGeoPolicy?: OrgTitlegraphDeliveryCore.GeoPolicy
  /** The station-to-LCN mapping for this commercial package. */
  lineup?: LineupItem[]
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

export interface LineupItem {
  $type?: 'org.titlegraph.delivery.bundle#lineupItem'
  /** Pointer to the org.titlegraph.delivery.channel. */
  channelRef: string
  /** The LCN (e.g., '101', '4.1'). String to support sub-channels. */
  logicalChannelNumber: string
}

const hashLineupItem = 'lineupItem'

export function isLineupItem<V>(v: V) {
  return is$typed(v, id, hashLineupItem)
}

export function validateLineupItem<V>(v: V) {
  return validate<LineupItem & V>(v, id, hashLineupItem)
}
