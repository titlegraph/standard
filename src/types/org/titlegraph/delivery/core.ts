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
const id = 'org.titlegraph.delivery.core'

/** A complex geographical topology for spotbeams and blackouts. Evaluated granularly (Points > Zips > Counties > Regions > Countries). */
export interface GeoPolicy {
  $type?: 'org.titlegraph.delivery.core#geoPolicy'
  includes?: GeoShape
  excludes?: GeoShape
}

const hashGeoPolicy = 'geoPolicy'

export function isGeoPolicy<V>(v: V) {
  return is$typed(v, id, hashGeoPolicy)
}

export function validateGeoPolicy<V>(v: V) {
  return validate<GeoPolicy & V>(v, id, hashGeoPolicy)
}

export interface GeoShape {
  $type?: 'org.titlegraph.delivery.core#geoShape'
  /** ISO 3166-1 alpha-2 (e.g., ['DE', 'CH', 'BR']). */
  countries?: string[]
  /** ISO 3166-2 states/provinces (e.g., ['US-OH']). */
  regions?: string[]
  /** FIPS codes or localized county codes (e.g., ['39061'] for Hamilton County). */
  counties?: string[]
  /** Postal codes (e.g., ['45140', '90210']). */
  postalCodes?: string[]
  /** Center point and radius (e.g., Dodger Stadium). */
  circles?: GeoCircle[]
  /** Array of stringified GeoJSON polygon coordinate arrays (e.g., random shape in Brazil). */
  polygons?: string[]
}

const hashGeoShape = 'geoShape'

export function isGeoShape<V>(v: V) {
  return is$typed(v, id, hashGeoShape)
}

export function validateGeoShape<V>(v: V) {
  return validate<GeoShape & V>(v, id, hashGeoShape)
}

/** Defines the exact duration logic of an entitlement. */
export interface TemporalWindow {
  $type?: 'org.titlegraph.delivery.core#temporalWindow'
  /** Hard start (e.g., start of a sports season). */
  fixedStart?: string
  /** Hard end (e.g., end of sports season). */
  fixedEnd?: string
  /** TVOD/Rental: How long the user has to press play after purchase (e.g., 30 days = 2592000). */
  relativeValiditySeconds?: number
  /** TVOD/Rental: How long the user has to finish watching once started (e.g., 48 hours = 172800). */
  relativeViewingSeconds?: number
  /** SVOD: Rolling subscription period (e.g., 30 days). */
  recurringPeriodSeconds?: number
}

const hashTemporalWindow = 'temporalWindow'

export function isTemporalWindow<V>(v: V) {
  return is$typed(v, id, hashTemporalWindow)
}

export function validateTemporalWindow<V>(v: V) {
  return validate<TemporalWindow & V>(v, id, hashTemporalWindow)
}

export interface GeoCircle {
  $type?: 'org.titlegraph.delivery.core#geoCircle'
  /** Stringified decimal degree (e.g., '34.0739'). AT Protocol does not support float primitive types. */
  latitude: string
  /** Stringified decimal degree (e.g., '-118.2400'). */
  longitude: string
  radiusMeters: number
}

const hashGeoCircle = 'geoCircle'

export function isGeoCircle<V>(v: V) {
  return is$typed(v, id, hashGeoCircle)
}

export function validateGeoCircle<V>(v: V) {
  return validate<GeoCircle & V>(v, id, hashGeoCircle)
}
