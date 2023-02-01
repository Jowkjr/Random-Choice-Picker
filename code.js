const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
<<<<<<< HEAD

    randomSelect();
  }
=======
  }
  randomSelect();
>>>>>>> 06cb40f12c7bdc5a78022949b1474c1c4af7dcb9
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
<<<<<<< HEAD

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
=======
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
>>>>>>> 06cb40f12c7bdc5a78022949b1474c1c4af7dcb9
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
<<<<<<< HEAD

      highlightTag(randomTag);
    }, 100);
=======
      highlightTag(randomTag);
    });
>>>>>>> 06cb40f12c7bdc5a78022949b1474c1c4af7dcb9
  }, times * 100);
}

function pickRandomTag() {
<<<<<<< HEAD
  const tags = document.querySelectorAll(".tag");
=======
  const tags = document.querySelectorAll(".tags");
>>>>>>> 06cb40f12c7bdc5a78022949b1474c1c4af7dcb9
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
