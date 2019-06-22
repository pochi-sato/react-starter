import { WebhookEvent } from '@line/bot-sdk';
export declare type IFLineEvent = WebhookEvent & {
  timestamp: Date;
};
