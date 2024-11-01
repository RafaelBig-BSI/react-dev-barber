export const Services = () => {
    return (
        <div>
            <section className="services">
                <div className="services-content container">
                    <h2>Serviços</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque eaque, voluptas eveniet aspernatur consequatur? Nesciunt omnis, dolores maxime quod, reiciendis cumque aliquid adipisci tempora at earum accusantium rem expedita.</p>
                </div>
                <section className="haircuts">
                    <div className="haircut" data-aos="fade-up" data-aos-delay="150">
                        <img src="src/assets/corte1.png" alt="Corte normal" />
                        <div className="haircut-info">
                            <strong>Corte normal</strong>
                            <button>R$ 45,00</button>
                        </div>
                    </div>
                    <div className="haircut" data-aos="fade-up" data-aos-delay="250">
                        <img src="src/assets/corte2.png" alt="Barba completa" />
                        <div className="haircut-info">
                            <strong>Barba completa</strong>
                            <button>R$ 35,00</button>
                        </div>
                    </div>
                    <div className="haircut" data-aos="fade-up" data-aos-delay="350">
                        <img src="src/assets/corte3.png" alt="Corte e barba" />
                        <div className="haircut-info">
                            <strong>Corte e barba</strong>
                            <button>R$ 55,00</button>
                        </div>
                    </div>
                </section>
            </section>
            <div className="services">
                <h2>Venha conhecer</h2>
            </div>
        </div>
    )
}