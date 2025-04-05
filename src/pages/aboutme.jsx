export const About = () => {
    return (
        <section className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            
            <div className="max-w-2xl mx-auto">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Who am I?</h2>
                    <p className="text-gray-300">
                        I'm a Pokémon enthusiast and React developer passionate about creating 
                        interactive web applications.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">My Skills</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>Pokémon API Integration</li>
                        <li>Responsive Design</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">Contact</h2>
                    <p className="text-gray-300">
                        Email: example@pokemondomain.com<br />
                        GitHub: @pokemaster-dev
                    </p>
                </section>
            </div>
        </section>
    );
};