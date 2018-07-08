function addBorder(picture: string[]): any {
  const wall: string = '*'.repeat(picture[0].length + 2);

  // const borderLength = picture[0].length + 2;
  // let wall = '';

  // for (let i = 0; i < borderLength; i++) {
  //   wall = wall.concat('*');
  // }

  for (let j = 0; j < picture.length; j++) {
    picture[j] = `*${picture[j]}*`;
  }

  picture.unshift(wall);
  picture.push(wall);

  return picture;
}

console.log(addBorder(['abc', 'ded']));
