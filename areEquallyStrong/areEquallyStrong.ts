function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWeakest: number = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest: number = yourLeft <= yourRight ? yourRight : yourLeft;

  const friendsWeakest: number =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest: number =
    friendsLeft <= friendsRight ? friendsRight : friendsLeft;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
