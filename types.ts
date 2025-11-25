export enum Category {
  POLITICA = "Política",
  POLICIA = "Polícia",
  COTIDIANO = "Cotidiano",
  CULTURA = "Cultura",
  ESPORTES = "Esportes",
  NEGOCIOS = "Negócios",
  EDUCACAO = "Educação",
  EMPREGOS = "Empregos",
  TRANSITO = "Trânsito",
  SAUDE = "Saúde",
  DESTAQUE = "Destaque",
  COLUNISTA = "Colunista",
  MICARETA = "Micareta"
}

export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  author: Author;
  publishedAt: string; // ISO date string
  readTime: number; // minutes
  imageUrl: string;
  content: string;
  isBreaking?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}