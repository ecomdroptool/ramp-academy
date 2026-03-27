import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da RAMP Academy — regras de utilização dos serviços, cursos e comunidade.",
};

export default function TermosPage() {
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
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-muted-text">
          Última atualização: 27 de março de 2026
        </p>

        <div className="mt-10 space-y-8 text-void/70 leading-relaxed text-[15px]">
          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar ou utilizar os serviços da RAMP Academy, incluindo o site, cursos,
              templates, comunidade e qualquer conteúdo disponibilizado, você concorda integralmente
              com estes Termos de Uso. Se não concordar com algum dos termos, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              2. Descrição dos Serviços
            </h2>
            <p>
              A RAMP Academy oferece cursos online, templates, mentoria e acesso a comunidades
              voltados para a criação de aplicativos e sistemas SaaS utilizando inteligência artificial.
              Os serviços podem ser gratuitos ou pagos, conforme descrito em cada oferta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              3. Cadastro e Conta
            </h2>
            <p>
              Para acessar determinados serviços, você precisará criar uma conta nas plataformas
              parceiras utilizadas pela RAMP Academy. Você é responsável por manter a confidencialidade
              de suas credenciais e por todas as atividades realizadas em sua conta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              4. Pagamentos e Reembolsos
            </h2>
            <p>
              Os pagamentos são processados por plataformas terceiras (gateways de pagamento).
              A RAMP Academy oferece garantia de reembolso de 60 dias para todos os cursos pagos,
              conforme descrito na página de venda de cada produto. Para solicitar reembolso, entre
              em contato pelo email informado na plataforma de compra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              5. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponibilizado pela RAMP Academy — incluindo vídeos, textos, templates,
              materiais didáticos, marcas e logotipos — é protegido por direitos autorais. É proibido
              copiar, reproduzir, distribuir ou comercializar qualquer conteúdo sem autorização prévia
              por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              6. Uso dos Templates
            </h2>
            <p>
              Os templates fornecidos como parte dos cursos são licenciados para uso pessoal e
              comercial do aluno. Você pode utilizá-los para criar seus próprios produtos e serviços.
              Não é permitido revender, redistribuir ou sublicenciar os templates em sua forma original.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              7. Comunidade e Conduta
            </h2>
            <p>
              Ao participar das comunidades da RAMP Academy (Discord, WhatsApp ou outras plataformas),
              você se compromete a manter uma conduta respeitosa. É proibido assédio, spam, conteúdo
              ilegal, discurso de ódio ou qualquer comportamento que prejudique a experiência dos demais
              membros. A RAMP Academy reserva-se o direito de remover membros que violem estas regras.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              8. Isenção de Garantias
            </h2>
            <p>
              Os resultados obtidos com os cursos e templates dependem do esforço e dedicação individual
              de cada aluno. A RAMP Academy não garante resultados financeiros específicos. Depoimentos
              e cases apresentados representam resultados individuais e não constituem promessa de ganhos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              9. Limitação de Responsabilidade
            </h2>
            <p>
              A RAMP Academy não se responsabiliza por danos diretos, indiretos, incidentais ou
              consequenciais decorrentes do uso ou impossibilidade de uso dos serviços, incluindo
              perda de dados, lucros cessantes ou interrupção de negócios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              10. Alterações nos Termos
            </h2>
            <p>
              A RAMP Academy pode alterar estes Termos de Uso a qualquer momento. As alterações
              entram em vigor na data de publicação. O uso continuado dos serviços após as
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              11. Contato
            </h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo email:{" "}
              <a href="mailto:contato@ramp.academy" className="text-void font-medium hover:underline">
                contato@ramp.academy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-void mb-3">
              12. Foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              Para dirimir quaisquer controvérsias, fica eleito o foro da comarca do domicílio
              do consumidor, nos termos do Código de Defesa do Consumidor.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
