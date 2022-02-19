import { Sidebar } from './Sidebar.js';

export const Header = () => {
  return (
    <header className="s-header">
        <div className="header__top">
            <div className="header__logo">
                <h1 className="site-logo" href="index.html">
                   Blog Semana
                </h1>
            </div>
            <div className="header__search"></div>
            <a href="#0" className="header__search-trigger"></a>
            <a href="#0" className="header__menu-toggle"><span>Menu</span></a>
        </div>    
        <Sidebar />
    </header>
  )
}
