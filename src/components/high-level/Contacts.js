import './Contacts.css';
import contacts_photo from '../../img/contacts.png';

const Contacts = () => {
    return (
        <div className='contacts-main-container'>
            <div className='contacts-container-for-photo'>
                <img src={contacts_photo} />
            </div>
            <div className='contacts-data'>
                <div className='contacts-social-media'>
                    <div className='contacts-sm-label'>
                        <div>Social Media</div>
                    </div>
                    <div className='contacts-sm-data'>
                        <div>
                            <a href='https://t.me/tegicx'>
                            Telegram
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/maksym-kruhlyk-90360b333/'>
                            LinkedIn
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
                        </div>
                        <div>
                            <a href='https://www.facebook.com/profile.php?id=100084241353703'>
                            Facebook
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
                        </div>
                    </div>
                </div>
                <div className='contacts-email'>
                    <div className='contacts-email-label'>
                        <div>Mail & location</div>
                    </div>
                    <div className='contacts-email-data'>
                        <div>
                            <a href="mailto:maksimkruglik2@gmail.com">
                                <div className='contacts-email-data-mobile'>
                                    Gmail
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className='contacts-email-data-desktop'>
                                    maksimkruglik2@gmail.com
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div>
                            Poznań and remote
                        </div>
                    </div>
                </div>
                <div className='contacts-github'>
                    <div className='contacts-github-link'>
                        <div className='inner-contacts-github-link'>
                            <a href='https://github.com/tegic'>
                                GITHUB
                                <div className='contacts-github-mobile'>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.25 14.625V21.375C20.25 21.9717 20.0129 22.544 19.591 22.966C19.169 23.3879 18.5967 23.625 18 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V9C3.375 8.40326 3.61205 7.83097 4.03401 7.40901C4.45597 6.98705 5.02826 6.75 5.625 6.75H12.375M16.875 3.375H23.625M23.625 3.375V10.125M23.625 3.375L11.25 15.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className='contacts-github-desktop'>
                                    <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M65.25 47.125V68.875C65.25 70.7978 64.4862 72.6419 63.1265 74.0015C61.7669 75.3612 59.9228 76.125 58 76.125H18.125C16.2022 76.125 14.3581 75.3612 12.9985 74.0015C11.6388 72.6419 10.875 70.7978 10.875 68.875V29C10.875 27.0772 11.6388 25.2331 12.9985 23.8735C14.3581 22.5138 16.2022 21.75 18.125 21.75H39.875M54.375 10.875H76.125M76.125 10.875V32.625M76.125 10.875L36.25 50.75" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contacts-last-updated'>LAST UPDATE: MAY 2025</div>
            </div>
        </div>
    )
}

export default Contacts;