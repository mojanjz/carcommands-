

var SerialPort = require('/home/root/node-serialport');
const MockBinding = SerialPort.Binding;
MockBinding.createPort('/dev/tty-usbserial1', { echo: true, record: true })
var port = new SerialPort('/dev/tty-usbserial1', {
  baudRate: 19200
});

port.on('open', function() {
  port.write('32767\h(0D)', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});
 
// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
});

