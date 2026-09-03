export interface Vitola {
  name: string;
  dimension: string;
}

export interface CigarLine {
  id: string; // e.g. "caoba-oro"
  name: string; // e.g. "Caoba Oro"
  tagline?: string;
  description?: string;
  badge?: string;
  image: string; // cover/main image filename
  strength: 1 | 2 | 3 | 4 | 5; // 1-5 strength scale
  wrapper: string;
  binder: string;
  filler: string;
  aging: string;
  body: string;
  notes: string[];
  packaging: string;
  vitolas: Vitola[];
  gallery: string[];
  featured?: boolean;
}

export interface HeritageStat {
  number: string;
  label: string;
}
