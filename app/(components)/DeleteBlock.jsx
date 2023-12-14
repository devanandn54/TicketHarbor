'use client'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useRouter} from 'next/navigation'
import {toast} from 'react-toastify'

const DeleteBlock = ({id}) => {
  const router = useRouter()
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      toast.success('Ticket deleted', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: '#2b3441',
          color: 'white',
        },
      })
      router.refresh()
    }
  }
  return (
    <FontAwesomeIcon
      icon={faX}
      className='text-red-400 hover:cursor-pointer hover:text-red-200'
      onClick={deleteTicket}
    />
  )
}

export default DeleteBlock
