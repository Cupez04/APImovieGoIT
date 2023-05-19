import {
  watched,
  queue,
  setWatchedLocalStorage,
  setQueueLocalStorage,
} from './set-get-local-storage';

export function onAddToWatched(id) {
   if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLocalStorage(watched);
}

export function onAddToQueue(id) {
    if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStorage(queue);
}
