// src/index.ts

// --- CATALOG SCHEMA ---
export { Record as Movie } from './generated/types/org/titlegraph/catalog/movie';
export { Record as Episode } from './generated/types/org/titlegraph/catalog/episode';
export { Record as Season } from './generated/types/org/titlegraph/catalog/season';
export { Record as Series } from './generated/types/org/titlegraph/catalog/series';
export * from './generated/types/org/titlegraph/catalog/core';

// --- DELIVERY SCHEMA ---
export { Record as Offer } from './generated/types/org/titlegraph/delivery/offer';
export { Record as Channel } from './generated/types/org/titlegraph/delivery/channel';
export { Record as Broadcast } from './generated/types/org/titlegraph/delivery/broadcast';
export { Record as Screening } from './generated/types/org/titlegraph/delivery/screening';
export { Record as Venue } from './generated/types/org/titlegraph/delivery/venue';

// --- SOCIAL SCHEMA ---
export { Record as Review } from './generated/types/org/titlegraph/social/review';
export { Record as Representation } from './generated/types/org/titlegraph/social/representation';