import { useEffect, useRef, useState } from 'react';
import { 
  FaqContainer, 
  FaqTitle, 
  FaqGrid, 
  FaqCard, 
  FaqQuestion, 
  FaqAnswer,
  FaqIcon
} from './styles';

export const FaqSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisibleNow = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisibleNow !== isVisible) {
          setIsVisible(isVisibleNow);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const faqs = [
    {
      question: "Como fazer um pedido?",
      answer: "Você pode realizar seu pedido de duas formas:\n\n1. Via WhatsApp: Entre em contato com um de nossos consultores. Ele entenderá sua necessidade, montará a proposta e ajudará você a concluir o pedido.\n\n2. Via WebSite: Vá na aba de produtos, selecione todos os produtos que deseja, após isso entre no seu carrinho de compras e clique em 'Fazer Orçamento', você será redirecionado para o canal de comunicação com um de nossos consultores e lá ele finalizara o seu pedido."
    },
    {
      question: "Quando receberei minha entrega?",
      answer: "O prazo estimado de produção é de 5 a 15 dias úteis, dependendo da demanda ou da transportadora, contando a partir da aprovação da arte final. Após a produção, o prazo de entrega dependerá do tempo estimado pela transportadora, que varia conforme a localização.\n\nCaso tenha dúvidas ou precise de mais informações sobre os prazos, nossa equipe estará à disposição para ajudar!"
    },
    {
      question: "Qual o pedido mínimo?",
      answer: "Trabalhamos com uma variedade de embalagens e métodos de impressão. O pedido mínimo pode variar dependendo do tipo de embalagem e do método de produção escolhido.\n\nPara obter informações detalhadas sobre o pedido mínimo de um produto específico, entre em contato com nossa equipe de consultores. Eles poderão orientá-lo com base nas suas necessidades!"
    },
    {
      question: "Entregamos em todo o Brasil?",
      answer: "Sim, realizamos entregas para todo o Brasil! Utilizamos transportadoras parceiras para garantir que seu pedido chegue com segurança e dentro do prazo estimado."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqContainer ref={sectionRef} $isVisible={isVisible}>
      <FaqTitle>
        <span>❓</span> PRINCIPAIS DÚVIDAS <span>❓</span>
      </FaqTitle>
      
      <FaqGrid>
        {faqs.map((faq, index) => (
          <FaqCard 
            key={index} 
            $isOpen={openIndex === index}
            onClick={() => toggleFaq(index)}
          >
            <FaqQuestion>
              <FaqIcon $isOpen={openIndex === index}>
                {openIndex === index ? '−' : '+'}
              </FaqIcon>
              {faq.question}
            </FaqQuestion>
            <FaqAnswer $isOpen={openIndex === index}>
              {faq.answer.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </FaqAnswer>
          </FaqCard>
        ))}
      </FaqGrid>
    </FaqContainer>
  );
};