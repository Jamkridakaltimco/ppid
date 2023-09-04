import Swal from 'sweetalert2'

export default function useExecute () {
  const buttonColor = '#1d4ed8'

  async function successResponse (text = 'Berhasil !') {
    await Swal.fire({
      icon: 'success',
      text,
      confirmButtonColor: buttonColor
    })
  }

  async function errorResponse (text = 'Error !') {
    await Swal.fire({
      icon: 'error',
      text,
      confirmButtonColor: buttonColor
    })
  }

  async function infoResponse (text = 'Informasi !') {
    await Swal.fire({
      icon: 'info',
      text,
      confirmButtonColor: buttonColor
    })
  }

  async function warningResponse (text = 'Peringatan !') {
    await Swal.fire({
      icon: 'warning',
      text,
      confirmButtonColor: buttonColor
    })
  }

  async function questionResponse (text = 'Yakin?') {
    const response = await Swal.fire({
      icon: 'question',
      text,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: buttonColor,
      confirmButtonText: 'Yakin',
      cancelButtonText: 'Tidak'
    })

    return response
  }

  return {
    successResponse,
    errorResponse,
    infoResponse,
    warningResponse,
    questionResponse
  }
}
