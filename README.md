# Barbearia Prime — demonstração

Front-end responsivo de barbearia feito em Next.js 15 + React 19 + Tailwind CSS. Demonstra serviços, preços, profissionais e um fluxo interativo de pré-agendamento. **Não existe backend, salvamento de reservas, validação de disponibilidade ou pagamento real.** Os nomes, preços, profissionais, horários e endereço são fictícios; imagens vêm do Unsplash e exigem conexão com a internet.

## Executar localmente
1. Instale Node.js 20+ (recomendado 22).
2. Abra esta pasta no terminal.
3. Execute `npm install` e depois `npm run dev`.
4. Acesse http://localhost:3000.

## Publicar na Vercel
1. Crie um repositório GitHub e envie **o conteúdo desta pasta** (não o arquivo ZIP).
2. Na Vercel, escolha **Add New > Project**, importe o repositório e clique em **Deploy**.
3. O framework é identificado automaticamente como Next.js.

## Personalizar
- Edite `app/page.tsx` para trocar marca, valores, fotos, profissionais e textos.
- Para habilitar o botão de envio ao WhatsApp após preencher o formulário, configure `PHONE` com o número da barbearia (DDI + DDD + número, sem símbolos), ex.: `5562999999999`.
- Personalize cores em `app/globals.css`.
- Substitua imagens de exemplo por imagens autorizadas do cliente, preferencialmente hospedadas em `/public`.
- Nunca apresente dados fictícios como avaliações, experiência ou depoimentos reais. O projeto já está marcado como demonstração.
- Para agendamento real, implemente API, persistência e regras de disponibilidade antes de anunciar reservas como confirmadas.
