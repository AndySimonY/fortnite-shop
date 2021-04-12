function Header() {
    return (
        <nav className='amber darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/AndySimonY/fortnite-shop.git'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
