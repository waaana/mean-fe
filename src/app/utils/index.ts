import { IEventSchema, IEventResponse } from '../interfaces';
import { Response } from '@angular/http';

export function parseResponse(response: IEventSchema): IEventSchema {
    return response;
}

export function parseResponsePaginated(response: IEventResponse): IEventResponse {
    return response;
}