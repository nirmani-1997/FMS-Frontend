import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService:UserService,
    private snack:MatSnackBar
  ) { }


  public user ={
    firstName: '',
    lastName: '',
    username: '',
    address: '',
    email: '',
    contactNo: '',
    joinedDate: '',
    password: '',
    nic: '',
    dateOfBirth: '',


};

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);

    if (this.user.username == '' || this.user.username == null){
        // alert('User Name is required!!');
        this.snack.open("Username is required!!",'',{
          duration:3000,

        });
        return;
      }


    //
    // if (this.user.firstName == '' || this.user.firstName == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Firstname is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.lastName == '' || this.user.lastName == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("lastname is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.userName == '' || this.user.userName == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Username is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.address == '' || this.user.address == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Address is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.email == '' || this.user.email == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Email address is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.contactNo == '' || this.user.contactNo == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Contact number is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.joinedDate == '' || this.user.joinedDate == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Joined date is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.nic == '' || this.user.nic == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("NIC number is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    //
    // if (this.user.dateOfBirth == '' || this.user.dateOfBirth == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Date of Birth is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }
    //
    // if (this.user.password == '' || this.user.password == null){
    //   // alert('User Name is required!!');
    //   this.snack.open("Password is required!!",'',{
    //     duration:3000,
    //
    //   });
    //   return;
    // }





    //validate


    //addUser: userservice

    this.userService.addUser(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        // alert('success');
        Swal.fire('Successfully done!!','User is registered!!','success')
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open('Something went wrong !!','',{
          duration:3000,
        });
      }
    );

  }
}
