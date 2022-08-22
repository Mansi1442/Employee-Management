import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employees } from './Employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GridpageService {
  employees: any;
  private postsUpdated = new Subject<Employees[]>();
  constructor(private http: HttpClient) { }
 

  getEmployees(postsPerPage : number , currentPage : number ) {
    
    const queryParams = `?pageSize=${postsPerPage}&page=${currentPage}`; 
    console.log("###",postsPerPage);
    console.log("@@@",currentPage);  
     this.http.get<{message :String,posts:any}>('http://localhost:5500/api/posts' + queryParams)
     .pipe(map((postData)=>{
      return  postData.posts.map((post: { name: any; email: any; number: any; birthday: any; position: any; _id: any; })=>{
        return {
          name:post.name,
          email:post.email,
          number:post.number,
          birthday:post.birthday,
          position:post.position,
          id:post._id
  
        };
      })
      // ,maxPosts : number
      // maxPosts : postData.maxPosts
    
   }))
    .subscribe(transformedPosts => {
        this.employees = transformedPosts;
      this.postsUpdated.next([...this.employees]);
          });

  }

  getPostsUpdatedListner(){
    return this.postsUpdated.asObservable();
  }

    addPost(data: number){
        this.http.post<{message:String}>("http://localhost:5500/api/posts",data)
       .subscribe((response)=>{
          console.log(response.message);
         this.getEmployees(data,data);
        
       });
    }

    editPost(data: number,editid: number){
      console.log(data);
      console.log(editid);
    
      this.http.put("http://localhost:5500/api/posts/"  +  editid , data)
      .subscribe((response)=>{
        
        const updatedPosts = [...this.employees];
        const oldPostIndex = updatedPosts.findIndex(p=>p.editid !== this.employees.id);
        updatedPosts[oldPostIndex]=this.employees;
        this.employees =updatedPosts;
        this.postsUpdated.next([...this.employees]);
        this.getPost(editid)
        this.getEmployees(data ,data);
       });

    }
    getPost(id : number){
       this.http.get<{
        _id:string,
        name:string,
        email:string,
        number : string,
        birthday:Date,
        position:string}>
      ("http://localhost:5500/api/posts/"+ id  )
      console.log("Updated");
     this.getEmployees(id,id);
    }

    deletePost(postId: string){
      
      this.http.delete("http://localhost:5500/api/posts/" + postId)
      .subscribe((res)=>{
        const updatedPosts = this.employees.filter((post: { id: string; }) => post.id !==postId );
        console.log(postId);
        this.employees=updatedPosts;
        this.postsUpdated.next([...this.employees]);
            console.log("Deleted!");
            // this.getEmployees(postId,postId);
          });;
    }


    searchPost(res: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; }){
      console.log(res);
      return  this.http.get("http://localhost:5500/api/posts" , res )
      
    }
  

}



