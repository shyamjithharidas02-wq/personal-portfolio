import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">Shyam<span>.</span></div>
        <div className="footer__copy">
          Built with <span>♥</span> by Shyamjith Haridas · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
