export const About = () => {
    return (
        <section className="about-container">
            <div className="about-left">
                <div className="profile-section">
                    <div className="profile-image-container">
                        <img
                            src="/images/profile.jpg"
                            alt="Profile Photo"
                            className="profile-image"
                        />
                    </div>

                    <div className="contact-info">
                        <div>
                            <h3 className="contact-label">EMAIL</h3>
                            <p className="contact-value">fiorellabarlar@gmail.com</p>
                        </div>

                        <div>
                            <h3 className="contact-label">ROLE</h3>
                            <p className="contact-value">Junior Programmer</p>
                        </div>

                        <div>
                            <h3 className="contact-label">TELEFONO</h3>
                            <p className="contact-value">+504 9999 9999</p>
                        </div>


                    </div>
                </div>

                <div className="about-right">
                    <h1 className="about-title">Sobre Mi</h1>
                    <p className="about-description">
                        Soy una persona muy dedicada a aprender sobre los cargos que se me ponen encima. Soy una estudiante universitaria pero tambien una aprendiz de la vida, quiero experiencia y conocimiento para mejorar mis capacidades de diseño y programación.
                    </p>

                    <div className="skills-container">
                        <h2 className="skills-title">Habilidades</h2>
                        <ul className="skills-list">
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">React.js</span>
                            </li>
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">Tailwind CSS</span>
                            </li>
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">JavaScript</span>
                            </li>
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">Graphic Design</span>
                            </li>
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">SQL</span>
                            </li>
                            <li className="skill-item">
                                <div className="skill-bullet"></div>
                                <span className="skill-name">Editor</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};