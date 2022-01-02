// Використати одну з подій миші. Написати фукцію-обробник.
// Призначити функцію-обробник події через атрибут і через властивість.
// Використати метод addEventListener, приначити одній події різні обробники
// (написати функції-обробники). Призначити обробником події об’єкт за
// допомогою addEventListener, застосувати метод handleEvent, вивести
// елемент, на якому спрацював обробник, використовуючи event.currentTarget
// Видалити об’єкт, використовуючи removeEventListener

const paintLinks = () => {
  const links = document.getElementsByClassName("link");
  for (let link of links) {
    link.addEventListener("mouseover", () => {});
  }
};
