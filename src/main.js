import rangy from "rangy/lib/rangy-textrange";
import "./style.css";

const input = document.querySelector("input");

input.addEventListener("input", () => {
  CSS.highlights.delete("my-highlight");

  const text = input.value;

  if (!text) return;

  const range = rangy.createRange();

  const ranges = [];
  while (range.findText(text)) {
    ranges.push(range.cloneRange().nativeRange);
    range.collapse(false);
  }

  if (ranges.length) {
    const highlight = new Highlight(...ranges);
    CSS.highlights.set("my-highlight", highlight);
  }
});
