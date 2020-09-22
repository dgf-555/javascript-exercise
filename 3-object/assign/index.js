export default function addSerialNumber(source) {
  const obj = Object.assign(source, {
    serialNumber: '12345',
    type: 'accessory',
    properties: { color: 'green', status: 'processed' }
  });
  return obj;
}
