import styles from "./Button.module.css";

const Button = ({loading}) => {
  return (
    <>
        {!loading && <button className="btn">Entrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
    </>
  )
}

export default Button