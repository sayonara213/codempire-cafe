import { Injectable } from '@nestjs/common';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class MessageStream {
  private subject = new ReplaySubject<any>();

  send(message: any) {
    this.subject.next(message);
  }

  getStream(): Observable<any> {
    return this.subject.asObservable();
  }
}
