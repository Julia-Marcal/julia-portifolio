export class Job {
  constructor(
    public image: string,
    public alt: string,
    public link: string,
    public title: string,
    public func: string,
    public descriptions: string[]
  ) {}
}
