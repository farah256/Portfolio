const About  = () => {
    return (
        <section id="about" className="pt-32  pb-16 bg-primary min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className=" [text-shadow:0px_6px_4px_#00000080] [box-shadow:inset 0px_6px_4px_#00000050] font-black font-semibold text-secondary text-[80px] text-center ">
                About Me
                </h1>
                <div className="p-10 rounded-[20px] shadow-[5px_4px_10px_#000000cc]">
                    <p className="text-2xl md:text-3xl font-sans-100 text-black text-center">
                    Hey there, I’m <bold>Farah</bold>, a curious mind who loves transforming ideas into digital experiences. I’m currently studying <bold>software engineering</bold>, and I’m always open to new opportunities to learn, collaborate, and grow. When I’m not coding, you’ll find me <bold>reading</bold>, <bold>painting</bold>, or <bold>exploring new designs and projects ideas</bold>. My goal is to create apps that are not just functional, but also <bold>beautiful</bold> and <bold>meaningful</bold>.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;