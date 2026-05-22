declare module "splitting" {
  interface SplittingOptions {
    target?: string | Element | Element[];
    by?: string;
    key?: string;
  }

  interface SplittingResult {
    el: Element;
    chars?: Element[];
    words?: Element[];
  }

  function Splitting(options?: SplittingOptions): SplittingResult[];
  export default Splitting;
}
