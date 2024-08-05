import { RepoProps } from "../types/repo"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import styles from "./Repo.module.css"

const Repo = ({name, language, html_url, forks_count, stargazers_count}:RepoProps) =>  {
  return (
    <div className={styles.repo}>
        <h3>{name}</h3>
        <p className={styles.language}><BsCodeSlash /> <span>{language}</span></p>
        <div className={styles.stats}>
            <div>
                <AiOutlineStar /> {stargazers_count}
            </div>
            <div>
                <AiOutlineFork /> {forks_count}
            </div>
        </div>
        <a href={html_url} target="_blank" className={styles.repo_btn}>
            <span>Ver Código</span>
            <RiGitRepositoryLine />
        </a>
    </div>
  )
}

export default Repo