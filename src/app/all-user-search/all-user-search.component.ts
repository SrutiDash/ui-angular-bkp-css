import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-all-user-search',
  templateUrl: './all-user-search.component.html',
  styleUrls: ['./all-user-search.component.css']
})
export class AllUserSearchComponent implements OnInit {
  filterForm: FormGroup;
  userDetails: any[] = [];
  displayedColumns: string[] = ['user_name', 'parent_name', 'domain_name', 'category_name'];
  dataSource = new MatTableDataSource<any>(this.userDetails);
  domains: string[] = [
    'Agriculture', 'Electronics', 'Merchant', 'Social', 'Healthcare', 'Home Appliances', 
    'MerchantPay', 'IT', 'Arts', 'Finance', 'Retail', 'Consumer Electronics', 
    'Science', 'Transportation', 'Cons', 'Literature', 'Education'
  ];
  categories: string[] = [
    'Eronics', 'Subscriber', 'Wholesale', 'Electronics', 'Retail', 'Bank Admin', 
    'Network Admin', 'Maths', 'HeadMerchant'
  ];

  showNoDataMessage: boolean = false;

  constructor(private fb: FormBuilder, private userDetailsService: UserDetailsService) {
    this.filterForm = this.fb.group({
      user_name: [''],
      parent_name: [''],
      domain_name: [''],
      category_name: ['']
    });
  }

  ngOnInit(): void {
    this.onFilterSubmit(); // To load initial data
  }

  onFilterSubmit(): void {
    const filters: { [key: string]: string } = {};

    // Add parameters only if the form field is not empty
    Object.keys(this.filterForm.value).forEach(key => {
      const value = this.filterForm.value[key]?.trim();
      if (value !== '') {
        filters[key] = value;
      }
    });

    this.userDetailsService.getUserDetails(filters).subscribe(data => {
      this.userDetails = data;
      this.dataSource.data = this.userDetails;
      this.showNoDataMessage = this.userDetails.length === 0; // Show message if no data
      if (this.showNoDataMessage) {
        setTimeout(() => {
          this.showNoDataMessage = false; // Hide message after 4 seconds
        }, 4000);
      }
    }, error => {
      // Handle error, such as displaying error message
      console.error('Error fetching user details:', error);
    });
  }

  onReset(): void {
    this.filterForm.reset({
      user_name: '',
      parent_name: '',
      domain_name: '',
      category_name: ''
    });
    this.userDetails = [];
    this.dataSource.data = this.userDetails;
  }
}
