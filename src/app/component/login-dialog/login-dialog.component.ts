import { Component, OnInit,Inject } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEmailErrorMessage() {
    
    if (this.email.hasError('required')) {
      return 'email required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'password required';
    }

    return  '';
  }

  isFormValid(){
     !this.email.hasError('required') && !this.email.hasError('email') && this.password.hasError('required')
  }

}
