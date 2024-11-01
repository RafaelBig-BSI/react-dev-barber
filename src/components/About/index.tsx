export const About = () => {
    return (
        <section className="about">
            <div className="container about-content">
                <div data-aos="zoom-in" data-aos-delay="100">
                    <img src="/images.svg" alt="Imagem sobre a barbearia" />
                </div>
                <div className="about-description" data-aos="zoom-out-left" data-aos-delay="250">
                    <h2>Sobre</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sapiente, reiciendis earum ex, vitae harum corrupti similique, minus perspiciatis tempore soluta eos eaque omnis illum id cum. Odit, numquam molestiae.</p>
                    <p>Horário de funcionamento: <strong>09:00</strong> às <strong>19:00</strong></p>
                </div>
            </div>
        </section>
    )
}