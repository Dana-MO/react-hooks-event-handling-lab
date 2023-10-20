// Code EyesOnMe Component Here

export default function EyesOnMe() {
    function focus() {
        console.log("Good!");
    };

    function blur() {
        console.log("Hey! Eyes on me!");
    }

  return (
    <button onFocus={focus} onBlur={blur}>Eyes on me</button>
  )
}
