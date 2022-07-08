import { Request } from "express";
import { MockRequest } from "../../interfaces/mock-request.interface";

export function makeMockRequest({ params }: MockRequest) {
  const request = {
    params: params || {},
  } as unknown;

  return request as Request;
}
