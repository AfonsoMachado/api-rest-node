import { Params } from "express-serve-static-core";

export interface MockRequest {
  params?: Params;
}
