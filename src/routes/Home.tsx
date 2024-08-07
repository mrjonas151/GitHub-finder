import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadUser = async (username: string) => {
    setLoading(true);
    setError(false);
    setUser(null);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setLoading(false);

    if(response.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;
    const userData:UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData);
  };

  return (
    <div>
        <Search loadUser={loadUser} />
        {loading && <Loader />}
        {user && <User {...user} />}
        {error && <Error />}
    </div>
  )
}

export default Home