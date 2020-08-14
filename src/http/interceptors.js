export const response = response => {
  return response
}

export const error = error => {
  if(!error.response || error.response.data) {
    error.response = {
      data: { message: 'Ocorreu um erro inesperado' }
    }
  }

  return Promise.reject(error)
}
