import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// para erros futuros altere Routes para "Routes as Switch"

    // Tanto as tags quanto as variaveis mudaram e não são mais chamadas de Switch mas Routes, porém para não dar conflitos na nossa const com mesmo nome apelidamos no import como Switch.
    
    // Redirect agora também se chama Navigate

import { Dashboard } from "../pages";

export const RoutesPath = () => {
    // para erros futuros altere RoutesPath para Routes

    return (
        <BrowserRouter>
             <Routes>  {/* para erros futuros altere Routes para Switch */}
                <Route path="/pagina-inicial" element={<Dashboard />} />
                    
                    {/* Dentro das tags routes não precisam mais da sintax exact  */}
                    {/* Ao criar o caminho de login fazer do mesmo modo como o pagina-inicial */}

                    {/* os components agora se chamam elements e não recebem mais um mesmo parâmetro mas agora recebe uma tag*/}

                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
                {/* Elements não precisam de função apenas para navigate */}
            </Routes> {/* para erros futuros altere Routes para Switch */}
        </BrowserRouter>
    );
}

// Comentarios feitos dizem respeito sobre a atualização do react-dom durante o curso