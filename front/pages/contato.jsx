
// CLARA!!!! DESCULPE TER MEXIDO NESSA PARTE SEM SUA AUTORIZAÇÃO :( Mas pode ter certeza que eu não fiz nada de errado.

// Eu não decidi terminar por conta da área de programção haver muitas manias/costumes... Então como o meu jeito de programar é diferente do seu, optei por deixar do seu jeito.

// Qualquer reclamação ou dúvida que você tiver por conta disso, pode me chamar tá bom?

// E seu projeto está ótimo, parabéns! :)

import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import CardListFunc from '@/components/CardListFunc'
import { useEffect, useState } from 'react'
import { getFuncionarios } from '@/services/apiReqRes'

export default function contato() {
  const [funcionarios, setFuncionarios] = useState([])
  async function buscaFuncionarios(){
    try{
      const data = await getFuncionarios()
      setFuncionarios (data)
    }catch(error) {
      console.error('Erro ao buscar funcionarios:', error)
    }
  }
  useEffect(()=>{
    buscaFuncionarios ()
  }, [])
  return (
    <>
      <Headerb />
      <Titulo texto="Conheça nossa equipe de vendedores." />
      <CardListFunc funcionarios={funcionarios}/>
    </>
  )
}