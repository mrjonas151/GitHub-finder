import { BsSearch } from "react-icons/bs"
import { useState } from "react"
import styles from './Search.module.css'

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

const Search = ({loadUser}:SearchProps) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  }

  return (
    <div className={styles.search}>
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={styles.search_container}>
            <input 
                type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(username)}><BsSearch /></button>
        </div>
    </div>
  )
}

export default Search