import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { ComplaintserviceService } from '../../service/complaintservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grievance',
  imports: [SharedModule],
  templateUrl: './grievance.component.html',
  styleUrl: './grievance.component.scss'
})
export class GrievanceComponent {
complaintForm: FormGroup; 
  constructor(private fb: FormBuilder,private snackbar:MatSnackBar, private complaintService: ComplaintserviceService) { 
    this.complaintForm = this.fb.group({ 
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      address: ['', Validators.required],
       phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        // assuming phone number should be 10 digits 
        complaintTitle: ['', Validators.required],
         description: ['', Validators.required] 
        }); 
        }
      
        
        
        onSubmit() 
        { 
          if (this.complaintForm.valid) {
             console.log(this.complaintForm.value);
              this.complaintService.submitComplaint(this.complaintForm.value).subscribe(response => {
                 console.log('Complaint submitted successfully', response); 
                 this.snackbar.open("Grievance Submitted Successfully ", "Close", { duration: 5000, panelClass: 'error-snackbar' });
                }, 
                error => {
                   console.log('Error submitting complaint', error); 
                   this.snackbar.open("Something Went Wrong ", "Close", { duration: 5000, panelClass: 'error-snackbar' });
                  }); 
                }
          }
}
