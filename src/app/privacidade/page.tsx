import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da RAMP Academy — como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-text hover:text-void transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Voltar
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-void">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-text">
          Última atualização: 27 de março de 2026
        </p>

        <div className="mt-10 space-y-8 text-void/70 leading-relaxed text-[15px]">
          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              1. Introdução
            </h2>
            <p>
              A RAMP Academy está comprometida com a proteção da privacidade dos seus usuários.
              Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e
              compartilhamos suas informações pessoais, em conformidade com a Lei Geral de Proteção
              de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              2. Dados que Coletamos
            </h2>
            <p className="mb-3">Podemos coletar os seguintes tipos de dados:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Dados de identificação:</strong> nome, email, telefone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Dados de pagamento:</strong> processados exclusivamente pelos gateways de pagamento parceiros, não armazenamos dados de cartão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Dados de uso:</strong> páginas visitadas, tempo de permanência, cliques, dispositivo e navegador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Dados de comunicação:</strong> mensagens enviadas via formulários, email ou comunidades</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              3. Como Utilizamos seus Dados
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Fornecer e melhorar nossos serviços e conteúdos
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Processar pagamentos e gerenciar assinaturas
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Enviar comunicações sobre cursos, atualizações e novidades (com seu consentimento)
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Gerenciar acesso às comunidades (Discord e WhatsApp)
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Cumprir obrigações legais e regulatórias
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              4. Compartilhamento de Dados
            </h2>
            <p className="mb-3">
              Seus dados podem ser compartilhados com terceiros apenas nas seguintes situações:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Gateways de pagamento:</strong> para processar transações financeiras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Plataformas de curso:</strong> para entrega do conteúdo adquirido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Ferramentas de email marketing:</strong> para envio de newsletters e comunicações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                <span><strong className="text-void">Obrigação legal:</strong> quando exigido por lei ou ordem judicial</span>
              </li>
            </ul>
            <p className="mt-3">
              Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              5. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação,
              analisar o uso do site e personalizar conteúdo. Você pode gerenciar suas preferências
              de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              6. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, perda, alteração ou divulgação. Utilizamos criptografia HTTPS e
              armazenamos dados em servidores seguros. No entanto, nenhum sistema é 100% seguro,
              e não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              7. Seus Direitos (LGPD)
            </h2>
            <p className="mb-3">
              De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Confirmação e acesso aos dados tratados
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Correção de dados incompletos ou desatualizados
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Anonimização, bloqueio ou eliminação de dados desnecessários
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Portabilidade dos dados
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Eliminação dos dados tratados com consentimento
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-void/30 mt-2.5 flex-shrink-0" />
                Revogação do consentimento
              </li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo email indicado abaixo.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              8. Retenção de Dados
            </h2>
            <p>
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para
              as quais foram coletados, incluindo obrigações legais, fiscais e regulatórias. Dados
              de clientes são mantidos enquanto houver relação comercial ativa e por até 5 anos
              após o encerramento, conforme legislação fiscal brasileira.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              9. Menores de Idade
            </h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos
              intencionalmente dados de menores. Se tomarmos conhecimento de que dados de
              um menor foram coletados, providenciaremos sua exclusão imediata.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              10. Alterações nesta Política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos
              sobre alterações significativas por email ou aviso no site. Recomendamos que
              revise esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              11. Contato do Encarregado de Dados (DPO)
            </h2>
            <p>
              Para questões relacionadas à privacidade e proteção de dados, entre em contato:{" "}
              <a href="mailto:privacidade@ramp.academy" className="text-void font-medium hover:underline">
                privacidade@ramp.academy
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
