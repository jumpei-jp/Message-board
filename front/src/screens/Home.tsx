import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/threads">スレッド一覧</Link>
    </div>
  );
};

export default Home;