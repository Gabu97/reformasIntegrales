import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  abrirWhatsApp() {
    const numeroWhatsApp = '664352582';
    const url = `https://wa.me/${numeroWhatsApp}`;
    window.open(url, '_blank');
  }


enviarCorreoNoGmail(){
  const destinatario = 'gabitelega1997@gmail.com';
  const asunto = 'Asunto del correo';
  const cuerpo = 'Cuerpo del correo';
  const url = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
  window.open(url, '_blank');
}



llamar(){
  window.location.href = 'tel:664352582';
}
}
