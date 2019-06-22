import firebaseApp from '../commons/firebaseInit';
import CONST from '../commons/constants';
import { IFLineEvent } from '../@types/index.d';

const defaultDb = firebaseApp.default.db;
const COLLECTION = CONST.COLLECTION;

const getAllLineEvents = (): Promise<IFLineEvent[]> => {
  return defaultDb
    .collection(COLLECTION.LINE_EVENTS)
    .where('timestamp', '>', '')
    .get()
    .then(docs => {
      const lineEvents: IFLineEvent[] = [];
      docs.forEach(doc => {
        const lineEvent = Object.assign(doc.data(), {
          timestamp: doc.data().timestamp.toDate()
        }) as IFLineEvent;
        lineEvents.push(lineEvent);
      });
      return lineEvents;
    });
};

const listeningLineEvents = (
  callback: (lineEvents: IFLineEvent[]) => void
): (() => void) => {
  return defaultDb.collection(COLLECTION.LINE_EVENTS).onSnapshot(docs => {
    const lineEvents: IFLineEvent[] = [];
    docs.forEach(doc => {
      const lineEvent = Object.assign(doc.data(), {
        timestamp: doc.data().timestamp.toDate()
      }) as IFLineEvent;
      lineEvents.push(lineEvent);
    });
    callback(lineEvents);
  });
};

export default { getAllLineEvents, listeningLineEvents };
