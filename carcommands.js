

var SerialPort = require('/home/root/node-serialport');
const ActualBinding = SerialPort.Binding;
ActualBinding.createPort('/dev/ttyUSB0',{ echo: true, record: true });
const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 115200
});

port.on('open', function() {
  port.write('32767\h(0D)', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});
 

