import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Image } from '../interfaces/image.interface';
import { FileItem } from '../classes/file';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private folder = 'img';
  constructor(public storage: AngularFirestore) {
   }
   private saveImage(file: Image) {
     this.storage.collection('/' + this.folder).add( file );
   }
   loadImages( file: FileItem[] ) {
     console.log( file );
   }
}
