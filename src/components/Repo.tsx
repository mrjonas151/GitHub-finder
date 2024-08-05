import { RepoProps } from "../types/repo"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

const Repo = ({name, language, html_url, forks_count, stargazers_count}:RepoProps) =>  {
  return (
    <div>
        <h3>{name}</h3>
        <p><BsCodeSlash /> {language}</p>
        <div>
            <div>
                <AiOutlineStar /> {stargazers_count}
            </div>
            <div>
                <AiOutlineFork /> {forks_count}
            </div>
        </div>
        <a href={html_url} target="_blank">
            <span>Ver Código</span>
            <RiGitRepositoryLine />
        </a>
    </div>
  )
}

export default Repo