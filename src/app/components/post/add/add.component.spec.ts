import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './add.component';

describe('AddPostComponent', () => {
    let component: AddPostComponent;
    let fixture: ComponentFixture<AddPostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddPostComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
