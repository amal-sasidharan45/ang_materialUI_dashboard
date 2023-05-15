import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_material_ui';
  sidebar:boolean=false
  sidebartoggle(){
    this.sidebar=!this.sidebar



  }
}
