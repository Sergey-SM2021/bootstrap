export enum ArticleLabel {
  "IT" = "IT",
  "MEDICINE" = "MEDICINE",
  "ECONOMICS" = "ECONOMICS",
}

export enum ArticleType {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  CODE = "CODE",
}

interface ArticleGeneral {
  id: number;
  type: ArticleType;
}

export interface ArticleCodeBlock extends ArticleGeneral {
    type: ArticleType.CODE
    code: string
}

export interface ArticleImageBlock extends ArticleGeneral {
    type: ArticleType.IMAGE
    src: string
    title: string
}

export interface ArticleTextBlock extends ArticleGeneral {
    type: ArticleType.TEXT
    paragraphs: string[]
    title: string
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  label: ArticleLabel[];
  blocks: ArticleBlock[];
  user: {
    id: number
    nickname: string
    avatar: string
  }
}
