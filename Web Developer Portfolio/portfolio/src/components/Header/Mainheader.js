
import './header.css'
function Mainheader() {
    return (
        <div className="header">
            <div className="l-header">
                <p>Johnathan Spector</p>
            </div>
            <div className="m-header">
                <p>Articles</p>
                <p>Chats</p>
                <p>Awards</p>
                <p>About</p>
            </div>

            <div className="r-header">
                <p>Get in touch</p>
            </div>

            <div className='hamberger'>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Mainheader;