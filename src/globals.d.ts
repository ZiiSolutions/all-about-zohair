/* To supress ts complaining about importing scss files */
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}