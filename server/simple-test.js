// simple-test.js
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function simpleTest() {
  console.log("🚀 Simple MongoDB Connection Test");
  console.log("================================");

  const uri = process.env.MONGODB_URI;
  console.log("Connection string:", uri.replace(/:[^:@]*@/, ":****@"));

  // Add database name and options to the URI
  const enhancedUri = uri + "/bgremover?retryWrites=true&w=majority";
  console.log("Enhanced URI:", enhancedUri.replace(/:[^:@]*@/, ":****@"));

  try {
    console.log("\n📡 Attempting to connect...");

    // Remove deprecated options - they're now the default
    await mongoose.connect(enhancedUri);

    console.log("✅ SUCCESS: Connected to MongoDB!");
    console.log("📊 Database:", mongoose.connection.name);
    console.log("🌐 Host:", mongoose.connection.host);

    // Test the connection with a simple operation
    const admin = mongoose.connection.db.admin();
    const serverInfo = await admin.serverInfo();
    console.log("MongoDB version:", serverInfo.version);

    await mongoose.disconnect();
    console.log("\n👋 Test complete - connection closed");
  } catch (error) {
    console.error("❌ Connection failed!");
    console.error("Error type:", error.name);
    console.error("Error message:", error.message);

    if (error.message.includes("Authentication failed")) {
      console.log("\n🔧 Fix: Username or password is incorrect");
      console.log("   1. Go to MongoDB Atlas → Database Access");
      console.log('   2. Check if user "bgremover" exists');
      console.log("   3. Reset password if needed");
    }

    if (error.message.includes("ENOTFOUND")) {
      console.log("\n🔧 Fix: Cluster address is incorrect");
      console.log("   Current: bgremover.u4tikdq.mongodb.net");
      console.log(
        "   Check in Atlas: Database → Connect → Connect your application",
      );
    }

    if (error.message.includes("timed out")) {
      console.log("\n🔧 Fix: IP not whitelisted");
      console.log("   1. Go to MongoDB Atlas → Network Access");
      console.log('   2. Click "Add IP Address"');
      console.log("   3. Add your current IP or 0.0.0.0/0 for testing");

      // Get your current IP
      console.log("\n🌐 Your current IP address might be:");
      console.log(
        "   Visit https://api.ipify.org in your browser to see your IP",
      );
    }
  }
}

simpleTest();
