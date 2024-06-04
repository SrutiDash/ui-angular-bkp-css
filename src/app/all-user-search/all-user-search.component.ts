import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';
import { MatTableDataSource } from '@angular/material/table';

interface UserDetails {
  user_name: string;
  parent_name: string;
  domain_name: string;
  category_name: string;
}

@Component({
  selector: 'app-all-user-search',
  templateUrl: './all-user-search.component.html',
  styleUrls: ['./all-user-search.component.css']
})
export class AllUserSearchComponent implements OnInit {
  userDetails: UserDetails[] = [];
  dataSource = new MatTableDataSource<UserDetails>(this.userDetails);
  filterForm: FormGroup;
  displayedColumns: string[] = ['user_name', 'parent_name', 'domain_name', 'category_name']; // Add this line
  categories = [
    'Eronics', 'Subscriber', 'Wholesale', 'Electronics', 'Retail', 'Bank Admin', 
    'Network Admin', 'Maths', 'HeadMerchant'
  ];
  domains = [
    'Agriculture', 'Electronics', 'Merchant', 'Social', 'Healthcare', 
    'Home Appliances', 'MerchantPay', 'IT', 'Arts', 'Finance', 'Retail', 
    'Consumer Electronics', 'Science', 'Transportation', 'Cons', 'Literature', 'Education'
  ];

  constructor(
    private fb: FormBuilder,
    private userDetailsService: UserDetailsService
  ) {
    this.filterForm = this.fb.group({
      user_name: [''],
      parent_name: [''],
      domain_name: [''],
      category_name: ['']
    });
  }

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    const params = this.filterForm.value;
    this.userDetailsService.getUserDetails(params).subscribe(
      data => {
        this.userDetails = data;
        this.dataSource.data = this.userDetails;
      },
      error => console.error('Error fetching user details', error)
    );
  }

  onFilterSubmit(): void {
    this.fetchUserDetails();
  }
}
