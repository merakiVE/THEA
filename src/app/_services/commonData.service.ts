import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommonDataService {

    private data = new Subject<any>();
    getData$ = this.data.asObservable();

    setData(data: any){
		this.data.next(data);
    }

}