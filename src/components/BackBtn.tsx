import { useNavigate } from "react-router-dom"
import styles from "./styles/BackBtn.module.css"

const BackBtn = () => {
    const navigate = useNavigate()

  return (
    <>
        <button onClick={() => navigate(-1)}>Voltar</button>
    </>
  )
}

export default BackBtn