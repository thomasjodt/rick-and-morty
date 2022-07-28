export const getRandomNumbers = (amount = 6, count = 826) => {
  const numbers = []
  for (let i = 0; i < amount; i++) {
    const number = Math.round(Math.random() * count)
    numbers.push(number)
  }
  return numbers
}
