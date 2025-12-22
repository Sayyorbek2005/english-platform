import './header.css'
import { HeaderContainer } from './Header.styles'

const Header = () => {

  return (
    <HeaderContainer>
        <header data-aos="fade-down"  className='max-width display-flex'>

            <h2 >Baxtiniso </h2>

            <h2 >English Platform</h2>

            <div className="admin display-flex" data-aos="fade-left">
              <button className='header-btn'>Teacher</button>
            </div>

        </header>
    </HeaderContainer>
  )
}

export default Header
