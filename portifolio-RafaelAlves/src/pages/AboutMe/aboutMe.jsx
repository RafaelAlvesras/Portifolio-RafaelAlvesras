import Button from "../../Components/ButtonNav/ButtonNav"
import Footer from "../../Components/Footer/Footer"
import { Link } from "react-router-dom"

export const AboutMe = () => {

    return (
        <>
            <header>
                <Link to={"/"}><Button>Pagina Principal</Button></Link>
            </header>
            <main>
                <h2>Sobre Mim: Uma Jornada de Paixão e Transformação</h2>
                <p>Olá! Sou apaixonado por tecnologia, um entusiasta que sempre usufruiu dos avanços, mas que, inicialmente, duvidava que o desenvolvimento fosse o seu caminho. Minha trajetória é uma fusão entre a descoberta da programação e a transição de uma vida marcada por disciplina, hierarquia e trabalho em equipe.</p>
                <p>Desde jovem, vivi intensamente o esporte. Dos campos de futebol às fileiras da Força Aérea, minha jornada esportiva me proporcionou valiosos ensinamentos. Até os 17 anos, fui um dedicado jogador de futebol, mas meu destino me levou a novos horizontes ao ingressar na Força Aérea, onde servi orgulhosamente por quatro anos.</p>
                <p>Foi durante esse período que o futebol americano entrou em cena, tornando-se minha paixão pelos últimos 11 anos. Nesse esporte, aprendi lições cruciais sobre disciplina, hierarquia e, acima de tudo, a importância da preparação e do esforço para alcançar o sucesso. Cada treino, cada jogada, ensinou-me que tudo tem seu tempo, e a perseverança é a chave para superar desafios.</p>
                <p>Além das experiências esportivas, minha jornada profissional incluiu uma incursão no universo das vendas. Como microempreendedor, aprendi a arte de lidar com o público, compreendendo a importância de um atendimento cordial e eficiente.</p>
                <p>Minha história é uma sinfonia de experiências que me moldaram em um profissional dedicado e resiliente. A paixão pela tecnologia veio à tona quando decidi explorar o mundo da programação. O que antes parecia um território desconhecido revelou-se meu verdadeiro domínio.</p>
                <p>Hoje, como desenvolvedor, trago não apenas habilidades técnicas, mas uma bagagem de valores cultivados ao longo de uma jornada única. A disciplina, a resiliência e a dedicação que aprendi no campo de jogo e nos corredores da Força Aérea agora se traduzem em códigos e soluções.</p>
                <p>Estou animado para contribuir para o mundo da tecnologia, onde cada desafio é uma oportunidade de crescimento. Seja bem-vindo à minha jornada, uma narrativa tecida com fios de paixão, superação e a constante busca por excelência. Estou pronto para os próximos capítulos dessa emocionante aventura no universo da programação.</p>
            </main>
            <Footer />
        </>
    )
}