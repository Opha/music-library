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
      artist: "Psalm Trees, Guillaume Muschalle",
      name: "She Won't Say",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F1D85C", "#44221B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10536",
    },
  ];
}

export default chillHop;
