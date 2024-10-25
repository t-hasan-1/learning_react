// PascalCasing
function Message() {
  // JSX: Javascript XML
  const name ='Taha'
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;

}
// don't use default in export, decreases flexibility
export { Message };
