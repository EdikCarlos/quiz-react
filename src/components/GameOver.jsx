import "./GameOver.css"
import WellDone from "../img/welldone.svg"

function GameOver() {
  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação x</p>
        <p>Você acertou y de z questões</p>
        <img src={WellDone} alt="Fim de jogo" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver