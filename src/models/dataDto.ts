import { FrontMatter } from "./frontMatter";

export class DataDto {
  markdownRemark: MarkDownRemark = new MarkDownRemark();
}

export class MarkDownRemark {
  frontmatter: FrontMatter = new FrontMatter();
}
