import { MediaDto } from "./mediaDto";

export class ProjectDto {
  id: number = 0;
  tagline: string | null = "";
  title: string = "";
  website: string | null = "";
  attributes: string[] = [];
  media: MediaDto[] = [];
}
