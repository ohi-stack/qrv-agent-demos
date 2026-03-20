const API_BASE_URL =
  process.env.QRV_API_URL || "http://127.0.0.1:3000";

// Example product QRVIDs in a supply chain
const qrvids = [
  "QRV-0001-TEST-0001",
  "QRV-0001-UNKNOWN-0002"
];

async function verifyItem(qrvid) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/verify/${encodeURIComponent(qrvid)}`
    );

    const data = await response.json();

    console.log(`\nItem: ${qrvid}`);
    console.log(`State: ${data.verificationState}`);

    switch (data.verificationState) {
      case "VERIFIED":
        console.log("Decision: ALLOW into supply chain");
        break;
      case "EXPIRED":
        console.log("Decision: HOLD - expired record");
        break;
      case "REVOKED":
        console.log("Decision: BLOCK - revoked item");
        break;
      default:
        console.log("Decision: REJECT - not found or invalid");
    }
  } catch (error) {
    console.error(`Error verifying ${qrvid}:`, error.message);
  }
}

async function runDemo() {
  console.log("Supply Chain Verification Demo");

  for (const qrvid of qrvids) {
    await verifyItem(qrvid);
  }
}

runDemo();
