import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancelar',
  allowOutsideClick: false,
}

Vue.use(VueSweetalert2, options)
