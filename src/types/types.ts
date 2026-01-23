export type SkillType = {
  skillsGroupTitle: string;
  skillsItems: SkillItemType[],
};

export type SkillItemType = {
  skillName: string,
  skillIcon: string,
  skillDescription?: string;
};

export type WorkType = {
  href: string;
  label: string;
  title: string;
  desc: string;
  fullDesc: string;
  technologies: string[];
  imgSrc: string;
  gifSrc?: string;
  gifMobSrc?: string;
};