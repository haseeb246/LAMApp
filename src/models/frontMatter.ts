import { ClientDto } from "./clientDto";
import { ProjectDto } from "./projectDto";

export class FrontMatter {
  clients: ClientDto[] = [];
  projects: ProjectDto[] = [];
  seoDescription: any;
  seoKeywords: any;
  title: string = "Home";
}
