import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./Repos.module.css"
import BackBtn from "../components/BackBtn"
import { RepoProps } from "../types/repo"
import Loader from "../components/Loader"

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>([]);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        
        const loadRepos = async function (username: string = "") {
            setIsLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();

            setRepos(data);
            setIsLoading(false);
        };
        loadRepos(username);
    }, []);


  return (
    <div>
        <BackBtn />
        Repos {username}
    </div>
  )
}

export default Repos