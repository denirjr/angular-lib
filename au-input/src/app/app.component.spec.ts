import { InputRefDirective } from './lib/common/input-ref.directive';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

let component: AppComponent,
fixture: ComponentFixture<AppComponent>,
el: DebugElement,
emailField: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, AuFaInputComponent, InputRefDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
         fixture = TestBed.createComponent(AppComponent);
         component = fixture.debugElement.componentInstance;
         el = fixture.debugElement;
         emailField = el.query(By.css('#email-field'));

         fixture.detectChanges();

    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should create  a font awessome email input', async () => {
       expect(emailField).toBeTruthy();
    })
    it('should include the right email icon inside the email input', async () => {

        console.log(emailField.nativeElement.outerHTML);

       expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    })

    it('should include the right email icon inside the email field', async () => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    })

});
