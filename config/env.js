export function filename() {
  let _name = ".env.development";
  console.log("process.env.BASE: ", process.env.BASE);
  switch (process.env.BASE) {
    case "dev":
      _name = ".env.development";
      break;
    case "build":
      _name = ".env.production";
      break;
    case "test":
      _name = ".env.test";
      break;
  }
  return _name;
}
