// src/app/models/job.ts
export class Job {
  constructor(
    public imageUrl: string,
    public imageAlt: string,
    public link: string,
    public title: string,
    public type: string,
    public tasks: string[]
  ) {}
}
