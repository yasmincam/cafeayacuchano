import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MokaService {
  visible = signal<boolean>(true);
  currentText = signal<string>(
    '¡Hola! Soy Moka, barista de Café Ayacuchano. ¿Qué perfil de café buscas hoy?'
  );
  currentImage = signal<string>('barista_saludando.png');
  clickCount = 0;

  private quotes = [
    { text: 'Nuestro café del VRAEM se cultiva a 1,800 msnm con notas naturales a chocolate y panela.', img: 'barista_feliz.png' },
    { text: 'Para disfrutar todos los aromas frutales, te recomiendo probar nuestra extracción en Chemex.', img: 'barista_emocionada.png' },
    { text: 'Tostamos cada semana en pequeños lotes para garantizar la máxima frescura en tu taza.', img: 'barista_presumida.png' },
    { text: 'Recuerda que cada visita suma puntos en nuestro Club de Socios para descuentos permanentes.', img: 'barista_feliz.png' },
    { text: 'Gira la ruleta hoy para ganar cupones de hasta 25% en tu reserva de café.', img: 'barista_saludando.png' }
  ];

  interact() {
    this.clickCount++;
    const pick = this.quotes[this.clickCount % this.quotes.length];
    this.currentText.set(pick.text);
    this.currentImage.set(pick.img);
  }

  onPasswordFocus(focus: boolean) {
    if (focus) {
      this.currentText.set('Tus credenciales están protegidas con encriptación segura.');
      this.currentImage.set('barista_cara_cubierta.png');
    } else {
      this.currentText.set('Bienvenido de vuelta a Café Ayacuchano.');
      this.currentImage.set('barista_feliz.png');
    }
  }

  toggleVisibility() {
    this.visible.update(v => !v);
  }
}
