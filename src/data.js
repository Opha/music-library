import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      artist: "Psalm Trees, Guillaume Muschalle",
      name: "She Won't Say",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#F1D85C", "#44221B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10536",
    },
    {
      artist: "Saib",
      name: "Beyond Clouds",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DB5954", "#602846"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9311",
    },
    {
      artist: "invention_",
      name: "ebb//flo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#C67F8E", "#7CBEB6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8741",
    },
  ];
}

export default chillHop;
