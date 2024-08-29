import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 20px;
  height: auto;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  display: flex;
  font-size: 20px;
  padding: 10px;
  line-height: 45px;
  margin: 50px;
`;

const PassByInfo = () => {
  const [ticketSaved, setTicketSaved] = useState(false);

  useEffect(() => {
    // Simular o salvamento automático do ticket
    setTimeout(() => {
      setTicketSaved(true);
    }, 2000);
  }, []);

  return (
    <Container>
      <TextContainer>
        <Title>Nosso produto</Title>
        <Description>
          Na PassBy, abraçamos a tecnologia NFC como um componente central de
          nosso projeto inovador de estacionamentos. Utilizamos a NFC para
          transformar radicalmente a maneira como as pessoas acessam e pagam
          pelo estacionamento. Com essa tecnologia, os usuários podem
          simplesmente tocar seus smartphones ou dispositivos compatíveis em um
          ponto de leitura, e seus tickets de estacionamento são salvos
          virtualmente em seus dispositivos. Isso elimina a necessidade de
          bilhetes de papel, reduzindo o desperdício e contribuindo para um
          ambiente mais sustentável. Além disso, a NFC oferece uma experiência
          de pagamento sem atritos, permitindo que os clientes evitem as filas
          nas cabines de pagamento tradicionais. 
          A NFC também desempenha um
          papel fundamental em nossa solução de reconhecimento de placa de
          veículo. Quando os motoristas estão prontos para sair, nossa
          tecnologia de leitura de NFC permite que o sistema identifique
          automaticamente seus veículos, agilizando o processo de saída. Mesmo
          em casos em que a conexão de rede é perdida, nossos sistemas são
          projetados para garantir que os dados do ticket sejam armazenados com
          segurança e enviados quando a conectividade for restaurada. Na PassBy,
          a NFC é a base de uma experiência de estacionamento mais eficiente,
          sustentável e conveniente para todos os nossos clientes, contribuindo
          para um futuro de mobilidade mais inteligente.
        </Description>
        {ticketSaved && (
          <p>
            <strong>EM APENAS 2 SEGUNDOS SEU TICKET NO CELULAR.</strong>
          </p>
        )}
      </TextContainer>
    </Container>
  );
};

export default PassByInfo;