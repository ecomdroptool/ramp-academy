export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://ramp.academy/#organization",
    name: "RAMP Academy",
    url: "https://ramp.academy",
    logo: "https://ramp.academy/logo.png",
    description:
      "Ecossistema de educação para criação de apps lucrativos com inteligência artificial. Método validado com mais de 500 alunos em 12 países.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Pedro",
      jobTitle: "Engenheiro de Software",
      description:
        "Engenheiro de Software, ex-BTG Pactual, mentor certificado Base44/Wix. Mora na Holanda.",
      sameAs: [],
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://ramp.academy/#course",
    name: "Primeiro App Lucrativo",
    description:
      "Curso completo para criar apps lucrativos com IA usando a plataforma Base44. 9 módulos, 35 aulas, 21 templates prontos. Aprenda a criar, lançar e faturar com seu próprio SaaS mesmo sem saber programar.",
    provider: {
      "@type": "EducationalOrganization",
      name: "RAMP Academy",
      url: "https://ramp.academy",
    },
    offers: {
      "@type": "Offer",
      price: "37.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: "https://ramp.academy/#programas",
      validFrom: "2025-01-01",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT13H",
      inLanguage: "pt-BR",
    },
    numberOfCredits: 9,
    educationalLevel: "Beginner",
    teaches:
      "Criação de aplicativos SaaS com inteligência artificial, monetização de apps, uso da plataforma Base44, estratégias de vendas para apps",
    inLanguage: "pt-BR",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "500",
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Vinícius" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Nunca imaginei que conseguiria faturar tanto com um app criado por mim. Faturei R$80.000 em poucos meses. O método é direto, sem enrolação.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Gerônimo" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Já saí do zero e comecei a ver resultado. Faturei R$5.000. O suporte faz toda a diferença, você nunca fica perdido.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cris" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "R$16.000 com meu primeiro app. Criei meu primeiro app e já comecei a vender na mesma semana. Parece irreal, mas funciona.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Preciso saber programar para criar um app com IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O método da RAMP Academy usa a plataforma Base44, uma ferramenta de IA que permite criar aplicativos completos sem escrever código. Mais de 500 alunos já criaram seus apps sem conhecimento técnico prévio.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa o curso Primeiro App Lucrativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O investimento é de apenas R$37 (pagamento único, sem mensalidade). O preço simbólico é possível porque a RAMP Academy recebe comissão da plataforma Base44 quando o aluno fatura com seu app — modelo ganha-ganha.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a garantia do curso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Garantia de 60 dias: se você tiver com o app ativo e não faturar pelo menos R$10.000, devolvemos 100% do investimento e ainda fazemos um PIX extra de R$200.",
        },
      },
      {
        "@type": "Question",
        name: "O que é a Base44?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Base44 é a melhor plataforma de IA para construir aplicativos do mundo, recentemente adquirida pela Wix por US$80 milhões. Ela permite criar apps completos usando inteligência artificial, sem necessidade de programação.",
        },
      },
      {
        "@type": "Question",
        name: "Em quanto tempo consigo faturar com meu app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O método é desenhado para que você consiga lançar seu app e atrair os primeiros clientes pagantes já na primeira semana. Alunos como Vinícius já faturaram R$80.000 e Cris faturou R$16.000 com seu primeiro app.",
        },
      },
      {
        "@type": "Question",
        name: "O que está incluído no curso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O curso inclui: 9 módulos completos (35 aulas), 21 templates de apps prontos para usar, acesso à comunidade de founders, método passo a passo para criar, lançar e monetizar seu app com IA. Tudo por R$37.",
        },
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ramp.academy/#webpage",
    url: "https://ramp.academy",
    name: "RAMP Academy — Construa Apps Lucrativos com IA",
    description:
      "O ecossistema completo para criar, lançar e faturar com seu próprio SaaS usando inteligência artificial. Método validado com 500+ alunos em 12+ países. Comece por apenas R$37.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://ramp.academy/#website",
      url: "https://ramp.academy",
      name: "RAMP Academy",
      inLanguage: "pt-BR",
    },
    about: {
      "@type": "EducationalOrganization",
      "@id": "https://ramp.academy/#organization",
    },
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "ReadAction",
      target: "https://ramp.academy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
}
