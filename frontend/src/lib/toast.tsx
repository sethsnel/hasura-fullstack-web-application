import { Toast } from "bootstrap"
import { useEffect, useRef } from "react"

type ToastProps = {
  message: string,
  show: boolean
}

const ToastMessage = ({ message, show }: ToastProps) => {
  const toastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (show) {
      new Toast(toastRef.current as HTMLElement).show()
    }
  }, [show])

  return <div className="toast-container position-fixed top-0 start-50 text-white p-3 translate-middle-x">
    <div ref={toastRef} className="toast align-items-center bg-success" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
          {message}
        </div>
        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </div>
}

export default ToastMessage