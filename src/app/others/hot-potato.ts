import { Queue } from '../data-structures/queue';
import { IHotPotatoModel } from '../models/hot-potato-model';

export function hotPotato<T>(elementsList: T[], num: number): IHotPotatoModel<T> {
  const queue: Queue<T> = new Queue<T>();

  const elimitatedList: T[] = [];

  for (let i: number = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i: number = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }

    elimitatedList.push(queue.dequeue()!);
  }

  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()!
  };
}
