import React, { createContext, useState } from 'react';


export const AuthContext = createContext({});
function AuthProvider({ children }) {
    const [pontuacao, setPontuacao] = useState(0);
    const [listaJogador, setListaJogador] = useState([]);
    const [nome, setNome] = useState('');
    return (
        <AuthContext.Provider value={{listaJogador, setListaJogador, pontuacao, setPontuacao, nome, setNome}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;