
// import './NotFound.scss';
import RouterLink from '@/shared/RouterLink';


const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Данной страницы не существует</p>
      <RouterLink to="/">На главную</RouterLink>
    </div>
  );
}

export default NotFound;