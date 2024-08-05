import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./Repos.module.css"
import BackBtn from "../components/BackBtn"
import { RepoProps } from "../types/repo"
import Loader from "../components/Loader"
import Repo from "../components/Repo"

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>([]);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        
        const loadRepos = async function (username: string) {
            setIsLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();

            setRepos(data);
            setIsLoading(false);
        };
        if(username) {
          loadRepos(username);
        }
        
    }, []);

    if(!repos && isloading) {
        return <Loader />
    }

  return (
    <div>
        <BackBtn />
        <h2>Explore os repositório de: {username}</h2>
        {repos && repos.length === 0 && <p>Nenhum repositório encontrado</p>}
        {repos && repos.length > 0 && (
          <div>
            {repos.map((repo:RepoProps) => (
              <Repo key={repo.name} {...repo} />
            ))}
          </div>
        )}
    </div>
  )
}

export default Repos