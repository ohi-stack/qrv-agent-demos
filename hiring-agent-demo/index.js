const API_BASE_URL =
  process.env.QRV_API_URL || "http://127.0.0.1:3000";

const qrvid = "QRV-0001-TEST-0001";

async function runDemo() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/verify/${encodeURIComponent(qrvid)}`
    );

    const data = await response.json();

    console.log("Verification Result:");
    console.log(JSON.stringify(data, null, 2));

    if (data.verificationState === "VERIFIED") {
      console.log("Decision: ACCEPT credential");
    } else {
      console.log("Decision: REJECT or FLAG credential");
    }
  } catch (error) {
    console.error("Demo failed:", error.message);
    process.exitCode = 1;
  }
}

runDemo();
