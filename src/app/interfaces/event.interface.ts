export class IEventRequest {
    eventData: IEventSchema;
}

export class IEventSchema {
    group: string;
    description: string;
}

export class IEventResponse {
    list: Array<IEventSchema>;
    length: number;
    queryIndex: string;
}
