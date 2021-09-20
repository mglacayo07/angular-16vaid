import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponentComponent {
  message = 'No puedes editar este texto';
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'Ahora sí puedes editar el texto';
    } else {
      this.message = 'No puedes editar este texto';
    }
  }
}
