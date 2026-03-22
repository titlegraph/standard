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
        required: ['title', 'productionStatus'],
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
          url: {
            type: 'string',
            format: 'uri',
            description:
              'Matches schema.org/url. The primary web/app destination to view this title.',
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
          productionStatus: {
            type: 'string',
            enum: [
              'pitch',
              'script',
              'development',
              'pre-production',
              'production',
              'post-production',
              'completed',
              'released',
            ],
          },
          seeking: {
            type: 'array',
            items: {
              type: 'string',
              maxLength: 50,
            },
            description: "e.g., ['distribution', 'funding', 'cast']",
          },
          pitchMaterialsUrl: {
            type: 'string',
            format: 'uri',
            description: 'Secure link to a deck, script, or screener.',
          },
          credits: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#creditItem',
            },
          },
        },
      },
      creditItem: {
        type: 'object',
        required: ['role', 'name'],
        properties: {
          role: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          did: {
            type: 'string',
            format: 'did',
            description: 'Links the credit to an AT Proto user.',
          },
          proprietaryIds: {
            type: 'array',
            description:
              'External registry IDs for this person (e.g., IMDb nm ID).',
            items: {
              type: 'ref',
              ref: 'lex:org.titlegraph.catalog.core#proprietaryId',
            },
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
  OrgTitlegraphCatalogCredit: {
    lexicon: 1,
    id: 'org.titlegraph.catalog.credit',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description:
          "A decentralized, bottom-up claim of involvement in a media asset. This lives on the contributor's PDS.",
        record: {
          type: 'object',
          required: ['assetRef', 'role', 'name'],
          properties: {
            assetRef: {
              type: 'string',
              format: 'at-uri',
              description:
                'The AT-URI of the org.titlegraph.catalog.movie or series.',
            },
            subject: {
              type: 'string',
              format: 'did',
              description:
                'The AT Protocol DID of the person or entity being credited.',
            },
            role: {
              type: 'string',
              description:
                "The character name, department or job title (e.g., 'Director', 'Stunt Double', '\"Sophia\"').",
            },
            name: {
              type: 'string',
              description: 'The plain text name the user was credited under.',
            },
            order: {
              type: 'integer',
              description: 'Optional self-reported billing order.',
            },
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
            'metadata',
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
            metadata: {
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
          required: ['openGraphType', 'schemaUrl', 'metadata'],
          properties: {
            openGraphType: {
              type: 'string',
              const: 'video.movie',
            },
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/Movie',
            },
            metadata: {
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
            'metadata',
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
            metadata: {
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
          required: ['openGraphType', 'schemaUrl', 'metadata'],
          properties: {
            openGraphType: {
              type: 'string',
              const: 'video.tv_show',
            },
            schemaUrl: {
              type: 'string',
              const: 'https://schema.org/TVSeries',
            },
            metadata: {
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
  OrgTitlegraphDeliveryBroadcast: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.broadcast',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A scheduled airing of content on a linear channel.',
        record: {
          type: 'object',
          required: ['channelRef', 'startTime', 'endTime'],
          properties: {
            channelRef: {
              type: 'string',
              format: 'at-uri',
              description: 'The station airing this broadcast.',
            },
            startTime: {
              type: 'string',
              format: 'datetime',
            },
            endTime: {
              type: 'string',
              format: 'datetime',
            },
            assetRef: {
              type: 'string',
              format: 'at-uri',
              description:
                'Optional. The underlying catalog asset (Movie, Episode) being aired.',
            },
            title: {
              type: 'string',
              maxLength: 300,
              description:
                'The display title (used if assetRef is missing or for live sports).',
            },
            isLive: {
              type: 'boolean',
              description: 'True for a live event (e.g., a football game).',
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
            allowedTerritories: {
              type: 'array',
              items: {
                type: 'string',
                maxLength: 30,
              },
              description:
                'Geographic regions. If omitted/empty, implies worldwide availability.',
            },
            excludedTerritories: {
              type: 'array',
              items: {
                type: 'string',
                maxLength: 30,
              },
              description:
                'Geographic regions where the channel is explicitly blocked.',
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
        description:
          'Represents the availability of a specific asset on a specific platform.',
        record: {
          type: 'object',
          required: ['assetRef', 'platformRef', 'licenseType'],
          properties: {
            assetRef: {
              type: 'string',
              format: 'at-uri',
              description: 'Pointer to the Movie or Series.',
            },
            platformRef: {
              type: 'string',
              description:
                "e.g., 'did:web:circuitcinema.com' or a specific App AT-URI.",
            },
            licenseType: {
              type: 'string',
              enum: ['SVOD', 'AVOD', 'TVOD', 'EST', 'FAST'],
            },
            watchUrl: {
              type: 'string',
              format: 'uri',
              description: 'Deep link to stream the asset.',
            },
            allowedTerritories: {
              type: 'array',
              items: {
                type: 'string',
                maxLength: 30,
              },
              description:
                "Geographic regions. Supports ISO 3166-1 alpha-2 ('US'), ISO 3166-2 ('US-CA'), or prefixed hyper-local codes ('zip:US:90210', 'dma:501'). If omitted/empty, implies worldwide availability.",
            },
            excludedTerritories: {
              type: 'array',
              items: {
                type: 'string',
                maxLength: 30,
              },
              description:
                'Geographic regions where the offer is explicitly blocked, supporting the same formats as allowedTerritories.',
            },
            validFrom: {
              type: 'string',
              format: 'datetime',
              description:
                'The start of the licensing window. If omitted, it is available immediately.',
            },
            validThrough: {
              type: 'string',
              format: 'datetime',
              description:
                'The end of the licensing window. If omitted, the offer is open-ended.',
            },
            price: {
              type: 'integer',
              description: 'Optional: Cost in cents (only needed if TVOD/EST).',
            },
            currency: {
              type: 'string',
              description: "Optional: ISO 4217 code (e.g., 'USD').",
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryScreening: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.screening',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description:
          'A scheduled physical exhibition of a film. Semantically maps to schema.org/ScreeningEvent.',
        record: {
          type: 'object',
          required: ['venueRef', 'startTime'],
          properties: {
            venueRef: {
              type: 'string',
              format: 'at-uri',
              description: 'Pointer to the org.titlegraph.delivery.venue.',
            },
            screenName: {
              type: 'string',
              description:
                "e.g., 'Auditorium 4', 'IMAX', or 'Grand Théâtre Lumière'.",
            },
            startTime: {
              type: 'string',
              format: 'datetime',
            },
            endTime: {
              type: 'string',
              format: 'datetime',
              description: 'Optional for physical screenings.',
            },
            assetRef: {
              type: 'string',
              format: 'at-uri',
              description:
                'Pointer to the org.titlegraph.catalog.movie being shown.',
            },
            title: {
              type: 'string',
              description:
                'Fallback title if assetRef is missing (e.g., for unlinked indie festival shorts).',
            },
            ticketUrl: {
              type: 'string',
              format: 'uri',
              description:
                'Direct link to point-of-sale (Fandango, Atom, or Festival box office).',
            },
            isPremiere: {
              type: 'boolean',
              description: 'Flag for festival or world premieres.',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphDeliveryVenue: {
    lexicon: 1,
    id: 'org.titlegraph.delivery.venue',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description:
          'A physical location where content is exhibited (e.g., a cinema or festival venue).',
        record: {
          type: 'object',
          required: ['name', 'latitude', 'longitude'],
          properties: {
            name: {
              type: 'string',
              description: "e.g., 'Palais des Festivals' or 'AMC Empire 25'",
            },
            description: {
              type: 'string',
              maxLength: 1000,
            },
            address: {
              type: 'string',
              description: 'The human-readable street address.',
            },
            latitude: {
              type: 'string',
              description: 'Stringified decimal.',
            },
            longitude: {
              type: 'string',
            },
            websiteUrl: {
              type: 'string',
              format: 'uri',
            },
          },
        },
      },
    },
  },
  OrgTitlegraphSocialReview: {
    lexicon: 1,
    id: 'org.titlegraph.social.review',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A public review and rating for a media asset.',
        record: {
          type: 'object',
          required: ['subject', 'createdAt'],
          properties: {
            subject: {
              type: 'string',
              format: 'at-uri',
              description:
                'Pointer to the specific movie, episode, or series being reviewed.',
            },
            rating: {
              type: 'integer',
              minimum: 1,
              maximum: 10,
              description:
                'A 1 to 10 scale (allows for 5 stars with half-stars).',
            },
            text: {
              type: 'string',
              maxLength: 10000,
              description: 'The written body of the review.',
            },
            containsSpoilers: {
              type: 'boolean',
              description: 'Flag to allow the UI to blur the text.',
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
  OrgTitlegraphCatalogCredit: 'org.titlegraph.catalog.credit',
  OrgTitlegraphCatalogEpisode: 'org.titlegraph.catalog.episode',
  OrgTitlegraphCatalogMovie: 'org.titlegraph.catalog.movie',
  OrgTitlegraphCatalogSeason: 'org.titlegraph.catalog.season',
  OrgTitlegraphCatalogSeries: 'org.titlegraph.catalog.series',
  OrgTitlegraphDeliveryBroadcast: 'org.titlegraph.delivery.broadcast',
  OrgTitlegraphDeliveryChannel: 'org.titlegraph.delivery.channel',
  OrgTitlegraphDeliveryOffer: 'org.titlegraph.delivery.offer',
  OrgTitlegraphDeliveryScreening: 'org.titlegraph.delivery.screening',
  OrgTitlegraphDeliveryVenue: 'org.titlegraph.delivery.venue',
  OrgTitlegraphSocialReview: 'org.titlegraph.social.review',
} as const
