import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {

    const modalBodyStyle = {
        backgroundColor: '#842138', // Altere a cor de fundo para a cor desejada
        color: '#F5F5F5', // Altere a cor do texto, se necessário
      };
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton
      style={modalBodyStyle}>
        <Modal.Title id="contained-modal-title-vcenter">
            Política de Entregas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={modalBodyStyle}>

        <h3>Política de Entregas da Cherry Store.</h3>

        <p>
            Na Cherry Store, estamos empenhados em garantir que a sua experiência de compra online seja tão satisfatória quanto possível, e parte fundamental disso é a nossa Política de Entregas. Nossa missão é assegurar que os produtos que você escolheu cheguem até você de maneira rápida, segura e conveniente.
            <br />
            <br />
            <strong>Opções de Entrega:</strong>
            <br />
            1. Entrega Padrão: Oferecemos a opção de entrega padrão para todos os nossos clientes. O prazo de entrega pode variar de acordo com a sua localização, mas geralmente leva de 5 a 7 dias úteis. Essa é a opção mais econômica e disponível em todo o país.
            <br />
            2. Entrega Expressa: Se você precisa dos seus produtos com urgência, oferecemos a opção de entrega expressa. Com essa opção, os seus produtos serão entregues em 1 a 2 dias úteis, dependendo da sua localização. Esta é a escolha ideal para quem deseja receber seus itens de forma mais rápida.
            <br />
            3. Retirada na Loja: Para maior comodidade, disponibilizamos a opção de retirada na nossa loja física. Após a confirmação do pagamento, você pode retirar os seus produtos na loja no prazo de 24 horas.
            <br />
            <br />
            <strong>Acompanhamento de Entrega:</strong>
            <br />
            Fornecemos informações de rastreamento para que você possa acompanhar o status da sua entrega em tempo real. Assim que o pedido for despachado, você receberá um número de rastreamento por e-mail. Isso permite que você saiba exatamente onde seus produtos estão e quando você pode esperar recebê-los.
            <br />
            <br />
            <strong>Frete Grátis:</strong>
            <br />
            Oferecemos frete grátis em compras acima de um determinado valor, que pode variar de acordo com as promoções em vigor. Este é um benefício que proporcionamos aos nossos clientes para tornar a sua experiência de compra ainda mais agradável.
            <br />
            <br />
            <strong>Endereço de Entrega:</strong>
            <br />
            Certifique-se de fornecer um endereço de entrega correto e completo no momento da compra. Isso é fundamental para garantir que seus produtos sejam entregues no prazo e sem contratempos. Se precisar fazer alterações no endereço de entrega, entre em contato com a nossa equipe de atendimento ao cliente o mais rápido possível.
            <br />
            <br />
            <strong>Devoluções e Trocas:</strong>
            <br />
            Estamos empenhados em garantir a sua satisfação. Caso você não esteja completamente satisfeito com seu pedido, nossa política de devoluções e trocas está disponível para auxiliá-lo. Entre em contato conosco para obter informações detalhadas sobre como proceder.
            <br />
            Na Cherry Store, valorizamos a confiança que você deposita em nós ao escolher fazer compras em nossa loja. Nossa Política de Entregas é uma parte essencial desse compromisso, e estamos sempre à disposição para responder a quaisquer perguntas ou preocupações que você possa ter. Agradecemos por escolher a Cherry Store e esperamos que você aproveite suas compras conosco.
        </p>

      </Modal.Body>
      <Modal.Footer
      style={modalBodyStyle}>
        <Button variant='light' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
