const API_BASE_URL = process.env.QRV_API_URL || 'https://api.qrv.network';
const qrvid = process.env.QRV_QRVID || 'QRV-PROD-CERT-000001';

async function runDemo() {
  try {
    const response = await fetch(`${API_BASE_URL}/verify/${encodeURIComponent(qrvid)}`);
    const data = await response.json();

    console.log('Verification Result:');
    console.log(JSON.stringify(data, null, 2));

    if (data.verificationState === 'VERIFIED') {
      console.log('Decision: ACCEPT credential');
    } else {
      console.log(`Decision: REJECT or FLAG credential (${data.verificationState || 'UNKNOWN'})`);
      process.exitCode = 2;
    }
  } catch (error) {
    console.error('Demo failed:', error.message);
    process.exitCode = 1;
  }
}

runDemo();
