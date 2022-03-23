import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    //ngOnInit gets triggered
    fixture.detectChanges();
  });

  it('app should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form validation --- invalid', () => {
    component.loginForm.controls['email'].setValue("a@.com");
    component.loginForm.controls['password'].setValue("12345");

    expect(component.loginForm.valid).toBeFalse();

  });

  it('form validation --- valid', () => {
    component.loginForm.controls['email'].setValue("a@a.com");
    component.loginForm.controls['password'].setValue("12345");

    expect(component.loginForm.valid).toBeTruthy();

  });

  it('login function should return FORM NOT OK', () => {
    //instancia de spy para poder testear console.log, si se emplease más veces iría en el beforeEach inicial
    console.log = jasmine.createSpy("log");

    //generamos el form mediante las funcion setupform
    const loginForm: FormGroup  = component.setUpForm({email:"",password:""});

    //intentamos logearnos con datos invalidos
    component.login(loginForm);

    expect(window.console.log).toHaveBeenCalledWith("FORM NOT OK");
  });

  it(`form should be initialized as empty`, () => {
    expect(component.loginForm.value).toEqual({email:"", password:"", toggle: false});
  });

  it(`toggle should be not checked at start`, () => {
    expect(component.loginForm.controls['toggle'].value).toBeFalse();
  });
});
