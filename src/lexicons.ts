/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type LexiconDoc,
  Lexicons,
  ValidationError,
  type ValidationResult,
} from '@atproto/lexicon'
import { type $Typed, is$typed, maybe$typed } from './util.js'

export const schemaDict = {
  OrgTitlegraphCatalogCore: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.core',
    defs: {
      metadata: {
        type: 'object',
        description:
          'Foundational metadata shared across all TitleGraph media assets.',
        required: ['title', 'description', 'imagePortrait'],
        properties: {
          title: {
            type: 'string',
            maxLength: 300,
            description: 'Matches schema.org/name. The primary display title.',
          },
          description: {
            type: 'string',
            maxLength: 4000,
            description:
              'Matches schema.org/description. The primary plot summary.',
          },
          synopsis: {
            type: 'string',
            maxLength: 140,
            description: 'Matches schema.org/abstract. A short logline.',
          },
          releaseYear: {
            type: 'integer',
            description: 'The year of initial global release.',
          },
          contentRating: {
            type: 'string',
            description:
              'Matches schema.org/contentRating (e.g., PG-13, TV-MA).',
          },
          genres: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Matches schema.org/genre.',
          },
          eidr: {
            type: 'string',
            description: 'The Entertainment Identifier Registry (EIDR) ID.',
          },
          proprietaryIds: {
            type: 'array',
            description:
              'An array of internal system IDs (e.g., Gracenote, IMDb, Moonstone Hub).',
            items: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#proprietaryId',
            },
          },
          technicalSpecs: {
            type: 'ref',
            ref: 'lex:org.titlegraph.catalog.core#technicalSpecs',
            description:
              'Consolidated technical specifications, linguistic options, and accessibility features available for the media.',
          },
          imagePortrait: {
            type: 'blob',
            accept: ['image/jpeg', 'image/png', 'image/webp'],
            description: 'Primary 2:3 or 3:4 key art.',
          },
          imageLandscape: {
            type: 'blob',
            accept: ['image/jpeg', 'image/png', 'image/webp'],
            description: 'Primary 16:9 hero artwork.',
          },
          imageBackground: {
            type: 'blob',
            accept: ['image/jpeg', 'image/png', 'image/webp'],
            description: 'Textless 16:9 background art.',
          },
          titleTreatment: {
            type: 'blob',
            accept: ['image/png', 'image/webp'],
            description: 'Transparent logo artwork.',
          },
        },
      },
      proprietaryId: {
        type: 'object',
        required: ['system', 'id'],
        properties: {
          system: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
        },
      },
      technicalSpecs: {
        type: 'object',
        properties: {
          resolutions: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              "Standardized resolution formats available (e.g., 'SD', 'HD', '4K', '8K').",
          },
          aspectRatios: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              "Available presentation ratios (e.g., '16:9', '4:3', '2.39:1', '9:16').",
          },
          primaryLanguages: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              "BCP 47 language tags for the original audio dialogue (e.g., 'en-US', 'ja-JP').",
          },
          dubbedLanguages: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              'BCP 47 language tags for available alternate audio dubs.',
          },
          subtitleLanguages: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'BCP 47 language tags for available text subtitles.',
          },
          accessibilityFeatures: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              "Standardized accessibility identifiers (e.g., 'closed-captions', 'descriptive-audio', 'sign-language-interpreter').",
          },
        },
      },
    },
  },
  OrgTitlegraphCatalogEpisode: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.episode',
    defs: {
      main: {
        type: 'record',
        description:
          'A single episode. Semantically maps to schema.org/TVEpisode.',
        key: 'tid',
        record: {
          type: 'object',
          required: [
            'openGraphType',
            'schemaUrl',
            'seriesRef',
            'seasonRef',
            'episodeNumber',
            'coreData',
            'durationSeconds',
          ],
          properties: {
            openGraphType: {
              type: 'string',
              const: 'video.episode',
            },
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/TVEpisode',
            },
            seriesRef: {
              type: 'string',
              format: 'at-uri',
              description: 'The AT-URI of the parent series.',
            },
            seasonRef: {
              type: 'string',
              format: 'at-uri',
              description: 'The AT-URI of the parent season/part.',
            },
            episodeNumber: {
              type: 'integer',
              description: 'Matches schema.org/episodeNumber.',
            },
            coreData: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#metadata',
            },
            durationSeconds: {
              type: 'integer',
              minimum: 1,
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphCatalogMovie: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.movie',
    defs: {
      main: {
        type: 'record',
        description:
          'A standalone cinematic film. Semantically maps to schema.org/Movie.',
        key: 'tid',
        record: {
          type: 'object',
          required: [
            'openGraphType',
            'schemaUrl',
            'coreData',
            'durationSeconds',
          ],
          properties: {
            openGraphType: {
              type: 'string',
              const: 'video.movie',
            },
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/Movie',
            },
            coreData: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#metadata',
            },
            durationSeconds: {
              type: 'integer',
              minimum: 1,
              description: 'Total runtime in seconds.',
            },
            trailerUrl: {
              type: 'string',
              format: 'uri',
              description: 'URL to the HLS m3u8 trailer manifest.',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphCatalogSeason: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.season',
    defs: {
      main: {
        type: 'record',
        description:
          'A single season, part, or volume of a series. Semantically maps to schema.org/TVSeason.',
        key: 'tid',
        record: {
          type: 'object',
          required: [
            'schemaUrl',
            'seriesRef',
            'displayLabel',
            'displayNumber',
            'coreData',
          ],
          properties: {
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/TVSeason',
            },
            seriesRef: {
              type: 'string',
              format: 'at-uri',
              description:
                'The AT-URI of the parent org.titlegraph.catalog.series record.',
            },
            displayLabel: {
              type: 'string',
              maxLength: 50,
              description:
                "The regional or stylistic noun (e.g., 'Season', 'Series', 'Part', 'Book').",
            },
            displayNumber: {
              type: 'string',
              maxLength: 20,
              description:
                "The identifier for this grouping (e.g., '1', 'A', 'VI'). Allows for alphanumeric naming.",
            },
            totalEpisodes: {
              type: 'integer',
              description: 'Matches schema.org/numberOfEpisodes.',
            },
            coreData: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#metadata',
              description: 'Season-specific metadata and artwork.',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphCatalogSeries: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.series',
    defs: {
      main: {
        type: 'record',
        description:
          'An episodic television show. Semantically maps to schema.org/TVSeries.',
        key: 'tid',
        record: {
          type: 'object',
          required: ['openGraphType', 'schemaUrl', 'coreData'],
          properties: {
            openGraphType: {
              type: 'string',
              const: 'video.tv_show',
            },
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/TVSeries',
            },
            coreData: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#metadata',
            },
            totalSeasons: {
              type: 'integer',
              description: 'Matches schema.org/numberOfSeasons.',
            },
            isOngoing: {
              type: 'boolean',
              description:
                'Indicates if the series is still actively producing new episodes.',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryBundle: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.bundle',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description:
          'A commercial grouping (Bouquet) of linear channels and/or VOD catalog assets, packaged together for consumer display and entitlement.',
        record: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            name: {
              type: 'string',
              maxLength: 100,
              description:
                "Consumer-facing display name (e.g., 'The HBO & Cinemax Add-On').",
            },
            description: {
              type: 'string',
              maxLength: 1000,
              description: 'Marketing copy explaining the value of the bundle.',
            },
            imageLogo: {
              type: 'blob',
              accept: ['image/png', 'image/webp'],
              description:
                'The transparent logo or lockup for the bundle itself.',
            },
            channelRefs: {
              type: 'array',
              items: {
                type: 'string',
                format: 'at-uri',
              },
              description:
                'AT-URIs pointing to org.titlegraph.delivery.channel records (e.g., HBO East, HBO West, HBO Comedy).',
            },
            catalogRefs: {
              type: 'array',
              items: {
                type: 'string',
                format: 'at-uri',
              },
              description:
                'AT-URIs pointing to org.titlegraph.catalog.collection, series, or movie records (e.g., the HBO VOD catalog).',
            },
            bundleBaseGeoPolicy: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#geoPolicy',
              description:
                'Optional hard geo-restrictions for the entire bundle (e.g., US Only).',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryChannel: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.channel',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A 24/7 linear streaming network.',
        record: {
          type: 'object',
          required: ['name', 'callSign', 'licenseType', 'streamUrl'],
          properties: {
            name: {
              type: 'string',
              description: "e.g., 'Sports Net Z'",
            },
            callSign: {
              type: 'string',
              description: "e.g., 'SPTZ'",
            },
            licenseType: {
              type: 'string',
              enum: ['FAST', 'PAY-TV', 'HYBRID'],
            },
            streamUrl: {
              type: 'string',
              format: 'uri',
              description: 'The primary HLS/DASH manifest.',
            },
            channelBaseGeoPolicy: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#geoPolicy',
              description: 'Absolute hard restrictions (e.g., US ONLY).',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryCore: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.core',
    defs: {
      geoPolicy: {
        type: 'object',
        description:
          'A complex geographical topology for spotbeams and blackouts. Evaluated granularly (Points > Zips > Counties > Regions > Countries).',
        properties: {
          includes: {
            type: 'ref',
            ref: 'lex:org.titlegraph.delivery.core#geoShape',
            description: 'The areas where access is explicitly granted.',
          },
          excludes: {
            type: 'ref',
            ref: 'lex:org.titlegraph.delivery.core#geoShape',
            description:
              'The areas where access is explicitly denied (blacked out).',
          },
        },
      },
      geoShape: {
        type: 'object',
        properties: {
          countries: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: "ISO 3166-1 alpha-2 (e.g., ['DE', 'CH', 'BR']).",
          },
          regions: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: "ISO 3166-2 states/provinces (e.g., ['US-OH']).",
          },
          counties: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              "FIPS codes or localized county codes (e.g., ['39061'] for Hamilton County).",
          },
          postalCodes: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: "Postal codes (e.g., ['45140', '90210']).",
          },
          circles: {
            type: 'array',
            description: 'Center point and radius (e.g., Dodger Stadium).',
            items: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#geoCircle',
            },
          },
          polygons: {
            type: 'array',
            items: {
              type: 'string',
            },
            description:
              'Array of stringified GeoJSON polygon coordinate arrays (e.g., random shape in Brazil).',
          },
        },
      },
      temporalWindow: {
        type: 'object',
        description: 'Defines the exact duration logic of an entitlement.',
        properties: {
          fixedStart: {
            type: 'string',
            format: 'datetime',
            description: 'Hard start (e.g., start of a sports season).',
          },
          fixedEnd: {
            type: 'string',
            format: 'datetime',
            description: 'Hard end (e.g., end of sports season).',
          },
          relativeValiditySeconds: {
            type: 'integer',
            description:
              'TVOD/Rental: How long the user has to press play after purchase (e.g., 30 days = 2592000).',
          },
          relativeViewingSeconds: {
            type: 'integer',
            description:
              'TVOD/Rental: How long the user has to finish watching once started (e.g., 48 hours = 172800).',
          },
          recurringPeriodSeconds: {
            type: 'integer',
            description: 'SVOD: Rolling subscription period (e.g., 30 days).',
          },
        },
      },
      geoCircle: {
        type: 'object',
        required: ['latitude', 'longitude', 'radiusMeters'],
        properties: {
          latitude: {
            type: 'string',
            description:
              "Stringified decimal degree (e.g., '34.0739'). AT Protocol does not support float primitive types.",
          },
          longitude: {
            type: 'string',
            description: "Stringified decimal degree (e.g., '-118.2400').",
          },
          radiusMeters: {
            type: 'integer',
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryEntitlement: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.entitlement',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description:
          'The specific viewing rights granted to a user or subscriber class.',
        record: {
          type: 'object',
          required: ['name', 'licenseType', 'targetRefs'],
          properties: {
            name: {
              type: 'string',
              description:
                "Display name of the entitlement (e.g., 'Premium Sports Package', 'Hager Rental').",
            },
            licenseType: {
              type: 'string',
              enum: ['SVOD', 'TVOD', 'EST', 'AVOD'],
              description: 'The underlying business model of the right.',
            },
            targetRefs: {
              type: 'array',
              items: {
                type: 'string',
                format: 'at-uri',
              },
              description:
                'The AT-URIs of the catalog assets, collections, or linear channels this entitlement unlocks.',
            },
            timeRules: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#temporalWindow',
            },
            baseGeoPolicy: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#geoPolicy',
              description:
                'The baseline geographic restrictions for this entitlement.',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryOffer: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.offer',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'The commercial price tag for an Entitlement.',
        record: {
          type: 'object',
          required: [
            'entitlementRef',
            'offerGeoEligibility',
            'price',
            'currency',
          ],
          properties: {
            entitlementRef: {
              type: 'string',
              format: 'at-uri',
              description: 'What you are actually buying.',
            },
            offerGeoEligibility: {
              type: 'ref',
              ref: 'lex:org.titlegraph.delivery.core#geoPolicy',
              description: 'Where this specific price tag is valid.',
            },
            price: {
              type: 'integer',
              description:
                'The price in the lowest currency denominator (e.g., cents. So $10.00 is 1000). 0 if free/AVOD.',
            },
            currency: {
              type: 'string',
              maxLength: 3,
              description: "ISO 4217 code (e.g., 'USD', 'EUR').",
            },
            offerValidFrom: {
              type: 'string',
              format: 'datetime',
              description: 'When the item goes on sale.',
            },
            offerValidThrough: {
              type: 'string',
              format: 'datetime',
              description: 'When the sale ends.',
            },
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>
export const schemas = Object.values(schemaDict) satisfies LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)

export function validate<T extends { $type: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType: true,
): ValidationResult<T>
export function validate<T extends { $type?: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: false,
): ValidationResult<T>
export function validate(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: boolean,
): ValidationResult {
  return (requiredType ? is$typed : maybe$typed)(v, id, hash)
    ? lexicons.validate(`${id}#${hash}`, v)
    : {
        success: false,
        error: new ValidationError(
          `Must be an object with "${hash === 'main' ? id : `${id}#${hash}`}" $type property`,
        ),
      }
}

export const ids = {
  OrgTitlegraphCatalogCore: 'org.titlegraph.catalog.core',
  OrgTitlegraphCatalogEpisode: 'org.titlegraph.catalog.episode',
  OrgTitlegraphCatalogMovie: 'org.titlegraph.catalog.movie',
  OrgTitlegraphCatalogSeason: 'org.titlegraph.catalog.season',
  OrgTitlegraphCatalogSeries: 'org.titlegraph.catalog.series',
  OrgTitlegraphDeliveryBundle: 'org.titlegraph.delivery.bundle',
  OrgTitlegraphDeliveryChannel: 'org.titlegraph.delivery.channel',
  OrgTitlegraphDeliveryCore: 'org.titlegraph.delivery.core',
  OrgTitlegraphDeliveryEntitlement: 'org.titlegraph.delivery.entitlement',
  OrgTitlegraphDeliveryOffer: 'org.titlegraph.delivery.offer',
} as const
