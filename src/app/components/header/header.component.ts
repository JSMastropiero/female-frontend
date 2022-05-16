import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(templateRef: any) {
    let dialogRef = this.dialog.open(templateRef, {
      width: '400',
      height: 'auto',
      autoFocus: false
    });
  }

}
