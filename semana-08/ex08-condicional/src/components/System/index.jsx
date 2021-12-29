import Mercury from "../Mercury";
import Venus from "../Venus";
import Earth from "../Earth";
import Mars from "../Mars";
import Jupiter from "../Jupiter";
import Saturn from "../Saturn";
import Uranus from "../Uranus";
import Neptune from "../Neptune";

function System({ planet }) {
  return (
    <>
      {planet === "Mercury" && (
        <Mercury
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/800px-Mercury_in_color_-_Prockter07-edit1.jpg?1640814877671"
          name="Mercury"
        ></Mercury>
      )}
      {planet === "Venus" && (
        <Venus
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/800px-PIA23791-Venus-NewlyProcessedView-20200608.jpg?1640815413517"
          name="Venus"
        ></Venus>
      )}
      {planet === "Earth" && (
        <Earth
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg?1640815512783"
          name="Earth"
        ></Earth>
      )}
      {planet === "Mars" && (
        <Mars
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg?1640815533019"
          name="Mars"
        ></Mars>
      )}
      {planet === "Jupiter" && (
        <Jupiter
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg?1640815553826"
          name="Jupiter"
        ></Jupiter>
      )}
      {planet === "Saturn" && (
        <Saturn
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jewel_of_the_Solar_System.jpg/1024px-Jewel_of_the_Solar_System.jpg?1640815581458"
          name="Saturn"
        ></Saturn>
      )}
      {planet === "Uranus" && (
        <Uranus
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg?1640815602166"
          name="Uranus"
        ></Uranus>
      )}
      {planet === "Neptune" && (
        <Neptune
          planet="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/800px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg?1640815641561"
          name="Neptune"
        ></Neptune>
      )}
    </>
  );
}

export default System;
