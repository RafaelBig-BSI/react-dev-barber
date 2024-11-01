export const Navbar = () => {
    return (
        <div>
            <nav className="header-content container">
                <div className="header-icons" data-aos="fade-down">
                    <a href="#">
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-tiktok fa-2x"></i>
                    </a>
                </div>
                <div className="header-logo" data-aos="fade-up" data-aos-delay="300">
                    <img data-aos="flip-up" data-aos-delay="300" data-aos-duration="1500" src="/logo.svg" alt="Logo da barbearia" />
                </div>
                <div data-aos="fade-down">
                    <a className="header-button" target="_blank" href="https://api.whatsapp.com/send?phone=5518999999999&text=Quero%20fazer%20um%20agendamento%20hoje!">Agendar horário</a>
                </div>
            </nav>
            <main className="hero container" data-aos="fade-up" data-aos-delay="400">
                <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                <p>Horário de funcionamento: 09:00 às 19:00</p>
                <a href="https://api.whatsapp.com/send?phone=5518999999999&text=Quero%20fazer%20um%20agendamento%20hoje!" className="button-contact" target="_blank">
                    Agendar horário
                </a>
            </main>
        </div>
    )
}