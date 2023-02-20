import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent {
  mostrarImagen: string = 'bathroom';
  cargando: boolean = true;
  cambiarImagen(nuevaImagen: string) {
    this.mostrarImagen = nuevaImagen;
  }
  imagesBathroom: string[];
  imagesKitchen: string[];
  imagesOthers: string[];

  selectedImage: string = '';

  constructor(private storage: Storage,   private modal: NgbModal) {
    this.imagesBathroom = [];
    this.imagesKitchen = [];
    this.imagesOthers = [];
  }
  openModal(modalContent:any, image:any) {
    this.selectedImage = image;
    this.modal.open(modalContent, { size: 'md' });
  }
  ngOnInit(): void {
    this.cargando = true;
    this.getImages();
  }
  getImages() {
    const imagesRefBath = ref(this.storage, 'Bany');
    const imagesRefKitch = ref(this.storage, 'Cocina');
    const imagesRefOther = ref(this.storage, 'Otros');
    listAll(imagesRefBath)
      .then(async (response) => {
        console.log(response);
        this.imagesBathroom = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);

          this.imagesBathroom.push(url);
        }
        this.cargando = false;
      })
      .catch((error) => console.log(error));

    listAll(imagesRefKitch)
      .then(async (response) => {
        console.log(response);
        this.imagesKitchen = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);

          this.imagesKitchen.push(url);
        }
        this.cargando = false;
      })
      .catch((error) => console.log(error));

    listAll(imagesRefOther)
      .then(async (response) => {
        console.log(response);
        this.imagesOthers = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);

          this.imagesOthers.push(url);
        }
        this.cargando = false;
      })
      .catch((error) => console.log(error));
  }
}
