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
  /** Optional AT-URI pointing to the canonical parent catalog record (e.g., on @filmograph.io) that this spoke record overlays or enriches. */
  canonicalRef?: string
  /** AT-URIs of third-party or filmmaker catalog records adopted or merged into this canonical record. */
  sourceRefs?: string[]
  /** The DID of the trusted curator who approved or adopted this record into the canonical registry. */
  curatedBy?: string
  /** Matches schema.org/name. The primary display title. */
  title: string
  /** The original title in the work's native language. */
  originalTitle?: string
  /** Matches schema.org/description. The primary plot summary. */
  description?: string
  /** Translated plot summaries or loglines keyed by BCP 47 language tag. */
  localizedDescriptions?: LocalizedText[]
  /** Matches schema.org/url. The primary web/app destination to view this title. */
  url?: string
  /** Matches schema.org/abstract. A short logline. */
  synopsis?: string
  /** The year of initial global release. */
  releaseYear?: number
  /** ISO 8601 initial release date. */
  releaseDate?: string
  /** ISO 3166-1 alpha-2 country codes of origin (e.g., ['US', 'ZA']). */
  countriesOfOrigin?: string[]
  /** Matches schema.org/contentRating (e.g., PG-13, TV-MA). */
  contentRating?: string
  /** Matches schema.org/genre. */
  genres?: string[]
  /** The Entertainment Identifier Registry (EIDR) ID. */
  eidr?: string
  /** An array of internal system IDs (e.g., Wikidata, IMDb, TMDB, Gracenote). */
  proprietaryIds?: ProprietaryId[]
  technicalSpecs?: TechnicalSpecs
  /** Primary 2:3 or 3:4 key art. */
  imagePortrait?: BlobRef
  /** External URI for primary 2:3 or 3:4 key art. */
  imagePortraitUrl?: string
  /** Primary 16:9 hero artwork. */
  imageLandscape?: BlobRef
  /** External URI for primary 16:9 hero artwork. */
  imageLandscapeUrl?: string
  /** Textless 16:9 background art. */
  imageBackground?: BlobRef
  /** External URI for textless 16:9 background art. */
  imageBackgroundUrl?: string
  /** Transparent logo artwork. */
  titleTreatment?: BlobRef
  /** External URI for transparent logo artwork. */
  titleTreatmentUrl?: string
  productionStatus:
    | 'pitch'
    | 'script'
    | 'development'
    | 'pre-production'
    | 'production'
    | 'post-production'
    | 'completed'
    | 'released'
  /** e.g., ['distribution', 'funding', 'cast'] */
  seeking?: string[]
  /** Secure link to a deck, script, or screener. */
  pitchMaterialsUrl?: string
  credits?: CreditItem[]
}

const hashMetadata = 'metadata'

export function isMetadata<V>(v: V) {
  return is$typed(v, id, hashMetadata)
}

export function validateMetadata<V>(v: V) {
  return validate<Metadata & V>(v, id, hashMetadata)
}

export interface LocalizedText {
  $type?: 'org.titlegraph.catalog.core#localizedText'
  /** BCP 47 language code (e.g., 'en-ZA', 'zu', 'af'). */
  lang: string
  text: string
}

const hashLocalizedText = 'localizedText'

export function isLocalizedText<V>(v: V) {
  return is$typed(v, id, hashLocalizedText)
}

export function validateLocalizedText<V>(v: V) {
  return validate<LocalizedText & V>(v, id, hashLocalizedText)
}

export interface CreditItem {
  $type?: 'org.titlegraph.catalog.core#creditItem'
  role: string
  name: string
  /** Character name if role is Cast/Actor (Wikidata P453 / P4633). */
  character?: string
  /** Billing order (Wikidata P1545). */
  order?: number
  /** Links the credit to an AT Proto user. */
  did?: string
  /** External registry IDs for this person (e.g., IMDb nm ID, Wikidata Q-ID). */
  proprietaryIds?: ProprietaryId[]
}

const hashCreditItem = 'creditItem'

export function isCreditItem<V>(v: V) {
  return is$typed(v, id, hashCreditItem)
}

export function validateCreditItem<V>(v: V) {
  return validate<CreditItem & V>(v, id, hashCreditItem)
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
  resolutions?: string[]
  aspectRatios?: string[]
  primaryLanguages?: string[]
  dubbedLanguages?: string[]
  subtitleLanguages?: string[]
  accessibilityFeatures?: string[]
}

const hashTechnicalSpecs = 'technicalSpecs'

export function isTechnicalSpecs<V>(v: V) {
  return is$typed(v, id, hashTechnicalSpecs)
}

export function validateTechnicalSpecs<V>(v: V) {
  return validate<TechnicalSpecs & V>(v, id, hashTechnicalSpecs)
}
