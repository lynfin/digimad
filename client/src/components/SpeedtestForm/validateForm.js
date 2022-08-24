export default function validateForm({
  latency,
  download,
  upload,
  connectiontype,
  connectionprovider,
  testprovider,
  start,
  end,
}) {
  let errors = [];
  let cellular = false;

  if (
    !(
      connectiontype.trim() &&
      connectiontype.match(/^(wifi|cellular|ethernet)$/)
    )
  ) {
    errors.push('Connection type must be wifi, cellular, or ethernet');
  } else {
    cellular = connectiontype.trim() === 'cellular';
  }

  if (cellular && !connectionprovider.trim()) {
    errors.push('Connection provider must be specified for cellular tests');
  }

  if (
    !(
      testprovider.trim() &&
      testprovider.match(/^(speedtest|speedcheck|other)$/)
    )
  ) {
    errors.push('Test provider must be speedtest, speedcheck, or other');
  }

  //   if (!(latency.trim() && latency.match(/^[+-]?(\d+(\.\d+)?|\.\d+)$/))) {
  //     errors.push('Latency must be specified');
  //   }
  if (!(download > 0)) {
    errors.push('Download must be greater than zero');
  }
  if (!(upload > 0)) {
    errors.push('Upload must be greater than zero');
  }
  if (!(latency > 0)) {
    errors.push('Latency must be greater than zero');
  }
  return errors;
}
