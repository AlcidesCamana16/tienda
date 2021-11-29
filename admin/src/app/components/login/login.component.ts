import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
declare var jQuery:any;
declare var $:any;
declare var iziToast:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user : any ={}
  constructor(
    private _adminService:AdminService
  ) {
   }
  ngOnInit(): void {
  }
  login(loginForm:any){
    if(loginForm.valid){
      console.log(this.user);

      let data ={
        email:this.user.email,
        password:this.user.password
      }

      this._adminService.login_admin(data).subscribe(
         response=>{
          console.log(response);
        },
        error=>{
          console.log(error);
        }
      );      

    }else{
      iziToast.show({
        title:'¡ERROR!:',
        titleColor:'#ff0000',
        color:'#fff',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
    }
  }

}
