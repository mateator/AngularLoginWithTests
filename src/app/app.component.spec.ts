import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('form validation --- invalid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    //triggeo ngOnInit
    fixture.detectChanges();

    component.loginForm.controls['email'].setValue("a@.com");
    component.loginForm.controls['password'].setValue("12345");

    expect(component.loginForm.valid).toBeFalse();

  });

  it('form validation --- valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    //triggeo ngOnInit
    fixture.detectChanges();

    component.loginForm.controls['email'].setValue("a@a.com");
    component.loginForm.controls['password'].setValue("12345");

    expect(component.loginForm.valid).toBeTruthy();

  });

  it(`form should be initialized as empty`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.loginForm.value).toEqual({});
  });

  it(`toggle should be not checked at start`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    //triggeo ngOnInit
    fixture.detectChanges();

    const app = fixture.componentInstance;
    expect(app.loginForm.controls['toggle'].value).toBeFalse();
  });
});
