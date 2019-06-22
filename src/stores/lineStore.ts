import { observable } from 'mobx';
import { WebhookEvent } from '@line/bot-sdk';
import Firestore from '../gateway/firestore';

declare type IFLineEvent = WebhookEvent & {
  timestamp: Date;
};

class Store {
  @observable public lineEvents: any[] = [];
  @observable public isFetching: boolean = true;
  public unsubscribeLineEventsListener: (() => void) | null = null;

  public async refreshLineEvents(): Promise<void> {
    this.lineEvents = await Firestore.getAllLineEvents();
    return Promise.resolve();
  }

  public addEventListenerLineEvents(): void {
    this.unsubscribeLineEventsListener = Firestore.listeningLineEvents(
      (lineEvents: IFLineEvent[]) => {
        this.lineEvents = lineEvents;
        if (this.isFetching) {
          this.isFetching = false;
        }
      }
    );
  }
}

const singleton = new Store();
export default singleton;
