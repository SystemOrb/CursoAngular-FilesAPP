import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { FileItem } from '../../classes/file';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent {
  Images: FileItem[] = [];
  drop = false; // Verificator if this element is hovered
  constructor(private storage: UploadService) { }
  loadImages() {
    this.storage.loadImages( this.Images );
  }

}
