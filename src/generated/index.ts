/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type Auth,
  type Options as XrpcOptions,
  Server as XrpcServer,
  type StreamConfigOrHandler,
  type MethodConfigOrHandler,
  createServer as createXrpcServer,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons.js'

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  org: OrgNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.org = new OrgNS(this)
  }
}

export class OrgNS {
  _server: Server
  titlegraph: OrgTitlegraphNS

  constructor(server: Server) {
    this._server = server
    this.titlegraph = new OrgTitlegraphNS(server)
  }
}

export class OrgTitlegraphNS {
  _server: Server
  catalog: OrgTitlegraphCatalogNS
  delivery: OrgTitlegraphDeliveryNS
  social: OrgTitlegraphSocialNS

  constructor(server: Server) {
    this._server = server
    this.catalog = new OrgTitlegraphCatalogNS(server)
    this.delivery = new OrgTitlegraphDeliveryNS(server)
    this.social = new OrgTitlegraphSocialNS(server)
  }
}

export class OrgTitlegraphCatalogNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class OrgTitlegraphDeliveryNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class OrgTitlegraphSocialNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}
