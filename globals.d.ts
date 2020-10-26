// support for sass styling
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

// ts support for png files
declare module "*.png" {
  const value: any;
  export = value;
}

// ts support for svg files
declare module "*.svg" {
  const content: any;
  export = content;
}
