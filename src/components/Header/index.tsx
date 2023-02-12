import Link from '../Link'
import Logo from "../../assets/images/internet-explorer-6.jpg"
import './styles.css'

function Header() {
  return (
    <header>
     <img src={Logo} alt="Logo do dindin" />
      <nav>
        <Link texto="Cursos" redirect="/cursos" />
        <Link texto="Blog" redirect="/blog" />
        <Link texto="Contato" redirect="/contato" />
      </nav>
    </header>
  )
}

export default Header