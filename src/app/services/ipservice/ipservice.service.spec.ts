import { TestBed } from '@angular/core/testing';
import { IpServiceService } from './ipservice.service';

describe('IpServiceService', () => {
    let service: IpServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IpServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
