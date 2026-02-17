declare module "rss" {
  interface RSSItemOptions {
    title: string;
    url: string;
    description: string;
    date: string;
  }
  interface RSSOptions {
    title: string;
    site_url: string;
    feed_url: string;
  }
  class RSS {
    constructor(options: RSSOptions);
    item(options: RSSItemOptions): void;
    xml(options: { indent: boolean }): string;
  }
  export = RSS;
}
