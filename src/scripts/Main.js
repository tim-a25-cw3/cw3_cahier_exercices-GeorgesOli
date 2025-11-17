import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
    this.swipercard();
  }

  init() {
    Icons.load();
    Swiper.load();
  }

  swipercard() {
    const swiper = new Swiper('.swiper', {
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
