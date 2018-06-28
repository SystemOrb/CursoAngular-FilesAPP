import { Directive,
  HostListener,
  EventEmitter,
  ElementRef,
  Input,
  Output } from '@angular/core';
  import {  FileItem } from '../classes/file';
@Directive({
  selector: '[appNgDropZone]'
})
export class NgDropZoneDirective {
  @Input() arrayImages: FileItem[] = [];
  @Output() mouseLeave: EventEmitter<boolean> = new EventEmitter();
// Create a event

constructor() { }

  @HostListener('dragover', ['$event']) public onDragEnter( event: any ) {
     this.mouseLeave.emit(true);
     this.StopPropage( event );
  }
  @HostListener('dragleave', ['$event']) public onDragLeave( event: any) {
    this.mouseLeave.emit(false);
  }
  @HostListener('drop', ['$event']) public onDrop( event: any, data: any) {

     const transferItems = this.browserExtension( event );
     if (!transferItems) {
        return;
     }
     this.getItemsTransfer( transferItems.files );


     this.StopPropage( event );
     this.mouseLeave.emit(false);
  }
 /* COMPATIBILITY */
  private browserExtension(transfer: any) {
    return transfer.dataTransfer ? transfer.dataTransfer : transfer.OriginalEvent.dataTransfer;
  }
  // FILE ITEM TRANSFORM
  private getItemsTransfer(files: FileList) {
     // tslint:disable-next-line:forin
     for (const properties in Object.getOwnPropertyNames( files )) {
       const temporalFile = files[properties];
       // Verify if this temporal file can be loaded
       if (this.loadVerifyEvents( temporalFile )) {
         const newFile = new FileItem( temporalFile );
         this.arrayImages.push( newFile );
       }
     }
     console.log(this.arrayImages);
  }

  /* VALIDATORS */
  loadVerifyEvents( file: File ): boolean {
    return ( !this.VerifyIfDropped(file.name) && this.VerifyIsAImage(file.type) ) ? false : true;
  }


  VerifyIfDropped( fileName: string): boolean {
    for ( const files of this.arrayImages) {
      if ( files.fileName === fileName ) {
        console.log('El archivo ' + fileName + ' ya esta agregado');
        return true;
      }
    }
    return false;
  }
  VerifyIsAImage( fileType: string ): boolean {
   return ( fileType === '' && fileType === undefined ) ? false : fileType.startsWith( 'image' );
  }
  StopPropage( event ) {
    event.preventDefault();
    event.stopPropagation();
  }
  /* END VALIDATORS */
}
