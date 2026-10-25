import './Header.scss';

import Link from '@/components/Link';


const Header = () => {



  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'О нас', href: '#about' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="container header__wrapper">
        <nav className="header__nav">
          <ul className="header__list">
            {navLinks.map((link, index) => (
              <li key={index} className="header__item">
                <Link
                  href={link.href}
                  className="header__link">
                  {
                    link.name
                  }
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