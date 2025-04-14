export interface Log {
    id: number;
    message: string;
    messageTemplate: string;
    timeStamp: Date;
    level: string;
    actionId?: string;       
    requestId?: string;
    application?: string;
    exception?: string;
    properties: string;
  }
  