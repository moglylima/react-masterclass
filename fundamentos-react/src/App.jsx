import React from 'react';

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'

// import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'

export default (props) =>(
    <div>
    <Card titulo='Primeiro Componente'>
        <Primeiro/>
    </Card>
 
    <Card titulo='Exercicio X'>
        Conteudo
    </Card>

    <Card titulo='Exercicio X'>
        Conteudo
    </Card>


    {/* <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
    </ComFilhos> */}

    {/* <Primeiro/>
    <ComParametro   titulo='Esse é o titulo' 
                    subtitulo='Esse é o subtitulo'/>
    <ComParametro   titulo='Esse é o titulo 01' 
                    subtitulo='Esse é o subtitulo 01'/> */}

                 
</div>
)