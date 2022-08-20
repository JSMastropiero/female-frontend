import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public active : boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(modal:any) {
    const dialogRef = this.dialog.open(modal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
