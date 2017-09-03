import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class DataService {
    private isLoading = new Subject<boolean>();
    

    isLoding() {
        return this.isLoading;
    }
    
    setLoading(data: boolean) {
        this.isLoading.next(data);
    }
    



    
}