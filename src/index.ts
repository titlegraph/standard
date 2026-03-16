// src/index.ts

// --- CATALOG SCHEMA ---
export { Record as Movie } from './generated/types/org/titlegraph/catalog/movie';
export { Record as Episode } from './generated/types/org/titlegraph/catalog/episode';
export { Record as Season } from './generated/types/org/titlegraph/catalog/season';
export { Record as Series } from './generated/types/org/titlegraph/catalog/series';
export * from './generated/types/org/titlegraph/catalog/core';

// --- DELIVERY SCHEMA ---
export { Record as Offer } from './generated/types/org/titlegraph/delivery/offer';
export { Record as Entitlement } from './generated/types/org/titlegraph/delivery/entitlement';
export { Record as Channel } from './generated/types/org/titlegraph/delivery/channel';
export { Record as Bundle } from './generated/types/org/titlegraph/delivery/bundle';
export { Record as Broadcast } from './generated/types/org/titlegraph/delivery/broadcast';
export * from './generated/types/org/titlegraph/delivery/core';