export type PageRendererProps = {
  readonly stepNum: number;
  readonly goToStep: (stepNum: number) => void;
}

export type PageRenderer = (props: PageRendererProps) => JSX.Element;

export type SectionAndPage = {
  readonly sectionNum: number;
  readonly pageNum: number;
}

type Section = {
  minPageNum: number;
  maxPageNum: number;
  pages: PageRenderer[];
};

type PageRegistry = {
  minSectionNum: number;
  maxSectionNum: number;
  sections: Section[];
};

let registry: PageRegistry | null = null;

export function registerPage(sectionNum: number, pageNum: number, renderer: PageRenderer) {
  if (!registry) {
    registry = createRegistry(sectionNum);
  }
  let section = registry.sections[sectionNum];
  if (!section) {
    section = registerSection(registry, sectionNum, pageNum);
  } else if (section.pages[pageNum]) {
    throw new Error(`Page ${pageNum} in section ${sectionNum} already exists.`);
  }
  if (pageNum > section.maxPageNum) {
    section.maxPageNum = pageNum;
  } else if (pageNum < section.minPageNum) {
    section.minPageNum = pageNum;
  }
  section.pages[pageNum] = renderer;
}

function createRegistry(sectionNum: number): PageRegistry {
  registry = {
    minSectionNum: sectionNum,
    maxSectionNum: sectionNum,
    sections: [],
  };
  return registry;
}

function registerSection(registry: PageRegistry, sectionNum: number, pageNum: number): Section {
  const section = {
    minPageNum: pageNum,
    maxPageNum: pageNum,
    pages: []
  };
  registry.sections[sectionNum] = section;
  return section;
}

export function getPage(sectionNum: number, pageNum: number): PageRenderer | null {
  if (!registry) {
    return null;
  }
  const section = registry.sections[sectionNum];
  if (!section) {
    return null;
  }
  return section.pages[pageNum] || null;
}

export function getPreviousSectionAndPage(sectionNum: number, pageNum: number): SectionAndPage | null {
  if (!registry) {
    return null;
  }
  const section = registry.sections[sectionNum];
  if (!section) {
    return null;
  }
  if (pageNum > section.minPageNum) {
    return {
      sectionNum: sectionNum,
      pageNum: pageNum - 1,
    };
  }
  if (sectionNum === registry.minSectionNum) {
    return null;
  }
  const previousSectionNum = sectionNum - 1;
  const previousSection = registry.sections[previousSectionNum];
  if (!previousSection) {
    return null;
  }
  return {
    sectionNum: previousSectionNum,
    pageNum: previousSection.maxPageNum,
  };
}

export function getNextSectionAndPage(sectionNum: number, pageNum: number): SectionAndPage | null {
  if (!registry) {
    return null;
  }
  const section = registry.sections[sectionNum];
  if (!section) {
    return null;
  }
  if (pageNum < section.maxPageNum) {
    return {
      sectionNum: sectionNum,
      pageNum: pageNum + 1,
    };
  }
  if (sectionNum === registry.maxSectionNum) {
    return null;
  }
  const nextSectionNum = sectionNum + 1;
  const nextSection = registry.sections[nextSectionNum];
  if (!nextSection) {
    return null;
  }
  return {
    sectionNum: nextSectionNum,
    pageNum: nextSection.minPageNum,
  };
}
