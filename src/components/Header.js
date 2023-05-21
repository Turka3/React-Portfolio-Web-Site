import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Türker's Portfolio</h1>
            <a className="social" href="https://github.com/Turka3" target="_blank">Github</a>
            <a className="social" href="https://www.instagram.com/turker.albayrak/" target="_blank">İnstagram</a>
            <a className="social" href="https://www.linkedin.com/in/t%C3%BCrker-albayrak-24b63725b/">LinkedIn</a>

            <div className="main-container">
                <h3>Hakkımda</h3>
                <hr />
                <p>Merhaba! Benim adım Türker ve sizlere kendim hakkında biraz bilgi vermek isterim.
                    Ben bir yazılım geliştiriciyim ve yazılım dünyasına olan tutkum, beni bu heyecan verici ve sürekli gelişen alanda kariyer yapmaya yönlendirdi. Özellikle web geliştirme ve uygulama geliştirme konularına odaklanıyorum.
                    Yaratıcı ve yenilikçi projeler oluşturmak için HTML5, CSS3 ve JavaScript gibi web teknolojilerini etkin bir şekilde kullanıyorum. Ayrıca React ve Vue gibi modern JavaScript çerçevelerini kullanarak kullanıcı dostu ve etkileşimli web uygulamaları geliştiriyorum. İyi bir kullanıcı deneyimi ve görsel çekicilik benim için her zaman önemlidir.
                    Beni çalışmalarımda motive eden şey, insanların yaşamlarını kolaylaştırmak, sorunları çözmek ve yeni fırsatlar yaratmaktır. Proje bazlı çalışmayı ve takım ortamında işbirliği yapmayı severim. Yaratıcı fikirler üretmek, teknolojik trendleri takip etmek ve sürekli kendimi geliştirmek benim için önemlidir.
                    Benim için önemli olan şey, kaliteli ve sürdürülebilir çözümler sunmak, kullanıcıların ihtiyaçlarını karşılamak ve işletmelerin başarısına katkıda bulunmaktır.
                    Bu portfolyo sitemde, geçmiş projelerim, yeteneklerim hakkında daha fazla bilgi bulabilirsiniz. Sizlerle işbirliği yapmak ve yeni projelerde yer almak için sabırsızlanıyorum.
                    Teşekkür ederim!</p>

                <h3>Yeteneklerim</h3>
                <hr/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Python ile Programlama</li>
                    <li>React</li>
                    <li>Vue</li>
                </ul>

                <h3>Projelerim</h3>
                <hr/>
                <div className="project-container">
                    <h4>GençTech</h4>
                    <p>Proje Geliştirmek için kurulmuş bir kuruluş</p>
                    <a href="https://genctech-open-source.vercel.app" target="_blank" rel="noopener noreferrer">İncele</a>
                </div>

                <div className="project-container">
                    <h4>Mory</h4>
                    <p>İngilizce Öğrenmek için geliştirilen uygulama</p>
                    <a href="https://morny-learn-english-web-app-open-source.vercel.app/index.html" target="_blank" rel="noopener noreferrer">İncele</a>
                </div>

            </div>
        </header>
    );
}

export default Header;