const NovelConfig = require('./Novel.config')
const html = require('./index.pug')({ NovelConfig })
// const $ = require('jquery')

const parser = require('./module/parser')

const $app = $('#app')
$app.html('')
$app.append(html)

// Load index script
$.get('scripts/index.txt').then(data => {
  const commands = parser(data)
  console.log(commands)
  $.each(commands, (index, cmd) => {
    if (cmd.type === 'say') {
      $app.find('#dialogArea').append(
        $('<li>')
          .append(
            $('<strong>', { text: cmd.character.name }),
            ': ',
            $('<span>', { text: cmd.content })
          )
          .css('color', cmd.character.color)
      )
    }
  })
})
