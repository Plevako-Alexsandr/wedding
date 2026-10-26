import './Header.scss';

import Link from '@/components/Link';


const Header = () => {



  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'О нас', href: '#about' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Контакты', href: '#contact' },
    { name: 'Цены', href: '#pricing' },
  ];

  const actionLinks = [
    { name: 'Войти', href: '/login' },
    { name: 'Регистрация', href: '/register' },
  ];

  return (
    <header className="header">
      <div className="container header__wrapper">
        <nav className="header__nav">
          <ul className="header__list header__menu">
            {navLinks.map((link, index) => (
              <li key={index} className="header__item header__menu-item">
                <Link
                  href={link.href}
                  className="header__link header__menu-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="header__list header__actions">
            {actionLinks.map((link, index) => (
              <li key={index} className="header__item header__actions-item">
                <Link
                  href={link.href}
                  className="header__link header__actions-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;