declare function ms (value: string): number;
declare function ms (value: number, options?: ms.Options): string;

declare module ms {
  export interface Options {
    long: boolean;
  }
}

export = ms;
