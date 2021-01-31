module.exports = str => {
  const Scripts = str.split('\n')

  const Commands = []
  const Characters = {}
  // const defs = []

  Scripts.forEach((line, index) => {
    line = line.split(' ')
    const cmd = line.shift()

    // Get Characters
    if (cmd === 'character') {
      const charaDef = line.shift()
      const charaColor = line.pop()
      const charaName = line.length > 0 ? line.join(' ') : charaDef
      Characters[charaDef] = { name: charaName, color: charaColor }
    }

    // Say
    if (Characters[cmd]) {
      Commands.push({
        type: 'say',
        character: Characters[cmd],
        content: line.join(' '),
      })
    }
  })

  return Commands
}
