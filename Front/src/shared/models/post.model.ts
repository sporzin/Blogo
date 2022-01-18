import { IWriter } from './writer.model';

export interface IPost {
  title: string;
  body: string;
  writer: IWriter;
  id: number;
}
