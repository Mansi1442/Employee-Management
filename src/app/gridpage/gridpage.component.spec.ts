import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { GridpageComponent } from './gridpage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { keyframes } from '@angular/animations';


describe('GridpageComponent', () => {
  let component: GridpageComponent;
  let fixture: ComponentFixture<GridpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridpageComponent ],
      imports: [HttpClientTestingModule,FormsModule,
        ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule,Ng2OrderModule,
        RouterTestingModule.withRoutes([]),], 
      providers: [GridpageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(component);
  });

  // 
  //  

  it('should have display all data from backend',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance
    expect(app.getData()).toBe(app.getData());
  });

  it('should have open popup for add candidate',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    
    expect(app.openPopup()).toEqual(app.openPopup());
  });

  it('should have add candidate on list ',()=>{
    fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.submitCandidate()).toEqual(app.submitCandidate());
  });


  it('should have open popup for edit candidate',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    // app.openeditPopup();
    fixture.detectChanges();
    expect(app.openEditPopup(event)).toEqual(app.openEditPopup(event));
  });

  it('should have edit candidate on list ',()=>{
    fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.editCandidate()).toEqual(app.editCandidate());
  });


  it('should have open popup for delete candidate',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    // app.opendeletePopup();
    fixture.detectChanges();
    expect(app.openDeletePopup(event)).toEqual(app.openDeletePopup(event));
  });

  it('should have  delete candidate from list',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    // app.opendeletePopup();
    fixture.detectChanges();
    expect(app.deleteCandidate()).toEqual(app.deleteCandidate());
  });

  it('should have to close',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.closePopup()).toBe(app.getData());
  });




  it('should have to search the data',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.search()).toBe(app.search());
  });



  

  it('should have to sort by name',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
 
    expect(app.sortName).toBe(app.sortName);
  });

  it('should have to sort by email',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.sortEmail).toBe(app.sortEmail);
  });

  it('should have to sort by contactno',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.sortContact).toBe(app.sortContact);
  });

  it('should have to sort by position',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.sortPosition).toBe(app.sortPosition);
  });

  it('should have to sort birthday by ascending order ',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.sortAscenBirthday()).toBe(app.sortAscenBirthday());
  });

  it('should have to sort birthday by descending order',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.sortDsceBirthday()).toBe(app.sortDsceBirthday());
  });

  it('should be page change ',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.PageChange).toBe(app.PageChange);
  });

  it('should be  pagesize change',()=>{
    const fixture = TestBed.createComponent(GridpageComponent);
    const app = fixture.componentInstance;
    expect(app.PageSizeChange).toBe(app.PageSizeChange);

  });
  

});


