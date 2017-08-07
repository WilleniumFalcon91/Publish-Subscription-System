const KK = require('./krispyKreme')
const Notify = require('./webSocketNotifier')

function run(){
    KK.addHotListener(Notify.broadcast)
    KK.addNoneListener(Notify.broadcast)
}

function main() {
    Notify.init()
    KK.addHotListener(Notify.broadcast)
    KK.addNoneListener(Notify.broadcast)
}
main();

