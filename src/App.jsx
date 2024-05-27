import {useState, useRef} from 'react'

const App = () => {

const[rodando, setRodando] = useState(false)
const ref = useRef(null)
const dados = {
  video: "https://i.imgur.com/hPJh8uG.mp4"
}
  function esperaClick(){
    const comportamentoEsperado = !rodando
    setRodando(comportamentoEsperado)
    if(comportamentoEsperado)
    ref.current.play()
    else
    ref.currentpause()
  
}
  return (
    <>
   <h2> dar o play </h2>

   <video ref={ref}width ={250} style ={{backgroundcolor:'blue'}} >
  <source src = {dados.video} type = "video/mp4" />
   </video>

   <button onClick={esperaClick}>
    {rodando ? "pause" : "play"}
   </button>
   </>
  )
}

export default App