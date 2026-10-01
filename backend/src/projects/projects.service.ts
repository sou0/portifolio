import { Injectable, NotFoundException } from '@nestjs/common';

export interface ProjectEntity {
  id: string;
  title: string;
  category: 'wordpress' | 'nextjs' | 'systems' | 'cms';
  type: string;
  badge?: string;
  description: string;
  highlights: string[];
  techs: string[];
  link?: string;
  github?: string;
}

@Injectable()
export class ProjectsService {
  private readonly projects: ProjectEntity[] = [
    {
      id: 'juniors-cms',
      title: "Junior's CMS & Omnichannel Suite",
      category: 'cms',
      type: 'Headless CMS, E-commerce & PDV',
      badge: 'Flagship Project',
      description: 'Plataforma omnichannel completa que une CMS editorial avançado, vitrine em Astro SSR com Core Web Vitals 100/100, retaguarda fiscal (SEFAZ-PE), frente de caixa (PDV desktop com Tauri) e microsserviços integrados a PostgreSQL.',
      highlights: [
        'Vitrine em Astro (SSR com Node.js) e ilhas React para performance e SEO extremos.',
        'Painel administrativo completo (React + Vite + TypeScript) com empacotamento desktop via Tauri para lojas físicas.',
        'PDV com impressão térmica silenciosa via WebUSB e IP direto, e controle de múltiplos caixas.',
        'Módulo Fiscal completo com contingência de NFC-e, integração SEFAZ-PE e cálculo de ICMS/CSOSN.',
        'Editor de conteúdo para Blog, central de SEO dinâmico, cupons com regras de 1ª compra e chat integrado.'
      ],
      techs: ['Astro SSR', 'React 18', 'TypeScript', 'Tauri', 'Node.js', 'PostgreSQL', 'Docker', 'SEFAZ-PE']
    },
    {
      id: 'juniors-seo-plugin',
      title: "Junior's SEO Plugin",
      category: 'nextjs',
      type: 'Open Source / Framework',
      description: 'Solução especializada em SEO Técnico para aplicações web modernas baseadas em Next.js e React.',
      highlights: [
        'Injeção dinâmica de diretivas noindex condicionadas a regras de negócio.',
        'Gestão centralizada de Open Graph, Twitter Cards e Canonical URLs dinâmicas.'
      ],
      techs: ['Next.js', 'React', 'SEO Técnico', 'Open Source'],
      github: 'https://github.com/sou0/juniors-seo-plugin'
    },
    {
      id: 'juniors-csv-update',
      title: "Junior's SEO & Meta CSV Updater",
      category: 'wordpress',
      type: 'Plugin WordPress / Data Engine',
      description: 'Ferramenta avançada para manipulação e atualização em massa de posts, mídias, termos taxonômicos e campos do ACF.',
      highlights: [
        'Mapeamento dinâmico de colunas e substituição global com suporte ao Elementor.',
        'Terminal de logs em tempo real e sistema integrado de reversão de lote (Rollback seguro).'
      ],
      techs: ['PHP', 'WordPress Plugin', 'ACF Pro', 'Elementor', 'MySQL'],
      github: 'https://github.com/sou0/juniors-csv-update'
    },
    {
      id: 'juniors-banner-manager',
      title: "Junior's Banner Manager",
      category: 'wordpress',
      type: 'Plugin WordPress / Conversion Engine',
      description: 'Gerenciador avançado para injeção dinâmica de banners estratégicos por estágios de funil de marketing (Topo, Meio, Fundo).',
      highlights: [
        'Bypass total de cache (WP Rocket, Cloudflare) via JavaScript Vanilla no front-end.',
        'Painel analítico em PHP para prevenção de sobreposição + automação de manutenção em Python.'
      ],
      techs: ['PHP', 'Vanilla JS', 'Python', 'Cache Bypass', 'A/B Testing'],
      github: 'https://github.com/sou0/juniors-banner-manager'
    },
    {
      id: 'odonto-vieira',
      title: 'Clínica Odonto Vieira',
      category: 'nextjs',
      type: 'Next.js WebApp & Serverless',
      description: 'Aplicação web odontológica de alta performance arquitetada em Next.js com implantação Serverless no Firebase.',
      highlights: [
        'Configuração dinâmica de Open Graph, Canonical Tags e estratégias de indexação.',
        'Integração de módulo autoral de SEO com painel administrativo de controle granular.'
      ],
      techs: ['Next.js', 'Firebase Serverless', 'SEO Técnico', 'Tailwind / Modern CSS'],
      link: 'https://clinicaodontovieira.com.br'
    },
    {
      id: 'search-one-ecosystem',
      title: 'Ecossistema Search One Digital',
      category: 'wordpress',
      type: 'Alta Conversão & Integração API',
      description: 'Engenharia e manutenção de páginas com altíssima taxa de conversão (meucrediario.com.br, evacard.com.br, drpaulo.com.br).',
      highlights: [
        'Feed dinâmico conectado à API do YouTube com consumo inteligente de cota de requisições.',
        'Diagnósticos avançados de Core Web Vitals com ganhos reais de posicionamento no Google.'
      ],
      techs: ['WordPress', 'YouTube Data API', 'PHP Modular', 'Core Web Vitals']
    },
    {
      id: 'bjj-digifood-leven',
      title: 'BJJ Notícias, DigiFood & Leven',
      category: 'systems',
      type: 'Portais & Sistemas Web',
      description: 'Fundação e apoio no desenvolvimento de portais de conteúdo, plataformas de cardápio e blogs corporativos.',
      highlights: [
        'Arquitetura estruturada para suportar alto tráfego de leitura com baixa latência.',
        'Customização técnica de plugins e interfaces limpas com excelente experiência de usuário.'
      ],
      techs: ['WordPress', 'JavaScript', 'PHP', 'UI/UX'],
      link: 'http://bjjnoticias.com.br'
    }
  ];

  findAll(): ProjectEntity[] {
    return this.projects;
  }

  findOne(id: string): ProjectEntity {
    const project = this.projects.find(p => p.id === id);
    if (!project) {
      throw new NotFoundException(`Projeto com ID "${id}" não encontrado.`);
    }
    return project;
  }
}
