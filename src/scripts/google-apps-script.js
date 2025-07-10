// Google Apps Script Code - Deploy this as a Web App

function doPost(e) {
  try {
    // Get the active spreadsheet (or create one)
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create("BoostFlick Subscriptions")

    // Get or create the 'Subscriptions' sheet
    let sheet = spreadsheet.getSheetByName("Subscriptions")
    if (!sheet) {
      sheet = spreadsheet.insertSheet("Subscriptions")
      // Add headers
      sheet.getRange(1, 1, 1, 4).setValues([["Email", "Timestamp", "Source", "IP Address"]])
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold")
    }

    // Get form data
    const email = e.parameter.email || ""
    const timestamp = e.parameter.timestamp || new Date().toISOString()
    const source = e.parameter.source || "Unknown"

    // Get user's IP address (if available)
    const ipAddress = e.parameter.userIP || "Unknown"

    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Invalid email address",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }

    // Check if email already exists
    const existingEmails = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues()
    const emailExists = existingEmails.some((row) => row[0] === email)

    if (emailExists) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Email already subscribed",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }

    // Add new subscription
    const newRow = [email, new Date(timestamp), source, ipAddress]
    sheet.appendRow(newRow)

    // Format the new row
    const lastRow = sheet.getLastRow()
    sheet.getRange(lastRow, 2).setNumberFormat("yyyy-mm-dd hh:mm:ss")

    // Send confirmation email (optional)
    sendConfirmationEmail(email)

    // Log the subscription
    console.log(`New subscription: ${email} from ${source} at ${timestamp}`)

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed!",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    console.error("Error processing subscription:", error)

    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Server error occurred",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet(e) {
  // Handle GET requests (for backward compatibility)
  return doPost(e)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sendConfirmationEmail(email) {
  try {
    const subject = "Welcome to BoostFlick Newsletter!"
    const body = `
      Hi there!
      
      Thank you for subscribing to the BoostFlick newsletter!
      
      You'll receive updates about our latest services, tips, and exclusive offers.
      
      If you have any questions, feel free to reach out to us at boostflick@gmail.com
      
      Best regards,
      The BoostFlick Team
    `

    MailApp.sendEmail(email, subject, body)
    console.log(`Confirmation email sent to: ${email}`)
  } catch (error) {
    console.error("Error sending confirmation email:", error)
  }
}

// Function to get all subscriptions (for admin use)
function getAllSubscriptions() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName("Subscriptions")

  if (!sheet) {
    return []
  }

  const data = sheet.getDataRange().getValues()
  return data
}

// Function to export subscriptions as CSV
function exportSubscriptionsAsCSV() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName("Subscriptions")

  if (!sheet) {
    return "No subscriptions found"
  }

  const data = sheet.getDataRange().getValues()
  let csv = ""

  data.forEach((row) => {
    csv += row.join(",") + "\n"
  })

  return csv
}
