# TitleGraph Open Standard

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![AT Protocol](https://img.shields.io/badge/AT_Protocol-Lexicon-FF2E93.svg)](https://atproto.com)

**The federated catalog and delivery standard for streaming television and the cinematic arts.**

TitleGraph is an open, decentralized data schema built on the AT Protocol. It provides a universal vocabulary for streaming networks, MVPDs, and independent platforms to syndicate VOD catalogs, live broadcast events, and commercial availability windows to the federated web.

## The Architecture: Separating Art from Commerce
Legacy entertainment metadata binds the creative work to its commercial distribution, creating fragmented, proprietary silos. TitleGraph introduces a strict architectural decoupling:

### 1. The Catalog Namespace (`org.titlegraph.catalog.*`)
Mapped strictly to W3C `schema.org/CreativeWork` semantics, this namespace defines the canonical record of the media. It defines what the art is, completely independent of how it is sold.
* `core` (Shared traits: Title, Posters, Synopsis)
* `movie` (Cinematic films)
* `series` (Episodic television)
* `season` (Seasons, Parts, and Volumes)
* `episode` (Individual episodes)
* `collection` (Cinematic universes and logical franchises)

### 2. The Delivery Namespace (`org.titlegraph.delivery.*`)
Mapped to `schema.org/Offer` and `schema.org/BroadcastEvent`, this namespace defines the commercial topology. 
* `entitlement` (Viewing rights and licensing models: SVOD, AVOD, TVOD, EST)
* `offer` (The commercial price tag and availability window)
* `bundle` (Commercial packaging of channels and VODs)
* `channel` (24/7 linear streaming networks)
* `broadcast` (Linear EPG slots with conditional spotbeam and blackout topologies)

## Usage
These JSON files are strict AT Protocol Lexicons. You can generate TypeScript interfaces directly from this repository using the `@atproto/lex-cli` tool.

For full documentation, schema definitions, and implementation guides, visit [TitleGraph.org](https://titlegraph.org).

## License
Copyright 2026 The TitleGraph Project.

Licensed under the Apache License, Version 2.0. See the [LICENSE](./LICENSE) file for details.