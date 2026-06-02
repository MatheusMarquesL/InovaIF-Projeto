import {
  ShoppingCart,
  ShieldCheck,
  BadgeCheck,
  Trophy,
  Lock,
  Zap,
  Users,
  Award,
  Clock,
  Gift,
  UserCircle,
  CircleHelp,
  Star,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { useRef, useEffect, useState } from "react";
import videopage from "./assets/videopage.mp4";
import { landingPageConteudo } from "./landingPageConteudo";

function App() {
  const { linkWhatsapp } = landingPageConteudo.config;
  const dataFinal = new Date("2026-06-01T23:59:59");

  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const agora = new Date().getTime();

      const distancia = dataFinal.getTime() - agora;

      if (distancia <= 0) {
        clearInterval(timer);
        return;
      }

      setTempo({
        dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),

        horas: Math.floor(
          (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),

        minutos: Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),

        segundos: Math.floor((distancia % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const beneficios = [
    { icon: ShieldCheck, title: "Lorem Ipsum" },
    { icon: Award, title: "Lorem Ipsum" },
    { icon: Clock, title: "Lorem Ipsum" },
    { icon: Users, title: "Lorem Ipsum" },
    { icon: Gift, title: "Lorem Ipsum" },
    { icon: Zap, title: "Lorem Ipsum" },
  ];

  const desenvolvedores = [
    {
      nome: "Andrey Muniz Benites",
      curso: "TSI",
      foto: "./user2.jpg",
      contato: "andrey.benites@estudante.ifms.edu.br",
    },
    {
      nome: "Matheus Marques Larréa",
      curso: "TSI",
      foto: "./user1.jpeg",
      contato: "matheus.larrea@estudante.ifms.edu.br",
    },
  ];

  const [videoFinalizado, setVideoFinalizado] = useState(false);

  const [tocando, setTocando] = useState(false);

  const videoRef = useRef(null);

  const [progresso, setProgresso] = useState(0);

  const atualizarProgresso = () => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const percentual = (video.currentTime / video.duration) * 100;

    setProgresso(percentual);
  };

  const iniciarVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setTocando(true);
    }
  };

  return (
    <>
      <header className="header">
        <h2>Lorem Ipsum</h2>

        <nav>
          <a href="#beneficios">Benefícios</a>
          <a href="#feedbacks">Depoimentos</a>
          <a href="#faq">FAQ</a>
          <a href="#oferta">Oferta</a>
        </nav>

        <button
          className="buy-btn"
          onClick={() => window.open(linkWhatsapp, "_blank")}
        >
          <ShoppingCart size={18} />
          Comprar Agora
        </button>
      </header>

      <section className="section-card">
        <div className="timer">
          <div>
            <span>{tempo.dias}</span>
            Dias
          </div>

          <div>
            <span>{tempo.horas}</span>
            Horas
          </div>

          <div>
            <span>{tempo.minutos}</span>
            Minutos
          </div>

          <div>
            <span>{tempo.segundos}</span>
            Segundos
          </div>
        </div>
      </section>

      <section className="section-card hero">
        <h1>Lorem Ipsum Dolor Sit Amet</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="video-wrapper">
          <video
            ref={videoRef}
            onTimeUpdate={atualizarProgresso}
            onEnded={() => {
              setVideoFinalizado(true);
              setTocando(false);
            }}
          >
            <source src={videopage} type="video/mp4" />
          </video>

          {!tocando && (
            <button className="play-button" onClick={iniciarVideo}>
              ▶
            </button>
          )}

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progresso}%` }} />
          </div>
        </div>
      </section>

      {videoFinalizado && (
        <div className="cta-container">
          <button
            className="cta-button"
            onClick={() => window.open(linkWhatsapp, "_blank")}
          >
            Quero Saber Mais
          </button>
        </div>
      )}

      <div
        className={videoFinalizado ? "conteudo-liberado" : "conteudo-bloqueado"}
      >
        <section className="section-card">
          <h2 className="section-title">Certificações</h2>

          <div className="cert-grid">
            <div>
              <ShieldCheck size={50} color="#facc15" />
              <p>Lorem Ipsum</p>
            </div>

            <div>
              <BadgeCheck size={50} color="#facc15" />
              <p>Lorem Ipsum</p>
            </div>

            <div>
              <Trophy size={50} color="#facc15" />
              <p>Lorem Ipsum</p>
            </div>

            <div>
              <Lock size={50} color="#facc15" />
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-card">
          <h2 className="section-title">Características</h2>

          <div className="beneficios-grid">
            {beneficios.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="card" key={index}>
                  <Icon size={50} color="#facc15" />

                  <h3>{item.title}</h3>

                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="feedbacks" className="section-card">
          <h2 className="section-title">Feedbacks</h2>

          <div className="feedback-grid">
            {[1, 2, 3].map((item) => (
              <div className="feedback-card" key={item}>
                <div className="feedback-stars">
                  <Star fill="#facc15" />
                  <Star fill="#facc15" />
                  <Star fill="#facc15" />
                  <Star fill="#facc15" />
                  <Star fill="#facc15" />
                </div>

                <p>Lorem ipsum dolor sit amet.</p>

                <strong>Lorem Ipsum</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card">
          <div className="autor">
            <UserCircle size={120} color="#facc15" />

            <div className="autor-content">
              <h2>Sobre o Autor</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section-card">
          <h2 className="section-title">Dúvidas Frequentes</h2>

          <details>
            <summary>
              <CircleHelp size={18} />
              Lorem ipsum?
            </summary>

            <p>Lorem ipsum dolor sit amet.</p>
          </details>

          <details>
            <summary>
              <CircleHelp size={18} />
              Lorem ipsum?
            </summary>

            <p>Lorem ipsum dolor sit amet.</p>
          </details>
        </section>

        <section id="oferta" className="section-card oferta">
          <div>
            <h2>Oferta Especial</h2>

            <div className="preco">R$ 000,00</div>
          </div>

          <button
            className="buy-big"
            onClick={() => window.open(linkWhatsapp, "_blank")}
          >
            Comprar Agora
          </button>
        </section>

        <section className="secao-devs-compacta">
          <h4 className="titulo-devs-compacta">Criado por:</h4>

          <div className="container-devs-compacta">
            {desenvolvedores.map((membro, index) => (
              <div key={index} className="item-dev-compacto">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="foto-dev-compacta"
                />

                <div className="textos-dev-compacto">
                  <h5>{membro.nome}</h5>

                  <span className="curso-dev-compacto">{membro.curso}</span>

                  <p className="linha-contato-dev">
                    <strong>Contato:</strong> {membro.contato}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <GraduationCap size={35} />
                <h3>Lorem Ipsum</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="footer-links">
              <h4>Links Rápidos</h4>

              <a href="#">Início</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#">Passos</a>
              <a href="#feedbacks">Depoimentos</a>
              <a href="#faq">Dúvidas</a>
              <a href="#oferta">Oferta</a>
            </div>

            <div className="footer-contact">
              <h4>Contato</h4>

              <p>
                <Phone size={16} />
                Lorem ipsum dolor sit amet
              </p>

              <p>
                <Phone size={16} />
                (00) 00000-0000
              </p>

              <p>
                <Mail size={16} />
                contato@loremipsum.com
              </p>

              <p>
                <MapPin size={16} />
                Lorem ipsum dolor sit amet
              </p>
            </div>

            <div className="footer-social">
              <h4>Redes Sociais</h4>

              <div className="social-icons">
                <a href="#">
                  <FaInstagram size={22} />
                </a>

                <a href="#">
                  <FaLinkedin size={22} />
                </a>

                <a href="#">
                  <FaFacebook size={22} />
                </a>

                <a href="#">
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Lorem Ipsum. Todos os direitos reservados.
          </div>
        </footer>
      </div>

      <a
        href={linkWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp size={35} />
      </a>
    </>
  );
}

export default App;
