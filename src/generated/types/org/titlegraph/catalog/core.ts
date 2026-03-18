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
const id = 'org.titlegraph.catalog.core'

/** Foundational metadata shared across all TitleGraph media assets. */
export interface Metadata {
  $type?: 'org.titlegraph.catalog.core#metadata'
  /** Matches schema.org/name. The primary display title. */
  title: string
  /** Matches schema.org/description. The primary plot summary. */
  description: string
  /** Matches schema.org/url. The primary web/app destination to view this title. */
  url?: string
  /** Matches schema.org/abstract. A short logline. */
  synopsis?: string
  /** The year of initial global release. */
  releaseYear?: number
  /** Matches schema.org/contentRating (e.g., PG-13, TV-MA). */
  contentRating?: string
  /** Matches schema.org/genre. */
  genres?: string[]
  /** The Entertainment Identifier Registry (EIDR) ID. */
  eidr?: string
  /** An array of internal system IDs (e.g., Gracenote, IMDb, Moonstone Hub). */
  proprietaryIds?: ProprietaryId[]
  technicalSpecs?: TechnicalSpecs
  /** Primary 2:3 or 3:4 key art. */
  imagePortrait: BlobRef
  /** Primary 16:9 hero artwork. */
  imageLandscape?: BlobRef
  /** Textless 16:9 background art. */
  imageBackground?: BlobRef
  /** Transparent logo artwork. */
  titleTreatment?: BlobRef
}

const hashMetadata = 'metadata'

export function isMetadata<V>(v: V) {
  return is$typed(v, id, hashMetadata)
}

export function validateMetadata<V>(v: V) {
  return validate<Metadata & V>(v, id, hashMetadata)
}

export interface ProprietaryId {
  $type?: 'org.titlegraph.catalog.core#proprietaryId'
  system: string
  id: string
}

const hashProprietaryId = 'proprietaryId'

export function isProprietaryId<V>(v: V) {
  return is$typed(v, id, hashProprietaryId)
}

export function validateProprietaryId<V>(v: V) {
  return validate<ProprietaryId & V>(v, id, hashProprietaryId)
}

export interface TechnicalSpecs {
  $type?: 'org.titlegraph.catalog.core#technicalSpecs'
  /** Standardized resolution formats available (e.g., 'SD', 'HD', '4K', '8K'). */
  resolutions?: string[]
  /** Available presentation ratios (e.g., '16:9', '4:3', '2.39:1', '9:16'). */
  aspectRatios?: string[]
  /** BCP 47 language tags for the original audio dialogue (e.g., 'en-US', 'ja-JP'). */
  primaryLanguages?: string[]
  /** BCP 47 language tags for available alternate audio dubs. */
  dubbedLanguages?: string[]
  /** BCP 47 language tags for available text subtitles. */
  subtitleLanguages?: string[]
  /** Standardized accessibility identifiers (e.g., 'closed-captions', 'descriptive-audio', 'sign-language-interpreter'). */
  accessibilityFeatures?: string[]
}

const hashTechnicalSpecs = 'technicalSpecs'

export function isTechnicalSpecs<V>(v: V) {
  return is$typed(v, id, hashTechnicalSpecs)
}

export function validateTechnicalSpecs<V>(v: V) {
  return validate<TechnicalSpecs & V>(v, id, hashTechnicalSpecs)
}
