export type HeroCMS = {
  title: string;
  description: string;
  tag: string;
  image: string;
};

export type AboutCMS = {
  title: string;
  description: string;
}


export type HomeCMS = {
  hero: HeroCMS,
  about: AboutCMS
}