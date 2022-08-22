import { Component, OnInit } from '@angular/core';
import { Employees } from './Employee';
import { GridpageService } from './gridpage.service';
import { FormBuilder , FormGroup ,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gridpage',
  templateUrl: './gridpage.component.html',
  styleUrls: ['./gridpage.component.sass']
})


export class GridpageComponent implements OnInit {
  id!: number;
  email!: string;
  number!: string;
  birthday: Date | undefined;
  position!: string;
  addUserForm!: FormGroup;
  msg : string = 'No Records Found';
  item: any;
  filteritem : any;
  editid : any;

  isFormSubmitted = false;
  Pages: any;
  candidatename : any;
  title = '';

  
  page = 1 ;
  count = 0;
  pageSize  = 5 ;
  pageSizes = [5, 10, 15];

  employees: Employees[] = [];
  name: any ;
  showPopup = false;
  editPopup = false;
  deletePopup = false;
  datesort!: number;
  // descendingBirthday = false;
  ascendingBirthday = false;
  constructor(public gs: GridpageService, private formBuilder: FormBuilder , private http:HttpClientModule) { }

  getData(){
    
     this.gs.getEmployees(this.pageSize,this.page);
     this.gs.getPostsUpdatedListner()
    .subscribe((employees:Employees[])=>{
      this.employees=employees

    })
  }
  
  ngOnInit(): void {
    if (this.employees.length === 0) {
      this.getData();
    }
    const VALID_NAME = "[A-Za-z]+";
    const PATTERN_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
    const VALID_NUMBER = "[0-9]{10}";
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(VALID_NAME), Validators.minLength(3), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.pattern(PATTERN_EMAIL)]],
      number: ['', [Validators.required, Validators.pattern(VALID_NUMBER)]],
      birthday: [null , [Validators.required]],
      position: ['', [Validators.required]]

    });

  }
  
  PageChange(event : any): void {
    // console.log("%%%%",this.pageSize);
    // console.log("$$$$",event);
    // this.page = event.pageIndex + 1 ; 
    this.gs.getEmployees(this.pageSize,event); 
    // console.log("################",event)
    this.page = event;
    console.log(this.page);

  }

  PageSizeChange(event : any): void {
    this.pageSize = event.target.value;
    // this.page = event.pageIndex + 1 ;
    this.page = 1;
    this.gs.getEmployees(this.pageSize,this.page);
   
  
  }

  search()
  {
    if (this.name == "")
    {
      this.getData();

    }
    
      this.gs.searchPost(this.name).subscribe(result =>{
       
        console.log("HELoo");
        console.log(result);
      });
    }
   
    



  key: string = 'name';
  reverse : boolean = false;
  sortName(key: string)
  {
    this.key = key;
    this.reverse = !this.reverse;
  }

  sortEmail(key: string) {
    if(key==this.email)
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortContact(key: string) {
    if(key==this.number)
    this.key = key;
    this.reverse = !this.reverse;
  }


  sortPosition(key: string) {
    if(key==this.position )
    this.key = key;
    this.reverse = !this.reverse;
  }

   sortDsceBirthday() 
   {
    this.ascendingBirthday = false;
    this.employees.sort((a,b)=> {
      return new Date(b.birthday).getTime() - new Date(a.birthday).getTime() 
    }); 

   }
    sortAscenBirthday()
    {
      this.ascendingBirthday=true;
      this.employees.sort((b,a)=> {
        return new Date(b.birthday).getTime() - new Date(a.birthday).getTime()
      }); 
      
    }
   



  openPopup() {
    this.showPopup = true;
    if (this.showPopup)
    {
      const VALID_NAME = "[A-Za-z]+";
      const PATTERN_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
      const VALID_NUMBER = "[0-9]{10}";
      this.addUserForm = this.formBuilder.group({
        name : ['', [Validators.required, Validators.pattern(VALID_NAME), Validators.minLength(3), Validators.maxLength(12)]],
        email : ['', [Validators.required, Validators.pattern(PATTERN_EMAIL)]],
        number : ['', [Validators.required, Validators.pattern(VALID_NUMBER)]],
        birthday :  [ null ,  [Validators.required]],
        position : ['', [Validators.required]]

      });

      }
  }

  closePopup() {
    this.showPopup = false;
    this.editPopup = false;
    this.deletePopup = false;

  }
  submitCandidate() {
    console.log(this.addUserForm.value);
    // this.gs.postEmployees(this.addUserForm.value).subscribe((response) => {
    //   console.log('success', response);
    // }),
    //   (error) =>
    //   {
    //     console.log('error',error)
    //   }
    // this.http.Post<{message:String}>('http://localhost:5000/api/posts',this.employees);
  
    this.gs.addPost(this.addUserForm.value);
    this.employees.push();
    return this.closePopup();



  }


  openEditPopup(event: any)
  {
    this.editPopup = true;
     // console.log(new Date(event.birthday));
    this.addUserForm.patchValue({
      id : event.id ,
      name: event.name  ,
      email: event.email ,
      number: event.number,
      birthday:this.formateDate(new Date(event.birthday)),
      position: event.position

    })
    this.editid = event.id;
  console.log(this.editid);
  }
  private  formateDate(date: any){
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  

  


  editCandidate() {
    console.log(this.addUserForm.value);
    this.gs.editPost(this.addUserForm.value,this.editid);
    return this.closePopup();
    // this.employees.put(this.addUserForm.value);
}


  openDeletePopup(event: any) {
   
    this.candidatename = event.name;
    this.deletePopup = true;
    this.item = event.id;
    
   
  }
  deleteCandidate(){
    this.gs.deletePost(this.item);
    return this.closePopup();
  }
  

  // deleteCandidate() {

  //     this.gs.deletePost();
  //     return this.closePopup();
 //   this.employees.filter((element, index) => {
    //   if (element.id === this.item) {
    //     this.filteritem = index;
    //     this.page  = 1 ;
    //   }
  // })
    // this.employees.splice(this.filteritem, 1);
    // console.log(this.filteritem);
    // 
 }


 // this.employees = this.employees.filter(res =>{
        //   return res.result.toLocaleLowerCase().match(this.result.toLocaleLowerCase(this.page=1));
        // })







// *#* Important  *#* //
// mongo "mongodb+srv://cluster0.rvl93.mongodb.net/myFirstDatabase" --username Mansi
//  https://cloud.mongodb.com/v2/60dac1101d448d487fe68d8b#clusters
// F63XeZjPebeeCuEl
// 103.251.219.242

// X%994v8eWHEKWp.

