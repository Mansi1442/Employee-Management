// import { inject, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { GridpageService } from './gridpage.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
// import { GridpageComponent } from './gridpage.component';
// import { findIndex } from 'rxjs/operators';



// describe('GridpageService', () => {
//   let service: GridpageService;
//  let component : GridpageComponent;
//   beforeEach(() => {
//     TestBed.configureTestingModule({ imports: [HttpClientTestingModule,HttpClientModule], 
//       providers: [GridpageService]});
//     service = TestBed.inject(GridpageService);
//   });
  

//   it('should be created', () => {
//     expect(service).toBe(service);
//   });

//   it('should have get employees',inject([GridpageService],(service:GridpageService)=>{
//     expect(service.getEmployees()).toBe(service.getEmployees());
//   }));

//   it('should have add employee in  employees',inject([GridpageService],(service:GridpageService)=>{
//     expect(service.addPost(FormData)).toBe(service.addPost(FormData));
//   }));

//   it('should have edit employee in  employees',inject([GridpageService],(service:GridpageService)=>{
//     expect(service.editPost(FormData,FormData.name)).toBe(service.editPost(FormData,FormData.name));
//   }));

//   it('should have after edit get  employee in  employees',inject([GridpageService],(service:GridpageService)=>{
//     expect(service.getPost(findIndex)).toBe(service.getPost(findIndex));
//   }));

//   it('should have after edit get  employee in  employees',inject([GridpageService],(service:GridpageService)=>{
//     expect(service.deletePost(FormData.name)).toBe(service.deletePost(FormData.name));
//   }));

// });
