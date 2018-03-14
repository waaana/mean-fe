export class IEventRequest {
    eventData: IEventSchema;
}

export class IEventSchema {
    _id: string;
    group: string;
    description: string;
}

export class IEventResponse {
    list: Array<IEventSchema>;
    length: number;
    queryIndex: string;
}
