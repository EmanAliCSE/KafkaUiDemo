export interface OutboxMessage {
    id: string;
    key: string;
    topic: string;
    status: string;
    type: string;
    content: string;
    createdAt: string;
    processedAt?: string;
    error?: string;
    retryCount: number;
    lastAttemptAt?: string;
    headersJson?: string;
  }
  