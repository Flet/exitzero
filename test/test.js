var tapetest = require('tape')
var nixt = require('nixt')

tapetest('be sure this exits non-zero while not wrapped', function (t) {
  nixt()
    .run('node thisdoesnotexist')
    .code(8)
    .end(t.end)
})

tapetest('has exit code zero when wrapped command fails', function (t) {
  nixt()
    .run('node index.js node thisdoesnotexist')
    .code(0)
    .end(t.end)
})

tapetest('has exit code zero when wrapped command succeeds', function (t) {
  nixt()
    .run('node -v')
    .code(0)
    .end(t.end)
})
